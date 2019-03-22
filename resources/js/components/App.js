import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            test: 'ngetes laravel react heroku',
            data: []
        }
    }

    componentDidMount() {
        console.log(this.state.test);
        axios.get('/api/tesdata')
            .then(res => {
                this.setState({ data: res.data })
            }).catch(err => {
                console.log("err " + err);
            })
    }

    render() {
        const data = this.state.data.map(data => { return <li key={data.id}>{data.isi}</li> })
        return (
            <div className="container-fluid">
                laravel, react, pgsql <br />
                tes ambil data pgsql : <br />
                <ol>{data}</ol>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
