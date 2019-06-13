import React from 'react'
import axios from 'axios'
import LoginForm from './../form/LoginForm'

export default class Login extends React.Component {
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
                if (!response.data.err) {
                    this.props.setLoggedIn(response.data.access_token)
                } else {
                    this.setState({
                        err: 'email / password salah',
                        isLoading: false
                    })
                }
            })
            .catch(err => {
                console.log(err)
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
                        <LoginForm
                            submitForm={this.submitForm}
                            handleChange={this.handleChange}
                            email={this.state.email}
                            password={this.state.password}
                            disabled={this.state.isLoading}
                        />

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
