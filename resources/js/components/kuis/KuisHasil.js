import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import { PageTitle, Alert } from '../html/Template'

import KuisHasilDetail from './KuisHasilDetail'

class KuisHasil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.dataId,
            kuis: {},
            mapel: {},
            pesertas: [],
            settings: {},
            soals: [],
            jawabans: {},
            loading: false,

            detail: false,
            hasil_id: '',
        }
        this.nilai = [];
    }

    componentDidMount() {
        this.getKuis()
    }

    getKuis() {
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ loading: true })
        axios.get('api/detail-kuis/' + this.state.id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            const data = res.data.data
            this.setState({
                kuis: data.kuis.kuis,
                mapel: data.kuis.mapel,
                pesertas: data.peserta,
            })
        }).catch(err => {
            console.log(err);
        })
    }

    detail = (id = false) => {
        this.setState({ hasilId: id, detail: !id ? false : true }, () => {
            if (id == false) {
                console.log('ok')
                this.getKuis()
            }
        })
    }

    publish = () => {
        if (!confirm('terbitkan hasil?')) return
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ loading: true })
        axios.put('api/publish-hasil/' + this.state.id, {}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            alert('sukses')
            this.getKuis()
            this.setState({ loading: false })
        }).catch(err => {
            alert('gagal')
            console.log(err);
            this.setState({ loading: false })
        })
    }

    render() {
        let nomor = 1;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <PageTitle title={this.state.kuis.judul}
                            navs={[
                                { show: this.state.detail, clickHandle: () => this.detail(false), icon: 'fa-arrow-left' },
                            ]} />
                        <p>{this.state.mapel.nama}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        {!this.state.detail ?
                            <React.Fragment>
                                <table className="table table-bordered table-sm">
                                    <thead>
                                        <tr>
                                            <th className="text-center" width="5%">ID</th>
                                            <th className="text-center" width="">NAMA</th>
                                            <th className="text-center" width="20%">NILAI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.pesertas.map(peserta => {
                                            this.nilai.push(parseInt(peserta.points / peserta.max_points * 100))
                                            return (
                                                <tr style={{ lineHeight: 1 }} key={peserta.id} className={`${peserta.belum_dikoreksi > 0 ? 'bg-warning' : !peserta.published ? 'bg-info' : 'bg-success'}`}>
                                                    <td className="text-center">{nomor++}</td>
                                                    <td>
                                                        <p className="m-0"><b>{peserta.user.name}</b></p>
                                                        <small>{peserta.user.email}</small>
                                                    </td>
                                                    <td className={`text-center`} >

                                                        <p className="m-0 text-right">{peserta.points / peserta.max_points * 100}</p>
                                                        <button className="btn btn-xs " onClick={() => this.detail(peserta.id)}>{peserta.belum_dikoreksi} Belum dikoreksi</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div>
                                    <table>
                                        <tr>
                                            <td className="pr-5">Tertinggi</td>
                                            <td>{Math.max(...this.nilai)}</td>
                                        </tr>
                                        <tr>
                                            <td>Terendah</td>
                                            <td>{Math.min(...this.nilai)}</td>
                                        </tr>
                                        <tr>
                                            <td>Rata - Rata</td>
                                            <td>{this.nilai.reduce((a, b) => a + b, 0) / this.nilai.length}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div>
                                    <button onClick={this.publish} className="btn btn-success mt-2"> <i className="fas fa-check"></i> Terbitkan</button>
                                </div>
                            </React.Fragment>
                            : <KuisHasilDetail id={this.state.hasilId} back={this.detail} />
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

import { hot } from 'react-hot-loader/root'
export default hot(KuisHasil)