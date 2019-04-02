import React from 'react'
import jwtDecode from 'jwt-decode'
import { withRouter } from 'react-router-dom'
//import './../dash.css'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [],
            isVisible: true,
            active: ''
        }

    }

    componentDidMount() {
        const menus = localStorage.getItem('menus')
        if (menus !== null) {
            this.setState({ menus: JSON.parse(menus) })
        }
    }

    toggle = () => {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible
        }))
    }

    render() {
        const menus = this.state.menus.map(menu => {
            const allowed = menu.roles.map(a => { return a.id })
            if (allowed.indexOf(this.props.userRole) === -1) return
            let child = []
            if (menu.child !== undefined) {
                child = menu.child.map(c => {
                    return (
                        <NavItem key={c.id} eventKey={c.path}>
                            <NavText>xx</NavText>
                        </NavItem>
                    )
                })
            }
            return (
                <NavItem key={menu.id} eventKey={menu.path}>
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>{menu.name}</NavText>
                    {child}
                </NavItem>
            )
        })
        return (
            <SideNav
                onSelect={(selected) => {
                    this.props.history.push(selected)
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    {menus}
                </SideNav.Nav>
            </SideNav>


        )
    }
}

export default withRouter(Menu)