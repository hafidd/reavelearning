import React, { Component } from 'react';
import jwtDecode from 'jwt-decode'
import { Redirect, withRouter } from 'react-router-dom'

import {
    Button,
} from 'reactstrap';

import TopNav from './web/TopNav'
import FormLogin from './web/LoginForm'
import FormRegister from './web/RegisterForm'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: '',
        }
        this.formChange = this.formChange.bind(this)
        this.setLoggedIn = this.setLoggedIn.bind(this)
    }

    componentDidMount() {
        if (this.isLoggedIn()) {
            const role = jwtDecode(JSON.parse(localStorage.getItem('token')).token).role
            this.props.updateRole(role, true)
            this.props.history.push('/dashboard')
        }
    }    

    isLoggedIn() {
        const st = localStorage.getItem('token')
        if (st !== null) {
            const token = JSON.parse(st).token
            return jwtDecode(token).exp > Date.now() / 1000
        }
        return false
    }

    setLoggedIn(token) {
        const data = { token: token }
        localStorage["token"] = JSON.stringify(data);
        this.props.updateRole(jwtDecode(data.token).role, true)
        console.log('tendang ke dashbor')
        this.props.history.push('/dashboard')
    }

    formChange(form) { this.setState({ form: form }) }

    home(form) {
        //console.log('rendering landing')
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
                    <Button onClick={() => this.formChange('login')} className="btn btn-lg btn-landing" disabled={this.props.fetch}>Log In </Button>
                    <p className="lead">Belum punya akun? <button onClick={() => this.formChange('register')} className="btn-register-link" disabled={this.props.fetch}>Register</button></p>
                </div>
            </div>
        )
    }

    render() {
        //if (this.isLoggedIn()) return <Redirect to='/protected' />
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