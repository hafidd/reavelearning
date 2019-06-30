import React from 'react'
import axios from 'axios'
import ErrorBoundary from '../../ErrorBoundary'

import Token from '../../utils/Token'

import MapelSearch from '../mapel/MapelSearch'
import MapelCard from '../mapel/MapelCard'

import { PageTitle, Loading, Alert } from '../html/Template'

export default class MapelSiswa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 'joined',
            mapels: [],
            pageData: { pageCount: 0 },
            page: 1,
            fetch: false,
            error: '',
            message: '',
            kategori: [],

            search: {},

            menungguCount: 0,
            bergabungCount: 0,

            id: '',
            showDetail: false,
            mapel: [],
            group: '',
            modalLoading: false,
            modalMessage: '',
        }
    }

    componentDidMount() {
        this.getKategori()
        this.loadData()
    }

    setSearch = data => {
        this.setState({ search: data }, () => {
            this.loadData()
        })
    }

    loadData = () => {
        if (!Token.cek()) {
            this.props.logOut('mapel_siswa', true)
            return
        }
        this.setState({ fetch: true })
        const values = { ...this.state.search, type: this.state.action }
        axios.get('/api/mapel-siswa?page=' + this.state.page, {
            params: values,
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(res => {
                if (res.data.meta.current_page > res.data.meta.last_page) {
                    this.setState({ page: res.data.meta.last_page }, () => {
                        this.loadData()
                    });
                    return
                }
                this.setState({
                    mapels: res.data.data,
                    pageData: {
                        from: res.data.meta.from,
                        total: res.data.meta.total,
                        per_page: res.data.meta.per_page,
                        pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page),
                    },
                    fetch: false
                })
            }).catch(err => {
                if (err.response.status === 401) {
                    this.props.logOut('mapel_siswa', true)
                } else {
                    this.setState({ error: 'server error', fetch: false })
                }
            })
    }

    getKategori = () => {
        axios.get('api/kategori')
            .then(res => {
                this.setState({ kategori: res.data })
            })
    }

    getCount = () => {

    }

    getDetail = (id) => {
        if (!Token.cek()) {
            this.setState({ message: "mohon login ulang" }); return
        }
        axios.get('/api/mapel-detail/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            this.setState({ mapel: res.data.data, id: id, modalLoading: false })
        }).catch(err => {
            this.setState({ message: `Terjadi kesalahan, mohon <i>reload</i> aplikasi / coba beberapa saat lagi`, showDetail: false }); return
        })
    }

    handlePageClick = data => {
        this.setState({ page: data.selected + 1 }, () => {
            this.loadData()
        });
    };

    changeData = (e) => {
        const action = e.target.value
        this.setState({ action: action, mapels: [], error: '' }, () => {
            this.loadData()
        })
    }

    clearMessage = () => (this.setState({ message: '' }))

    toggleDetail = (e) => {
        const id = e.target.value;
        this.setState({ mapel: [], modalLoading: true, showDetail: !this.state.showDetail, id: '' }, () => {
            if (id) this.getDetail(id)
        })
    }

    changeGroup = (e) => { this.setState({ group: e.target.value }) }

    submit = (e) => {
        if (!Token.cek()) {
            return
        }
        const confirmMessage = this.state.action === "waiting" ? "Batalkan"
            : this.state.action === "joined" ? "Keluar"
                : e.target.value
        if (!confirm(`${confirmMessage} ${this.state.mapel.nama}?`)) return

        this.setState({ modalLoading: true })
        const values = {
            mapel_id: this.state.id,
            group: this.state.group,
            action: this.state.action,
        }
        axios.post('/api/mapel-action/', values, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            console.log(this.state.mapels)
            const filteredMapels = this.state.mapels.filter(mapel => { return mapel.id != this.state.id })
            this.setState({
                mapels: filteredMapels, modalLoading: false,
                message: 'sukses', showDetail: false,
                menungguCount: this.state.menungguCount + (this.state.mapel.akses === "private" ? 1 : 0),
                bergabungCount: this.state.bergabungCount + (this.state.mapel.akses === "public" ? 1 : 0),
            })
            console.log(res.data)
        }).catch(err => {
            if (err.response) {
                console.log(err.response)
                if (err.response.request.status === 422) {
                    // validation err
                } else if (err.response.request.status === 401) {
                    //auth error
                } else {
                    //server error
                }
            } else {
                //server error
            }
            this.setState({ modalLoading: false })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <span className="float-left">
                            <PageTitle title="Mata Pelajaran" />
                        </span>
                        <span className="float-right">
                            <ul className="nav float-right mt-2 mb-1">
                                <li className="nav-item">
                                    <button className={`btn btnnav ${this.state.action === '' && 'active'}`} onClick={this.changeData} value="">ss</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`btn btnnav ${this.state.action === 'waiting' && 'active'}`} onClick={this.changeData} value="waiting">Menunggu ({this.state.menungguCount})</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`btn btnnav ${this.state.action === 'joined' && 'active'}`} onClick={this.changeData} value="joined">Bergabung ({this.state.bergabungCount})</button>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
                <hr className="mt-0" />
                {this.state.message !== '' && <Alert message={this.state.message} clickHandle={this.clearMessage} html={true} />}
                <div className="row" style={{ padding: 0 }}>
                    {
                        this.state.error === '' ? (
                            <div className="col-12" style={{ padding: 0 }}>
                                {(() => {
                                    switch (this.state.action) {
                                        case "delete": return (
                                            ''
                                        )
                                        default: return (
                                            <ErrorBoundary>
                                                <React.Fragment>
                                                    <MapelSearch kategori={this.state.kategori} loadData={this.setSearch} user="siswa" />
                                                    <div className="mb-2"></div>
                                                    <MapelCard mapels={this.state.mapels} toggleDetail={this.toggleDetail} />
                                                </React.Fragment>
                                            </ErrorBoundary>
                                        );
                                    }
                                })()}
                            </div>
                        ) :
                            <div className="col-12">
                                <p className="text-danger">{this.state.error}</p>
                            </div>
                    }
                    <Loading loading={this.state.fetch} />
                </div>

                <div className="modal" style={{ display: this.state.showDetail ? 'block' : 'none' }}>
                    <div className="modal-dialog modal-lg" role="document">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {this.state.mapel.akses === 'private' && <i className="fas fa-lock mr-1"></i>}
                                    {this.state.mapel.nama}
                                </h5>
                                <button type="button" className="close" onClick={this.toggleDetail}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.mapel.length !== 0 &&
                                    <React.Fragment>
                                        <div className="row">
                                            <div className="col-md-2"><b>Kode</b></div>
                                            <div className="col-md-10">{this.state.mapel.kode}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2"><b>Kategori</b></div>
                                            <div className="col-md-10">{this.state.mapel.kategori}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2"><b>Pengajar</b></div>
                                            <div className="col-md-10">{this.state.mapel.pengajar}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2"><b>Keterangan</b></div>
                                            <div className="col-md-10">{this.state.mapel.keterangan}</div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-2"><b>Kelompok</b></div>
                                            <div className="col-md-10">
                                                <div className="row">
                                                    <div className="col-12"><input type="radio" name="group" value="" onChange={this.changeGroup} defaultChecked /> Umum</div>
                                                    {JSON.parse(this.state.mapel.groups).map(g => <div key={g.nama} className="col-12"><input type="radio" name="group" value={g.nama} onChange={this.changeGroup} disabled={this.state.action !== "" ? true : false} /> {g.nama}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    value={this.state.mapel.akses === 'public' ? 'Tambahkan' : 'Daftar'}
                                    onClick={this.submit}
                                    disabled={this.state.modalLoading}>
                                    {this.state.action === "waiting" ? "Batalkan"
                                        : this.state.action === "joined" ? "Keluar"
                                            : this.state.mapel.akses === 'public' ? 'Tambahkan' : 'Daftar'}
                                    <Loading loading={this.state.modalLoading} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}