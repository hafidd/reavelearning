import React from 'react'

export default class TestSiswa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {
        console.log('ok')
    }

    render() {
        return (
            <h1>halaman siswa</h1>
        )
    }
}