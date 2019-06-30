import React from 'react'
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h2>Dashboard</h2>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Mata Pelajaran</h5>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-center" width="10%">Kode</th>
                                                <th className="text-center" width="">Nama</th>
                                                <th className="text-center" width="10%" width="">Siswa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">MP01S2018</td>
                                                <td>Pemrograman php dasar / k1</td>
                                                <td className="text-center">25</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">MP02S2018</td>
                                                <td>Pemrograman php dasar / k2</td>
                                                <td className="text-center">30</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Berkas / Files</h5>
                                <hr />
                                <div className="">
                                    Belum ada file ditambahkan <br />
                                    <a className="" href="">Kelola file</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

}