import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import { flatToHierarchy } from './utils/Array'
import Token from './utils/Token'
import axios from 'axios'

import Menu from './components/web/Menu'

const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const Profile = lazy(() => import('./components/Profile'))

const TestAdmin = lazy(() => import('./components/admin/TestAdmin'));
const MapelSiswa = lazy(() => import('./components/siswa/MapelSiswa'));

const TestAdmin2 = () => <h1>TestAdmin2</h1>

//pengajar
const Mapel = lazy(() => import('./components/pengajar/Mapel'));
const MapelSetting = lazy(() => import('./components/pengajar/MapelSetting'));
const Materi = lazy(() => import('./components/pengajar/Materi'));
const Kuis = lazy(() => import('./components/pengajar/Kuis'));

const ErrorNotFound = (props) => props.fetch ? <span><i className="fa fa-spinner fa-spin"></i> Loading menu...</span> : <h1>Not found</h1>
const Ded = (props) => {
    {
        if (!props.loggedIn) {
            return <Redirect to="/" />
        } else {
            return <h1>u ded</h1>
        }
    }
}

class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routes: [],
            menus: [],
            expanded: false,
            user: {},
            userRole: Token.getRole(),
            exp: '',
            loggedIn: false,
            fetch: true,
            sidebar: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) ? false : true,
            mobile: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) ? true : false,
        }
        this.components = {
            TestAdmin,
            Mapel,
            MapelSetting,
            Materi,
            TestAdmin2,
            MapelSiswa,
            Kuis,
            Ded,

        }
        this.logOut = this.logOut.bind(this)
    }

    componentDidMount() {
        this.getMenus()
        if (!Token.cek()) {
            this.logOut
        } else {
            this.setState({ loggedIn: true, user: Token.getUser() })
        }
    }

    setState(newState) {
        //console.log('set state', newState);
        super.setState(newState);
    }

    toggle = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded
        }))
    }

    logOut = (lastPath, force = false) => {
        console.log('logout')
        if (!force) {
            if (!confirm('Logout ?')) return
        }
        Token.del()
        this.updateRole(0, false, lastPath)
    }

    toggleSidebar = () => { this.setState({ sidebar: !this.state.sidebar, expanded: false }) }

    updateUser = (user) => {
        Token.setUser({ id: Token.getUser().id, email: user.email, name: user.name, jk: user.jk })
        this.setState({ user: Token.getUser() })
    }

    render() {
        let routes = []
        this.state.routes.forEach((route) => {
            routes.push([
                <PrivateRoute
                    role={this.state.userRole}
                    roles={route.roles}
                    key={route.path}
                    exact path={'/' + route.path}
                    name={route.name}
                    component={this.components[route.component]}
                    logOut={this.logOut}
                    sidebar={this.state.sidebar}
                    toggleSidebar={this.toggleSidebar}
                />
            ])
            JSON.parse(route.paths).forEach((path) => {
                routes.push([
                    <PrivateRoute
                        role={this.state.userRole}
                        roles={route.roles}
                        key={path}
                        exact path={'/' + path.path}
                        name={route.name}
                        component={this.components[path.component]}
                        logOut={this.logOut}
                        sidebar={this.state.sidebar}
                        toggleSidebar={this.toggleSidebar}
                    />
                ])
            })
        })
        return (
            <Suspense fallback={this.loading()}>
                <HashRouter>
                    {this.state.loggedIn ?
                        <React.Fragment>
                            <div style={{ marginLeft: this.state.mobile ? 0 : this.state.expanded ? 240 : (this.state.sidebar ? 64 : 0) }}>
                                <Menu menus={this.state.menus} userRole={this.state.userRole} expanded={this.state.expanded} toggle={this.toggle} show={this.state.sidebar} toggleSidebar={this.toggleSidebar} logOut={this.logOut} />
                                <div className="container-fluid content">
                                    <Switch>
                                        <Route exact path="/" name="Landing Page" component={() => <Landing updateRole={this.updateRole} fetch={this.state.fetch} lastPath={this.state.lastPath} />} />
                                        <PrivateRoute role={this.state.userRole} allRoles={true} path="/dashboard" component={Dashboard} user={this.state.user} sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar} />
                                        <PrivateRoute role={this.state.userRole} allRoles={true} path="/profile" component={Profile} user={this.state.user} updateUser={this.updateUser} sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar} />
                                        <Route exact path="/ded" name="Ded" component={() => <Ded loggedIn={this.state.loggedIn} />} />
                                        {routes}
                                        <Route path="*" component={() => <ErrorNotFound fetch={this.state.fetch} />} />
                                    </Switch>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        <Switch>
                            <Route exact path="/" name="Landing Page" component={() => <Landing updateRole={this.updateRole} fetch={this.state.fetch} lastPath={this.state.lastPath} />} />
                            <Route exact path="/hotreload" name="Reload Page" component={() => <HotReload />} />
                            <PrivateRoute role={this.state.userRole} allRoles={true} path="/dashboard" component={Dashboard} sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar} />
                            <PrivateRoute role={this.state.userRole} allRoles={true} path="/profile" component={Profile} sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar} />
                            <Route exact path="/ded" name="Ded" component={() => <Ded loggedIn={this.state.loggedIn} />} />
                            {routes}
                            <Route path="*" component={() => <ErrorNotFound fetch={this.state.fetch} />} />
                        </Switch>
                    }
                </HashRouter>
            </Suspense>
        )
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    getMenus() {
        axios.get('/api/app/menus')
            .then(res => {
                const menus = flatToHierarchy(res.data)
                localStorage['menus'] = JSON.stringify(menus);
                this.setState({ menus: menus, routes: res.data, fetch: false })
            })
    }

    updateRole = (role, loggedIn, lastPath, user) => {
        if (loggedIn) {
            this.setState({
                userRole: role, loggedIn: loggedIn, lastPath: lastPath, user: user
            })
        } else {
            this.setState({
                userRole: role, loggedIn: loggedIn, lastPath: lastPath,
            })
        }
    }

}
export default Root

function PrivateRoute({ role, roles = [], allRoles, component: Component, ...rest }) {
    let ok = false;
    if (allRoles && role != 0) {
        ok = true;
    } else {
        const allowed = roles.map(a => { return a.id })
        if (allowed.indexOf(role) !== -1)
            ok = true;
    }
    return (
        <Route
            {...rest}
            render={props =>
                ok ? (
                    <Component {...props} {...rest} />
                ) : (
                        <Redirect to={{ pathname: "/ded" }} />
                    )
            }
        />
    );
}
