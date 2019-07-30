import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import { PageTitle, Alert } from './../html/Template'

import { hot } from 'react-hot-loader/root'

import KategoriForm from './KategoriForm'

class Kategori extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 'table',
            kategoris: [],
            pageData: { pageCount: 0 },
            page: 1,
            fetch: false,
            error: '',
            message: '',
            id: ''
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        if (!Token.cek()) { this.props.logOut('mapel', true); return }
        this.setState({ fetch: true })
        axios.get('/api/kategori-admin?', {
            headers: { Authorization: 'Bearer ' + Token.getToken() }
        }).then(res => {
            this.setState({
                kategoris: res.data.data,
                fetch: false
            })
        }).catch(err => {
            console.log(err)
            if (err.response.status === 401) {
                //this.setState({ error: 'mohon login ulang', fetch: false })
                this.props.logOut('kategori', true)
            } else {
                this.setState({ error: 'server error', fetch: false })
            }
        })
    }

    toggle(action = 'table', id = '', msg = '') {
        this.setState({ action: action, mapels: [], id: id, message: msg }, () => {
            if (action = 'table') this.loadData()
        })
    }

    setId = (e) => {
        this.setState({ id: e ? e.target.value : '' });
    }

    remAlert = () => {
        this.setState({ message: '' });
    }

    hapusData = (id, nama, count) => {
        if (!confirm('hapus kategori: ' + nama + "?") || count > 0) return
        axios.delete('/api/kategori-admin/' + id, {
            headers: { Authorization: 'Bearer ' + Token.getToken() }
        }).then(() => {
            alert('sukses hapus: ' + nama);
            this.loadData()
        }).catch(() => {
            alert('gagal hapus: ' + nama);
        })
    }

    render() {
        //console.log(this.state.kategoris)
        return (
            <React.Fragment>
                <PageTitle
                    title="Kategori Mata Pelajaran"
                    navs={[
                        { show: this.state.action === 'table', clickHandle: () => this.toggle('add') },
                        { show: this.state.action !== 'table', clickHandle: () => this.toggle('table'), icon: "fa-arrow-left" },
                    ]}
                />
                <hr className="mt-1" />
                {this.state.message !== '' && <Alert message={this.state.message} clickHandle={this.remAlert} />}
                <div className="row">
                    {
                        this.state.error === '' ? (
                            <div className="col-12">
                                {(() => {
                                    switch (this.state.action) {
                                        case "table": return (
                                            <React.Fragment>
                                                <ol className="list-group">
                                                    {this.state.kategoris.map((kategori, i) => {
                                                        return (
                                                            <li className="list-group-item p-1" key={i}>
                                                                <b>{i + 1}.</b> {kategori.nama} ({kategori.mapel_count})
                                                                <span className="float-right">
                                                                    <button onClick={() => this.toggle('update', kategori.id)} className="btn btn-xs btn-warning mr-1"><i className="fas fa-edit"></i></button>
                                                                    {kategori.mapel_count == 0 && <button onClick={() => this.hapusData(kategori.id, kategori.nama, kategori.mapel_count)} className="btn btn-xs btn-danger"><i className="fas fa-times"></i></button>}
                                                                </span>
                                                            </li>
                                                        )
                                                    })}
                                                </ol>
                                            </React.Fragment>
                                        )
                                        case "add": return (
                                            <KategoriForm
                                                tipe={'add'}
                                                toggle={this.toggle}
                                            />
                                        )
                                        case "update": return (
                                            <KategoriForm
                                                tipe={'update'}
                                                id={this.state.id}
                                                toggle={this.toggle}
                                            />
                                        )
                                        default: return '';
                                    }
                                })()}
                            </div>
                        ) :
                            <div className="col-12">
                                <p className="text-danger">{this.state.error}</p>
                            </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default hot(Kategori)