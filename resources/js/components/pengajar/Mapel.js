import React from 'react'
import axios from 'axios'
import Token from './../../Token'

import MapelTable from './MapelTable'
import MapelSearch from './MapelSearch'
import MapelForm from './MapelForm'
import MapelDelete from './MapelDelete'

import Pagination from './../web/Pagination'

class Mapel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 'table',
            mapels: [],
            pageData: { pageCount: 0 },
            page: 1,
            fetch: false,
            error: '',
            message: '',
            kategori: [],
            id: ''
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        this.getKategori()
        this.loadData()
    }

    loadData = (values = {}, page = this.state.page, test = "") => {
        console.log('fetch')
        if (!Token.cek()) {
            this.props.logOut('mapel')
            return
        }
        this.setState({ fetch: true })
        axios.get('/api/mapel?page=' + page, {
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
                    //this.setState({ error: 'mohon login ulang', fetch: false })
                    this.props.logOut('mapel')
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

    handlePageClick = data => {
        this.setState({ fetch: true, page: data.selected + 1 }, () => {
            this.loadData()
        });
    };

    toggle(action = 'table', id = '', msg = '') { this.setState({ action: action, id: id, message: msg }) }

    render() {
        return (
            <div className="container-fluid content bg-white">
                <div className="row mt-3">
                    <div className="col-12">
                        <h2 className="float-left">
                            <h2>
                                {!this.props.sidebar && (<><button className="btn btn-sm btn-outline-dark" onClick={this.props.toggleSidebar}><i className="fas fa-bars"></i></button>{' '}</>)}
                                Mata Pelajaran
                            </h2>
                        </h2>
                        {this.state.action === 'table' && <button onClick={() => this.toggle('add')} className="btn btn-primary float-right"><span className="fas fa-plus"></span></button>}
                        {this.state.action !== 'table' && <button onClick={() => this.toggle('table')} className="btn btn-primary float-right"><span className="fas fa-arrow-left"></span></button>}
                    </div>
                </div>
                <hr />
                {this.state.message !== '' && (
                    <div className="alert alert-info" role="alert">
                        {this.state.message}
                        <button className="btn btn-xs float-right" onClick={() => this.toggle()}><i className="fas fa-times"></i></button>
                    </div>
                )}
                <div className="row">
                    {
                        this.state.error === '' ? (
                            <div className="col-12">
                                {(() => {
                                    switch (this.state.action) {
                                        case "table": return (
                                            <React.Fragment>
                                                <MapelSearch
                                                    kategori={this.state.kategori}
                                                    loadData={this.loadData}
                                                />
                                                <MapelTable
                                                    mapels={this.state.mapels}
                                                    from={this.state.pageData.from}
                                                    loading={this.state.fetch}
                                                    toggle={this.toggle}
                                                    handlePageClick={this.handlePageClick}
                                                    page={this.state.page}
                                                />
                                                <Pagination
                                                    pageData={this.state.pageData}
                                                    page={this.state.page}
                                                    handlePageClick={this.handlePageClick}
                                                />
                                            </React.Fragment>
                                        )
                                        case "add": return (
                                            <MapelForm
                                                tipe={'add'}
                                                toggle={this.toggle}
                                                token={this.token}
                                                kategori={this.state.kategori}
                                            />
                                        )
                                        case "update": return (
                                            <MapelForm
                                                tipe={'update'}
                                                id={this.state.id}
                                                toggle={this.toggle}
                                                token={this.token}
                                                kategori={this.state.kategori}
                                            />
                                        )
                                        case "delete": return (
                                            <MapelDelete
                                                id={this.state.id}
                                                toggle={this.toggle}
                                                token={this.token}
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
            </div>
        )
    }
}

export default Mapel