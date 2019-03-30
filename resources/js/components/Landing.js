import React, { Component } from 'react';
import jwtDecode from 'jwt-decode'
import { Redirect } from 'react-router-dom'

import {
    Button,
} from 'reactstrap';

import TopNav from './web/TopNav'
import FormLogin from './web/LoginForm'
import FormRegister from './web/RegisterForm'

export default class Landing extends Component {
    constructor() {
        super();
        this.state = {
            form: '',
        }
        this.formChange = this.formChange.bind(this)
        this.setLoggedIn = this.setLoggedIn.bind(this)
    }

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
        }
    }

    isLoggedIn() {
        const st = localStorage.getItem('appState')
        if (st !== null) {
            const token = JSON.parse(st).user.auth_token
            return jwtDecode(token).exp > Date.now() / 1000
        }
        return false
    }

    setLoggedIn(user) {
        const appState = { user: user }
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({ user: user })
    }

    formChange(form) { this.setState({ form: form }) }

    home(form) {
        if (form === 'login') return <FormLogin formChange={this.formChange} setLoggedIn={this.setLoggedIn} />
        else if (form === 'register') return <FormRegister formChange={this.formChange} setLoggedIn={this.setLoggedIn} />
        return (
            <div className="d-flex justify-content-center h-100">
                <div className="landing-text">
                    <h1>SKRIPSI SI</h1>
                    <h4>
                        Pengembangan E-Learning Berbasis Web Menggunakan <br />
                        <span className="laravel-color"><strong>Laravel</strong>
                        </span> dan <span className="react-color"><strong>React</strong></span>
                    </h4>
                    <Button onClick={() => this.formChange('login')} className="btn btn-lg btn-landing">Log In </Button>
                    <p className="lead">Belum punya akun? <button onClick={() => this.formChange('register')} className="btn-register-link">Register</button></p>
                </div>
            </div>
        )
    }

    render() {
        if (this.isLoggedIn()) return <Redirect to='/protected' />
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