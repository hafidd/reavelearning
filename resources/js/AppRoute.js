import React, { Suspense } from 'react';
import Landing from './components/Landing'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import MyArrayHelper from './helpers/MyArrayHelper'
import Auth from './Auth'
import axios from 'axios';

import Dashboard from './components/Dashboard'

class AppRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [],
            userRole: 0,
            exp: '',
            loggedIn: false,
            fetch: true,
            updated: 0
        }

    }

    componentDidMount() {
        this.getMenus()
    }

    render() {
        const routes = this.state.menus.map((route, i) =>
            <PrivateRoute role={this.state.userRole} roles={route.roles} key={i} exact path={route.path} name={route.name} component={this.componentRegistry(route.component)} />
        )
        return (
            <Suspense fallback={this.loading()}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" name="Landing Page" component={() => <Landing updateRole={this.updateRole} fetch={this.state.fetch} />} />
                        <PrivateRoute role={this.state.userRole} roles={[{ id: 1 }, { id: 2 }]} path="/dashboard" component={() => <Dashboard updateRole={this.updateRole} userRole={this.state.userRole} />} />
                        <Route exact path="/ded" name="Ded" component={() => <Ded loggedIn={this.state.loggedIn} />} />
                        {routes}
                        <Route path="*" component={ErrorNotFound} />
                    </Switch>
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
                this.setState({ menus: res.data, fetch: false })
            })
    }

    // log-in/out
    updateRole = (role, loggedIn) => {
        console.log('updateRole executed')
        this.setState({ userRole: role, loggedIn: loggedIn })
    }

    // components
    componentRegistry = (a) => {
        let x = {
            "TestAdmin": TestAdmin,
            "TestAdmin2": TestAdmin2,
            "TestSiswa": TestSiswa,
            "Ded": Ded,
            "Priv": <TestAdmin updateRole={this.updateRole} />
        }
        return x[a];
    }
}
export default AppRoute

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
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: "/ded" }} />
                    )
            }
        />
    );
}



const TestAdmin = React.lazy(() => import('./components/admin/TestAdmin'));
const TestSiswa = React.lazy(() => import('./components/siswa/TestSiswa'));
const TestAdmin2 = () => <h1>TestAdmin2</h1>
const ErrorNotFound = () => <h1>Not found</h1>
const Ded = (props) => {
    {
        if (!props.loggedIn) {
            return <Redirect to="/" />
        } else {
            return <h1>u ded</h1>
        }
    }
}
const Priv = (props) => <h1>{props.a} router private</h1>