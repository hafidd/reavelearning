import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            test: 'ngetes laravel react heroku'
        }
    }

    componentDidMount() {
        console.log(this.state.test);
    }

    render() {
        return (
            <div className="container-fluid">
                nongol berarti sukses
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
