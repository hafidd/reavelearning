import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import { PageTitle, Alert } from '../html/Template'

import KuisList from '../kuis/KuisList'
import KuisSearch from '../kuis/KuisSearch'
import KuisForm from '../kuis/KuisForm'
import KuisDelete from '../kuis/KuisDelete'

import SoalList from '../soal/SoalList'
import SoalSearch from '../soal/SoalSearch'
import SoalForm from '../soal/SoalForm'
import SoalDelete from '../soal/SoalDelete'

class Kuis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: '',
            kuises: [],
            pageDataKuis: { pageCount: 0 },
            kuisPage: 1,

            soals: [],
            pageDataSoal: { pageCount: 0 },
            soalPage: 1,

            search: {
                kuis: { judul: '', kode: '' },
                soal: { kode: '', pertanyaan: '', type: '' },
            },

            kuisId: '',
            soalId: '',

            fetch: false,
            message: this.props.location.state ? this.props.location.state.message : '',
        }
    }

    componentDidMount() {
        if (this.state.action === '')
            this.loadKuis()
        if (this.state.action === 'soal')
            this.loadSoal()
    }

    loadKuis = () => {
        const token = Token.getToken()
        if (!token) { this.props.logOut('kuis', true); return }
        this.setState({ fetch: true })
        axios.get('api/kuis/', {
            params: this.state.search.kuis,
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            this.setState({
                kuises: res.data.data,
                pageDataKuis: {
                    from: res.data.meta.from,
                    total: res.data.meta.total,
                    per_page: res.data.meta.per_page,
                    pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page),
                },
                fetch: false
            })
        }).catch(err => {
            this.notif(JSON.stringify(err.message))
            this.setState({ fetch: false })
        })
    }

    loadSoal = () => {
        const token = Token.getToken()
        if (!token) { this.props.logOut('kuis', true); return }
        this.setState({ fetch: true })
        axios.get('api/soal/', {
            params: this.state.search.soal,
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            this.setState({
                soals: res.data.data,
                pageDataSoal: {
                    from: res.data.meta.from,
                    total: res.data.meta.total,
                    per_page: res.data.meta.per_page,
                    pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page),
                },
                fetch: false
            })
        }).catch(err => {
            this.notif(JSON.stringify(err.message))
            this.setState({ fetch: false })
        })
    }

    setSearch = values => {
        this.setState({ search: { ...this.state.search, ...values } }, () => {
            if (this.state.action === '') this.loadKuis()
            if (this.state.action === 'soal') this.loadSoal()
        })
    }

    notif = (m = '', reloadData = false) => {
        if (m.constructor === Array) {
            const message = (<ul>{m.map((ms, key) => <li key={key}>{ms}</li>)}</ul>)
            this.setState({ message: message });
        } else this.setState({ message: m });
    }

    setAction = (e, p, reload = false) => {
        if (e) {
            e.preventDefault()

            const action = e.currentTarget.value.split('-')[0]
            const id = e.currentTarget.value.split('-')[1]
            const message = e.currentTarget.value.split('-')[2]
            this.setState({ action: action, kuisId: id ? id : '', soalId: id ? id : '', message: message ? message : '' }, () => {
                if (['', 'soal'].indexOf(action) !== -1) {
                    if (action === '') this.loadKuis()
                    if (action === 'soal') this.loadSoal()
                }
            })
        }
        else if (p) {
            this.setState({ action: p.action ? p.action : '', message: p.message ? p.message : '' }, () => {
                if (reload) {
                    if (this.state.action === '') this.loadKuis()
                    if (this.state.action === 'soal') this.loadSoal()
                }
            })
        }
        else this.setState({ action: '', message: '' }, () => {
            if (reload) {
                this.loadKuis()
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <PageTitle
                        title="...."
                        navs={[
                            { show: this.state.action === '', clickHandle: () => this.setAction('', { action: 'kuisAdd' }) },
                            { show: (['kuisAdd', 'kuisUpdate', 'kuisDelete'].indexOf(this.state.action) !== -1), clickHandle: () => this.setAction('', { action: '' }, true), icon: "fa-arrow-left" },
                            { show: (['soalAdd', 'soalUpdate', 'soalDelete'].indexOf(this.state.action) !== -1), clickHandle: () => this.setAction('', { action: 'soal' }, true), icon: "fa-arrow-left" },
                            { show: this.state.action === 'soal', clickHandle: () => this.setAction('', { action: 'soalAdd' }) },
                        ]}
                    />
                </div>
                <div className="col-12 mt-3">
                    {this.state.message !== '' && <Alert message={this.state.message} clickHandle={this.notif} />}
                </div>
                {['', 'soal'].indexOf(this.state.action) !== -1 &&
                    <div className="col-12 mt-1 mb-0">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button className={`nav-link ${this.state.action === '' && 'active'}`} onClick={this.setAction} value="">Kuis</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${this.state.action === 'soal' && 'active'}`} onClick={this.setAction} value="soal">Soal / Pertanyaan</button>
                            </li>
                        </ul>
                    </div>
                }
                <div className="col-md-12">
                    {(() => {
                        switch (this.state.action) {
                            case "": return (
                                <React.Fragment>
                                    <KuisSearch setSearch={this.setSearch} defaultValues={this.state.search.kuis} />
                                    <KuisList kuises={this.state.kuises} from={this.state.pageDataKuis.from} loading={this.fetch} setAction={this.setAction} />
                                </React.Fragment>
                            )
                            case "kuisAdd": return (
                                <KuisForm tipe="add" id="" />
                            )
                            case "kuisUpdate": return (
                                <KuisForm tipe="update" id={this.state.kuisId} setAction={this.setAction} />
                            )
                            case "kuisDelete": return (
                                <KuisDelete id={this.state.kuisId} setAction={this.setAction} notif={this.notif} />
                            )
                            case "soal": return (
                                <React.Fragment>
                                    <SoalSearch setSearch={this.setSearch} defaultValues={this.state.search.soal} />
                                    <SoalList soals={this.state.soals} from={this.state.pageDataSoal.from} loading={this.fetch} setAction={this.setAction} showType={this.state.search.soal.type ? false : true} />
                                </React.Fragment>
                            )
                            case "soalAdd": return (
                                <SoalForm tipe="add" id="" />
                            )
                            case "soalUpdate": return (
                                <SoalForm tipe="update" id={this.state.soalId} setAction={this.setAction} />
                            )
                            default: return (
                                "nonono"
                            )
                        }
                    })()}
                </div>
            </div>
        )
    }
}

import { hot } from 'react-hot-loader/root'
export default hot(Kuis)