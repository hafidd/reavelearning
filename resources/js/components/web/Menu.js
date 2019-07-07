import React from 'react'
import { withRouter } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Menu(props) {
    const menuTextStyle = {
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: 'rgb(65, 65, 65)',
        fontSize: 16,
    }

    const menus = props.menus.map(menu => {
        const allowed = menu.roles.map(a => { return a.id })
        if (allowed.indexOf(props.userRole) === -1) return
        if (['profile'].indexOf(menu.path) !== -1) return
        let child = []
        if (menu.child !== undefined) {
            child = menu.child.map(c => {
                return (
                    <NavItem key={c.id} eventKey={'/' + c.path} active={('/' + c.path) === props.history.location.pathname ? true : false}>
                        <NavText style={{ marginLeft: 20, ...menuTextStyle }}>{c.name}</NavText>
                    </NavItem>
                )
            })
        }
        return (
            <NavItem key={menu.id} eventKey={'/' + menu.path} active={('/' + menu.path) === props.history.location.pathname ? true : false}>
                <NavIcon>
                    <i className={"fa fa-fw " + (menu.icon ? menu.icon : "fa-question-circle")} style={{ fontSize: '1.75em', color: 'black' }} />
                </NavIcon>
                <NavText style={menuTextStyle}>{menu.name}</NavText>
                {child}
            </NavItem>
        )
    })

    return (
        <React.Fragment>
            <button
                style={{
                    visibility: (!props.show ? 'visible' : 'hidden'), position: "fixed",
                    width: 50, height: 50, border: 'none', backgroundColor: '#AE95AC', opacity: 0.6,
                    right: 10, bottom: '2%', borderRadius: 15, boxShadow: "2px 2px 3px", zIndex: 1007
                }}
                onClick={props.toggleSidebar}
            >
                <i className="fas fa-bars" style={{ marginTop: 0 }} ></i>
            </button>
            <SideNav
                onSelect={(selected) => {
                    props.history.push(selected)
                }}
                onToggle={props.toggle}
                expanded={props.expanded}
                style={{ position: "fixed", borderRight: '1px solid rgb(222,222,222)', marginBottom: 100, background: 'rgb(245,245,245)', display: (props.show ? 'block' : 'none') }}
            >
                <SideNav.Toggle className="float-right fas fa-bars fa-2x" />
                <SideNav.Nav>
                    <hr style={{ borderColor: 'white', borderRadius: '1px', margin: 0 }} />
                    <NavItem eventKey='/dashboard' active={'/dashboard' === props.history.location.pathname ? true : false}>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText style={menuTextStyle}>Dashboard</NavText>
                    </NavItem>
                    <NavItem eventKey='/profile' active={'/profile' === props.history.location.pathname ? true : false}>
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                        <NavText style={menuTextStyle}>Profil</NavText>
                    </NavItem>
                    <hr style={{ borderColor: 'white', borderRadius: '2px', margin: 0 }} />
                    {menus}
                </SideNav.Nav>

                <SideNav.Nav style={{ width: (props.expanded ? 240 : 65), paddingTop: 70, zIndex: -1, position: 'fixed', bottom: 0, background: 'rgb(245,245,245)', borderRight: '1px solid rgb(222,222,222)', }}>
                    <NavItem onClick={props.toggleSidebar}>
                        <NavIcon style={{ float: (props.expanded ? 'right' : 'none') }}>
                            <i className="fa fa-fw fa-angle-left" style={{ fontSize: '1.75em', color: 'black' }} />
                        </NavIcon>
                    </NavItem>
                    <NavItem onClick={props.logOut}>
                        <NavIcon style={{ float: (props.expanded ? 'right' : 'none') }}>
                            <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.75em', color: 'red' }} />
                        </NavIcon>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </React.Fragment>
    )
}

export default withRouter(Menu)