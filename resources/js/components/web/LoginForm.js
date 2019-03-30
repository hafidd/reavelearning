import React from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            err: ''
        }
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) { this.setState({ [e.target.name]: e.target.value }) }

    submitForm(e) {
        e.preventDefault()
        if (this.state.email === '' || this.state.password === '') {
            this.setState({ err: 'username dan password harus diisi!' })
            return
        }
        this.setState({ isLoading: true })
        axios.post('/api/user/login', this.state)
            .then(response => {
                if (response.data.success) {
                    this.setState({ isLoading: false, err: '', email: '', password: '' })
                    this.props.setLoggedIn(response.data.data)
                } else {
                    this.setState({
                        err: response.data.data,
                        isLoading: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    err: 'server error',
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <div className="d-flex justify-content-center h-100">
                <div className="card card-login">
                    <div className="card-header card-login-header">
                        <h3 className="float-left">Log In </h3>
                        <button onClick={() => this.props.formChange('')} className="card-close-btn float-right">{'x'}</button>
                    </div>
                    <div className="card-body">
                        {this.state.err !== '' && <p className="form-error">{this.state.err}</p>}
                        <form onSubmit={this.submitForm}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" disabled={this.state.isLoading} />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" disabled={this.state.isLoading} />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
					            </div>
                            <div className="form-group">
                                <button className="btn float-right login_btn" disabled={this.state.isLoading}>{this.state.isLoading && <span className="fa fa-spinner fa-pulse"></span>} Log In</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer card-login-footer">
                        <div className="d-flex justify-content-center links">
                            Belum punya akun?<a href="#" onClick={() => this.props.formChange('register')}>Register</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Lupa password?</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
