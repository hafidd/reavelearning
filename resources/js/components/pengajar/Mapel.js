import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import MapelTable from './MapelTable'
import MapelSearch from '../mapel/MapelSearch'
import MapelForm from './MapelForm'
import MapelDelete from './MapelDelete'
import UsersModal from './UsersModal'

import Pagination from './../html/Pagination'
import { PageTitle, Alert } from './../html/Template'

import { hot } from 'react-hot-loader/root'

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
        if (!Token.cek()) {
            this.props.logOut('mapel', true)
            return
        }
        this.setState({ fetch: true })
        values = { ...values, type: this.state.action }
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
                    this.props.logOut('mapel', true)
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

    toggle(action = 'table', id = '', msg = '') {
        this.setState({ action: action, mapels: [], id: id, message: msg }, () => {
            if (action === "waiting") this.loadData()
        })
    }

    setId = (e) => {
        this.setState({ id: e ? e.target.value : '' });
    }

    remAlert = () => {
        this.setState({ message: '' });
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    title="Mata Pelajaran"
                    navs={[
                        { show: this.state.action === 'table', clickHandle: () => this.toggle('add') },
                        { show: this.state.action !== 'table', clickHandle: () => this.toggle('table'), icon: "fa-arrow-left" },
                        { show: this.state.action === 'table', clickHandle: () => this.toggle('waiting'), icon: "fa-clock", className: "btn-warning" },
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
                                                kategori={this.state.kategori}
                                            />
                                        )
                                        case "update": return (
                                            <MapelForm
                                                tipe={'update'}
                                                id={this.state.id}
                                                toggle={this.toggle}
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
                                        case "waiting": return (
                                            <React.Fragment>
                                                <h4>Menunggu Konfirmasi</h4>
                                                <MapelTable
                                                    mapels={this.state.mapels}
                                                    waiting={true}
                                                    from={this.state.pageData.from}
                                                    loading={this.state.fetch}
                                                    toggle={this.toggle}
                                                    handlePageClick={this.handlePageClick}
                                                    page={this.state.page}
                                                    setId={this.setId}
                                                />
                                                {this.state.id !== "" && <UsersModal id={this.state.id} setId={this.setId} toggle={this.toggle} />}
                                            </React.Fragment>
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

export default hot(Mapel)