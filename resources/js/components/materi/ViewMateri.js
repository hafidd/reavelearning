import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import ReactPlayer from 'react-player'

import { PageTitle, Alert } from '../html/Template'

class ViewMateri extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapelId: props.match.params.mapelId,
            materiId: props.match.params.materiId,
            mapel: {},
            materi: {},
            type: '',
            fetch: false,
            message: this.props.location.state ? this.props.location.state.message : '',
            isSiswa: this.props.location.state ? this.props.location.state.isSiswa : false,
        }
    }

    componentDidMount() {
        this.loadMateri();
    }

    loadMateri = () => {
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ fetch: true })
        const ep = !this.state.isSiswa ? 'api/materi/' : 'api/materi-siswa/'
        axios.get(ep + this.state.materiId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            this.setState({ fetch: false, materi: res.data.data, type: JSON.parse(res.data.data.isi).type })
        }).catch(err => {
            console.log(err)
            this.notif(JSON.stringify(err.message))
            this.setState({ fetch: false })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <PageTitle title={this.state.materi.judul} />
                        <hr className="m-1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.state.type == "text" && <MateriText materi={this.state.materi} />}
                        {this.state.type == "video" && <MateriVideo materi={this.state.materi} />}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const MateriText = props => {
    const { materi } = props
    const content = materi.isi ? JSON.parse(materi.isi) : {};
    return (
        <p>{content.isi}</p>
    )
}
const MateriVideo = props => {
    const { materi } = props
    const content = materi.isi ? JSON.parse(materi.isi) : {};
    return (
        <div className="row">
            <div className="col-12">
                <ReactPlayer
                    url={`api/get-materi-file-test/video/${content.name}`} playing
                    controls={true}
                    height={'65vh'}
                    width={'100%'}
                />
            </div>
            <div className="col-12">
                <hr />
                <p>{content.desc}</p>
            </div>
        </div>
    )
}

import { hot } from 'react-hot-loader/root'
export default hot(ViewMateri)