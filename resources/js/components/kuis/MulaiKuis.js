import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import LineTo from 'react-lineto';

import { PageTitle, Alert } from '../html/Template'

import { TextForm, TextAreaForm, SelectForm, RadioForm } from '../html/BasicForm'

class MulaiKuis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.kuisId,
            hasilId: '',
            kuis: {},
            mapel: {},
            soals: [],
            jawabans: {},
            loading: false,
        }
    }

    componentDidMount() {
        this.mulaiKuis()
    }

    mulaiKuis() {
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ loading: true })
        axios.post('api/mulai-kuis/', { mkId: this.state.id }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            const data = res.data.data
            this.setState({
                hasilId: data.hasil_id,
                kuis: data.mapel_kuis.kuis,
                mapel: data.mapel_kuis.mapel,
                soals: data.soals,
                jawabans: JSON.parse(data.jawabans),
                loading: false,
            })
        }).catch(err => {
            //this.setState({ fetch: false })
            //this.props.history.push('/dashboard')
            console.log(err);
        })
    }

    setJawaban = (value, bs = false) => {
        this.setState({ jawabans: { ...this.state.jawabans, ...value } })

        for (var property in value) {
            this.updateJawaban(property, value[property], bs)
        }

    }

    updateJawaban(sId, value, bs) {
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ loading: true })
        axios.put('api/update-jawaban/', { hId: this.state.hasilId, sId: sId, value: value, bs: bs }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            this.setState({
                loading: false,
            })
        }).catch(err => {
            //this.setState({ fetch: false })
            //this.props.history.goBack()
        })
    }

    render() {
        let nomor = 1;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <PageTitle title={this.state.kuis.judul} />
                        <p>{this.state.mapel.nama}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.state.soals.map(soal => {
                            const data = soal.soal
                            const pertanyaan = JSON.parse(data.pertanyaan)
                            return (
                                <div className="card mb-2" key={soal.id}>
                                    <div className="card-body">
                                        <span className="float-left">
                                            <b>{nomor++} .</b>
                                        </span>
                                        <span className="">
                                            {data.type == 1 && <PilihanGanda soalId={data.id} pertanyaan={pertanyaan} jawaban={this.state.jawabans[data.id]} setJawaban={this.setJawaban} />}
                                            {data.type == 2 && <BenarSalah soalId={data.id} pertanyaan={pertanyaan} jawaban={this.state.jawabans[data.id]} setJawaban={this.setJawaban} />}
                                            {data.type == 3 && <Menjodohkan soalId={data.id} pertanyaan={pertanyaan} jawaban={this.state.jawabans[data.id]} setJawaban={this.setJawaban} />}
                                            {data.type == 4 && <Isian soalId={data.id} pertanyaan={pertanyaan} jawaban={this.state.jawabans[data.id]} setJawaban={this.setJawaban} />}
                                            {data.type == 5 && <Essay soalId={data.id} pertanyaan={pertanyaan} jawaban={this.state.jawabans[data.id]} setJawaban={this.setJawaban} />}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

const PilihanGanda = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId } = props
    const jawab = jawaban ? jawaban : [];
    console.log('jawab', jawab);
    const handleCheck = (e) => {
        if (pertanyaan.type == 1) setJawaban({ [soalId]: [parseInt(e.target.value) + 1] })
        else if (pertanyaan.type == 2) {
            if (e.target.checked) setJawaban({ [soalId]: [...jawab, parseInt(e.target.value) + 1] })
            else {
                const filteredKunci = jawab.filter(k => { return k !== parseInt(e.target.value) + 1 })
                setJawaban({ [soalId]: filteredKunci })
            }
        }
    }
    console.log(pertanyaan.q)
    return (
        <React.Fragment>

            <div>
                {pertanyaan.q.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}
            </div>

            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {pertanyaan.alist.map((a, i) => (
                            <React.Fragment key={i}>
                                <li style={{ listStyle: 'none' }}>
                                    <div className="form-inline float-left mb-1" style={{ width: '100%' }}>
                                        <label style={{ width: '1.3em', }}><b>{String.fromCharCode(65 + i)}. </b></label>
                                        {pertanyaan.type == 1 ?
                                            <input name={`rd${soalId}`} type="radio" value={i} checked={jawab.indexOf(i + 1) !== -1} onChange={handleCheck} className="custom-rd mr-2" />
                                            : <input name={`cb${soalId}`} type="checkbox" value={i} checked={jawab.indexOf(i + 1) !== -1} onChange={handleCheck} className="custom-cb mr-2" />
                                        }
                                        <span className="mr-2">{a}</span>
                                    </div>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

const BenarSalah = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId } = props
    return (
        <React.Fragment>
            <div>
                {pertanyaan.q.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}
            </div>
            <RadioForm
                labelW="0" name={`kunci${soalId}`} handleChange={(e) => setJawaban({ [soalId]: e.target.value }, true)} value={jawaban}
                options={[
                    [1, 'BENAR'],
                    [0, 'SALAH'],
                ]}
            />
        </React.Fragment>
    )
}

const Essay = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId } = props
    return (
        <React.Fragment>
            <div>
                {pertanyaan.q.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}
            </div>
            <TextAreaForm labelW="0" formW="5" name={`kunci${soalId}`} value={jawaban} placeholder={"Isikan jawaban anda"} handleChange={(e) => setJawaban({ [soalId]: e.target.value })} />
        </React.Fragment>
    )
}

const Menjodohkan = (props) => {
    const { pertanyaan, jawaban = [], setJawaban, soalId } = props

    const handleDragStart = data => event => {
        const newKunci = jawaban.filter(k => { return k.q !== data.id })
        setJawaban({ [soalId]: newKunci })
        event.dataTransfer.setData("dragContent", data.id)
    };
    const handleDrop = data => event => {
        event.preventDefault()
        const exist = jawaban.filter(line => { return line.a === data.id })
        if (exist.length > 0) return
        const from = JSON.parse(event.dataTransfer.getData("dragContent"))
        const to = data.id
        //setLines([...lines, { q: from, a: to }])
        setJawaban({ [soalId]: [...jawaban, { q: from, a: to }] })
        return false
    };

    return (
        <React.Fragment>
            <div>
                {pertanyaan.q.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}
            </div>
            <div className="row">
                <div className="col-5">
                    <ul className="list-group">
                        {pertanyaan.qlist.map((q, i) => (
                            <React.Fragment key={i}>
                                <li className="list-group-item">
                                    <div className="form">
                                        <label className="m-0"><b>{String.fromCharCode(65 + i)}.</b></label>{' '}
                                        <span draggable="true" onDragStart={handleDragStart({ id: i })} className={`float-right fas fa-question-circle listq-${i}`}></span>
                                        <span className="">{q}</span>
                                    </div>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className="col-2 m-0">
                    {jawaban.map((line, i) => <LineTo key={i} from={`listq-${line.q}`} to={`lista-${line.a}`} />)}
                </div>
                <div className="col-5">
                    <ul className="list-group">
                        {pertanyaan.alist.map((a, i) => (
                            <React.Fragment key={'a' + i}>
                                <li className="list-group-item">
                                    <div className="form"
                                        draggable="true"
                                        onDragOver={(e) => { e.preventDefault() }}
                                        onDrop={handleDrop({ id: i })} >
                                        <span className={`fas fa-check-circle lista-${i}`}></span> {' '}
                                        <label className="m-0"><b>{String.fromCharCode(65 + i)}. </b></label>{' '}
                                        <span>{a}</span>
                                    </div>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className="col-12">
                    {JSON.stringify(jawaban)}
                </div>
            </div>
        </React.Fragment>
    )
}

const Isian = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId } = props

    const handleText = e => {
        const match = e.target.value.match(/\[\[.*?\]\]/g)
        const kunci = match ? match.reduce((filtered, s) => {
            if (s.replace(/\[|]/g, '') != "") filtered.push(s.replace(/\[|]/g, ''))
            return filtered
        }, []) : [];
        setJawaban({ [soalId]: kunci })
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-8">
                    <div className="p-3 mb-2 bg-info text-white">Lengkapi kalimat</div>
                </div>
            </div>
            <div>
                {pertanyaan.q.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}
            </div>
        </React.Fragment>
    )
}

import { hot } from 'react-hot-loader/root'
export default hot(MulaiKuis)