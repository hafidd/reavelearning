import React from 'react'
import jwtDecode from 'jwt-decode'
import Menu from './web/Menu'
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.isLoggedIn = this.isLoggedIn.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    componentDidMount() {
        if (!this.isLoggedIn()) {
            this.logOut()
        }
    }

    render() {
        //console.log('rendering dasbor')
        return (
            <div>
                <Menu userRole={this.props.userRole} />
                <button onClick={() => this.logOut()}>Log out</button>
            </div>
        )
    }

    isLoggedIn() {
        const st = localStorage.getItem('token')
        if (st !== null) {
            const token = JSON.parse(st).token
            return jwtDecode(token).exp > Date.now() / 1000
        }
        return false
    }

    logOut() {
        // kurang 
        console.log('logout dari dasbor')
        localStorage.removeItem('token');
        this.props.updateRole(0, false);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

}