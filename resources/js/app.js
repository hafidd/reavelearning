import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
    <AppContainer><Root /></AppContainer>
    , document.getElementById('app')
);

if (module.hot) {
    module.hot.accept()
}
window.addEventListener('message', e => {
    //if ('production' !== process.env.NODE_ENV) {
        console.clear();
    //}
});
//import 'react-app-polyfill/ie11';
//require('./index');

