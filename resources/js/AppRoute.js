import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/Landing'
import ProtectedPage from './components/ProtectedPage'

const Public = () => <h1>Public</h1>
const Protected = () => <h1>Protected</h1>

export default class AppRoute extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" name="Landing Page" component={Landing} />
                    <Route exact path="/public" name="public Page" component={Public} />
                    <Route exact path="/protected" name="Protected Page" component={ProtectedPage} />
                </Switch>
            </HashRouter>
        )
    }
}

/* http://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example */
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = false;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/' }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)
