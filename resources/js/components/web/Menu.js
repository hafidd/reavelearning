import React from 'react'
import { withRouter } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Menu(props) {
    const menus = props.menus.map(menu => {
        const allowed = menu.roles.map(a => { return a.id })
        if (allowed.indexOf(props.userRole) === -1) return
        let child = []
        if (menu.child !== undefined) {
            child = menu.child.map(c => {
                return (
                    <NavItem key={c.id} eventKey={c.path.substr(1)} active={c.path === props.history.location.pathname ? true : false}>
                        <NavText style={{ marginLeft: 20 }}>{c.name}</NavText>
                    </NavItem>
                )
            })
        }
        return (
            <NavItem key={menu.id} eventKey={menu.path}>
                <NavIcon>
                    <i className={"fa fa-fw " + (menu.icon ? menu.icon : "fa-question-circle")} style={{ fontSize: '1.75em', color: 'black' }} />
                </NavIcon>
                <NavText style={{ color: 'black' }}>{menu.name}</NavText>
                {child}
            </NavItem>
        )
    })

    return (
        <SideNav
            onSelect={(selected) => {
                props.history.push(selected)
            }}
            onToggle={props.toggle}
            expanded={props.expanded}
            style={{ position: "fixed", background: 'rgb(174, 149, 155)', display: (props.show ? 'block' : 'none') }}
        >
            <SideNav.Toggle style={{ float: 'right' }} />
            <SideNav.Nav defaultSelected="">
                <hr style={{ borderColor: 'white', borderRadius: '2px', margin: 0 }} />
                <NavItem eventKey='dashboard' active={'/dashboard' === props.history.location.pathname ? true : false}>
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: 'black' }} />
                    </NavIcon>
                    <NavText style={{ color: 'black' }}>Dashboard</NavText>
                </NavItem>
                <NavItem eventKey='profile' active={'/profile' === props.history.location.pathname ? true : false}>
                    <NavIcon>
                        <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em', color: 'black' }} />
                    </NavIcon>
                    <NavText style={{ color: 'black' }}>Profil</NavText>
                </NavItem>
                <hr style={{ borderColor: 'white', borderRadius: '2px', margin: 0 }} />
                {menus}
            </SideNav.Nav>

            <SideNav.Nav style={{ position: 'fixed', bottom: 0, width: '64px' }}>
                <NavItem onClick={props.toggleSidebar}>
                    <NavIcon>
                        <i className="fa fa-fw fa-angle-left" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                </NavItem>
                <NavItem onClick={props.logOut}>
                    <NavIcon>
                        <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.75em', color: 'red' }} />
                    </NavIcon>
                </NavItem>
            </SideNav.Nav>
        </SideNav >
    )
}

export default withRouter(Menu)