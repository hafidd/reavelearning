import React from 'react'
import jwtDecode from 'jwt-decode'
import { Redirect } from 'react-router-dom'

export default class ProtectedPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.isLoggedIn = this.isLoggedIn.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    componentWillMount() {

    }

    isLoggedIn() {
        const st = localStorage.getItem('appState')
        if (st !== null) {
            const token = JSON.parse(st).user.auth_token
            return jwtDecode(token).exp > Date.now() / 1000
        }
        return false
    }

    logOut() {
        localStorage.removeItem('appState');
        this.props.history.push('/')
    }

    render() {
        if (!this.isLoggedIn()) return <Redirect to='/' />
        return (
            <div>
                <button onClick={() => this.logOut()}>Log out</button>
                <p>halo {localStorage.getItem('appState')}</p>
            </div>
        )
    }
}