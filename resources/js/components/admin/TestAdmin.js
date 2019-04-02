import React from 'react'

export default class TestAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {

    }

    logOut = () => {
        console.log('logout dari admin')
        localStorage.removeItem('token');
        this.props.updateRole(0, false);
    }

    render() {
        console.log('rendering admin')
        return (
            <div>
                <h1>halaman admin</h1>
                <button onClick={this.logOut} >log out</button>
            </div>
        )
    }
}