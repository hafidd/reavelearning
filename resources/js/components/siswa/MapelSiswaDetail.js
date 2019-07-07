import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import { PageTitle, Alert } from '../html/Template'
import MapelDetailCard from '../mapel/MapelDetailCard'
import MapelMateriCard from '../mapel/MapelMateriCard'
import MapelPesertaCard from '../mapel/MapelPesertaCard'
import MapelKuisCard from '../mapel/MapelKuisCard'

class MapelSiswaDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 'materi',
            id: props.match.params.mapelId,
            mapel: {},
            materis: [],
            pesertas: [],

            fetch: false,
            message: this.props.location.state ? this.props.location.state.message : '',
        }
    }

    componentDidMount() {
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ fetch: true })
        axios.get('api/mapel-detail/' + this.state.id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            this.setState({ fetch: false, mapel: res.data.data })
        }).catch(err => {
            console.log(err)
            this.notif(JSON.stringify(err.message))
            this.setState({ fetch: false })
        })
    }

    notif = (m = '', reloadData = false) => {
        if (m.constructor === Array) {
            const message = (<ul>{m.map((ms, key) => <li key={key}>{ms}</li>)}</ul>)
            this.setState({ message: message });
        } else this.setState({ message: m });
    }

    setAction = e => {
        if (e) {
            e.preventDefault()
            const action = e.currentTarget.value.split('-')[0]
            const message = e.currentTarget.value.split('-')[1]
            this.setState({ action: action, message: message ? message : '' })
        }
        else this.setState({ action: '', message: '' })
    }


    render() {
        const groups = this.state.mapel.groups ? JSON.parse(this.state.mapel.groups).map(g => {
            return { id: g.nama, nama: g.nama }
        }) : [];
        if (groups.length > 0) groups.push({ id: 'umum', nama: 'Umum' })
        return (
            <div className="row">
                <div className="col-12">
                    <MapelDetailCard mapel={this.state.mapel} />
                </div>
                <div className="col-12 mt-3">
                    {this.state.message !== '' && <Alert message={this.state.message} clickHandle={this.notif} />}
                </div>
                <div className="col-12 mt-1 mb-0">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className={`nav-link ${this.state.action === 'materi' && 'active'}`} onClick={this.setAction} value="materi">Materi</button>
                        </li>
                        {/** 
                        <li className="nav-item">
                            <button className={`nav-link ${this.state.action === 'peserta' && 'active'}`} onClick={this.setAction} value="peserta">Siswa</button>
                        </li>
                        */}
                        <li className="nav-item">
                            <button className={`nav-link ${this.state.action === 'quis' && 'active'}`} onClick={this.setAction} value="quis">Ujian/Kuis</button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-12">
                    {(() => {
                        switch (this.state.action) {
                            case "materi": return (
                                <MapelMateriCard notif={this.notif} id={this.state.id} isSiswa={true} />
                            )
                            case "peserta": return (
                                ''
                            )
                            case "quis": return (
                                <MapelKuisCard notif={this.notif} id={this.state.id} groups={groups} isSiswa={true} />
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
export default hot(MapelSiswaDetail)