import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import MyArrayHelper from './helpers/MyArrayHelper'
import Token from './Token'
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import Menu from './components/web/Menu'

const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))

const TestAdmin = lazy(() => import('./components/admin/TestAdmin'));
const TestSiswa = lazy(() => import('./components/siswa/TestSiswa'));
const TestAdmin2 = () => <h1>TestAdmin2</h1>

//pengajar
const Mapel = lazy(() => import('./components/pengajar/Mapel'));

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
            userRole: Token.getRole(),
            exp: '',
            loggedIn: false,
            fetch: true,
        }
        this.logOut = this.logOut.bind(this)

    }

    componentDidMount() {
        this.getMenus()
        if (!Token.cek()) {
            this.logOut()
        } else {
            this.setState({ loggedIn: true })
        }
    }

    toggle = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded
        }))
    }

    logOut = (lastPath) => {
        Token.del()
        this.updateRole(0, false, lastPath)
    }

    components = (a) => {
        let x = {
            "TestAdmin": TestAdmin,
            "Mapel": Mapel,
            "TestAdmin2": TestAdmin2,
            "TestSiswa": TestSiswa,
            "Ded": Ded,
        }
        const ComponentName = x[a]
        return <ComponentName logOut={this.logOut} />;
    }

    render() {
        const routes = this.state.routes.map((route, i) =>
            <PrivateRoute
                role={this.state.userRole}
                roles={route.roles} key={i}
                exact path={route.path}
                name={route.name}
                component={() => this.components(route.component)}
            />
        )
        return (
            <Suspense fallback={this.loading()}>
                <HashRouter>
                    {this.state.loggedIn ? <div style={{ marginLeft: this.state.expanded ? 240 : 64 }}>
                        <Menu menus={this.state.menus} userRole={this.state.userRole} expanded={this.state.expanded} toggle={this.toggle} logOut={this.logOut} />
                        <Switch>
                            <Route exact path="/" name="Landing Page" component={() => <Landing updateRole={this.updateRole} fetch={this.state.fetch} lastPath={this.state.lastPath} />} />
                            <PrivateRoute role={this.state.userRole} roles={[{ id: 1 }, { id: 2 }, { id: 4 }]} path="/dashboard" component={() => <Dashboard updateRole={this.updateRole} userRole={this.state.userRole} />} />
                            <Route exact path="/ded" name="Ded" component={() => <Ded loggedIn={this.state.loggedIn} />} />
                            {routes}
                            <Route path="*" component={() => <ErrorNotFound fetch={this.state.fetch} />} />
                        </Switch>
                    </div> :
                        <Switch>
                            <Route exact path="/" name="Landing Page" component={() => <Landing updateRole={this.updateRole} fetch={this.state.fetch} lastPath={this.state.lastPath} />} />
                            <PrivateRoute role={this.state.userRole} roles={[{ id: 1 }, { id: 2 }]} path="/dashboard" component={() => <Dashboard updateRole={this.updateRole} userRole={this.state.userRole} />} />
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

    // fetch menu
    getMenus() {
        axios.get('/api/app/menus')
            .then(res => {
                const menus = MyArrayHelper.flatToHierarchy(res.data)
                localStorage['menus'] = JSON.stringify(menus);
                this.setState({ menus: menus, routes: res.data, fetch: false })
            })
    }

    // log-in/out
    updateRole = (role, loggedIn, lastPath) => {
        this.setState({ userRole: role, loggedIn: loggedIn, lastPath: lastPath })
    }

}
export default Root

// private route
function PrivateRoute({ role, roles, component: Component, ...rest }) {
    let ok = false;
    const allowed = roles.map(a => { return a.id })
    if (allowed.indexOf(role) !== -1) {
        ok = true;
    }
    if (!ok) console.log('tendang')
    return (
        <Route
            {...rest}
            render={props =>
                ok ? (
                    <Component />
                ) : (
                        <Redirect to={{ pathname: "/ded" }} />
                    )
            }
        />
    );
}
