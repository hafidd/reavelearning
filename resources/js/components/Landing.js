import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import Token from '../utils/Token'

import { Button } from 'reactstrap';

import TopNav from './web/TopNav'
import Login from './web/Login'
import FormRegister from './web/RegisterForm'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: props.form,
        }
        this.formChange = this.formChange.bind(this)
        this.setLoggedIn = this.setLoggedIn.bind(this)
    }

    componentDidMount() {
        if (Token.getRole() !== 0) {
            this.props.updateRole(Token.getRole(), true, '', Token.getUser())
            this.props.history.push('/dashboard')
        }
    }

    setLoggedIn(data) {
        Token.setToken(data.access_token)
        Token.setUser(data.user)
        this.props.updateRole(Token.getRole(), true, this.props.lastPath, data.user)
        if (this.props.lastPath) {
            this.props.history.push(this.props.lastPath)
        } else {
            this.props.history.push('/dashboard')
        }
    }

    formChange(form) { this.setState({ form: form }) }

    home(form) {
        if (form === 'login') return <Login formChange={this.formChange} setLoggedIn={this.setLoggedIn} />
        else if (form === 'register') return <FormRegister formChange={this.formChange} setLoggedIn={this.setLoggedIn} />
        return (
            <div className="d-flex justify-content-center h-100">
                <div className="landing-text">
                    <h1>SKRIPSI SI</h1>
                    <h4>
                        Pengembangan E-Learning Menggunakan <br />
                        <span className="laravel-color"><strong>Laravel</strong>
                        </span> dan <span className="react-color"><strong>React</strong></span>
                    </h4>
                    <Button onClick={() => this.formChange('login')} className="btn btn-lg btn-landing" disabled={this.props.fetch}>Log In </Button>
                    <p className="lead">Belum punya akun? <button onClick={() => this.formChange('register')} className="btn-register-link" disabled={this.props.fetch}>Register</button></p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="app">
                <TopNav />
                <div className="home">
                    {this.home(this.state.form)}
                </div>
            </div>
        );
    }
}

export default withRouter(Landing)