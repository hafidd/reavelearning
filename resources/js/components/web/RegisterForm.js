import React from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            error: []
        }
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) { this.setState({ [e.target.name]: e.target.value }) }

    submitForm(e) {
        e.preventDefault()
        axios.post('/api/user/register', this.state)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="d-flex justify-content-center h-100">
                <div className="card card-login">
                    <div className="card-header card-login-header">
                        <h3 className="float-left">Register</h3>
                        <button onClick={() => this.props.formChange('')} className="card-close-btn float-right">{'x'}</button>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitForm}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" placeholder="Nama Lengkap" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
					            </div>
                            <div className="form-group">
                                <button className="btn float-right login_btn">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer card-login-footer">
                        <div className="d-flex justify-content-center links">
                            Sudah punya akun?<a href="#" onClick={() => this.props.formChange('login')}>Log In</a>
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
