import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import LineTo from 'react-lineto';

//import { TextForm, TextAreaForm, SelectForm, RadioForm } from '../html/BasicForm'

import { PilihanGanda, BenarSalah, Isian, Essay } from './KuisJawabForm'

class KuisHasilDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            hasil: {},
            details: [],
            jawabans: [],

            points: [],

            loading: false,

            idkWhy: true,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", () => { this.setState({ idkWhy: !this.state.idkWhy }) });
        this.getDetail()
    }

    getDetail() {
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ loading: true })
        axios.get('api/detail-hasil/' + this.state.id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            const data = res.data.data.hasil
            this.setState({
                hasil: data,
                details: data.details,
                points: data.details.map(detail => {
                    return { id: detail.id, max_point: detail.max_point, point: detail.point, updated: false }
                }),
                loading: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false })
        })
    }

    updatePoints = e => {
        this.setState({
            points: this.state.points.map(point => {
                if (point.id == e.target.name) {
                    point.updated = true
                    point.point = parseFloat(e.target.value) > parseFloat(point.max_point) ? point.max_point : e.target.value
                }
                return point
            })
        })
    }

    getPoint = id => {
        const p = this.state.points.filter(point => { return point.id == id })
        return p[0]['point']
    }

    savePoints = e => {
        e.preventDefault()
        const token = Token.getToken()
        if (!token) { this.props.logOut('mapel', true); return }
        this.setState({ loading: true })
        const data = { points: this.state.points.filter(point => { return point.updated === true }) }
        axios.put('api/koreksi/' + this.state.id, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            alert('sukses')
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
                {this.state.details.map(detail => {
                    const data = detail.soal
                    const pertanyaan = JSON.parse(data.pertanyaan)
                    const jawaban = JSON.parse(data.jawaban)
                    return (
                        <div className="card mb-2" key={detail.id}>
                            <div className={"card-body"}>
                                <div className="row">
                                    <div className="col-12">
                                        <span className="float-left">
                                            <b>{nomor++} .</b>
                                        </span>
                                        <span className="float-left">
                                            {data.type == 1 && <PilihanGanda soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                            {data.type == 2 && <BenarSalah soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                            {data.type == 3 && <Menjodohkan soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} idkWhy={() => { this.setState({ idkWhy: !this.state.idkWhy }) }} />}
                                            {data.type == 4 && <Isian soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                            {data.type == 5 && <Essay soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                        </span>
                                        <span className="float-right">
                                            {detail.point == detail.max_point ?
                                                <i className="fa fa-check text-success fa-2x"></i>
                                                : detail.point == 0 ? <i className="fa fa-times text-danger fa-2x"></i>
                                                    : detail.point == null ? <i className="fa fa-question text-warning fa-2x"></i>
                                                        : <i className="fa fa-exclamation text-info fa-2x"></i>}
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <hr />
                                        <small className="text-primary">max point: {detail.max_point}</small>
                                        <div className="form-inline float-right">
                                            POINT : <input onChange={this.updatePoints} type="text" name={detail.id} value={this.getPoint(detail.id)} size="3" className="form-control form-control-sm ml-2" disabled={detail.point != null} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="">
                    <div className="col-12 text-right">
                        <button onClick={this.savePoints} className="btn btn-success" disabled={this.state.loading}><i className="fas fa-save"></i> SIMPAN</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

{/** 
const PilihanGanda = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId } = props
    const jawab = jawaban ? jawaban : [];
    const handleCheck = (e) => {

    }
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

const Isian = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId } = props

    const formStyle = {
        border: 'none',
        borderBottom: '1px solid black',
        padding: 0
    }
    var jawabanIndex = 0;
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    {pertanyaan.q.split('\n').map((item, key) => {
                        return (
                            <span key={key}>
                                {item.split('[[]]').map((i, k) => {
                                    return (
                                        <React.Fragment key={k}>
                                            {i}
                                            {k + 1 != item.split('[[]]').length && <input name={jawabanIndex} style={formStyle} size="5" type="text" value={jawaban[jawabanIndex++]} onChange={(e) => setJawaban({ [soalId]: { ...jawaban, [e.target.name.toString()]: e.target.value } })} />}
                                        </React.Fragment>
                                    )
                                })} <br />
                            </span>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
*/}
const Menjodohkan = (props) => {
    const { pertanyaan, jawaban = [], setJawaban, soalId, idkWhy } = props

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
                <button onClick={idkWhy} className="btn btn-xs btn-success mb-1"><i className="fas fa-retweet"></i></button>
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
                    {jawaban.map((line, i) => {
                        return <LineTo key={i} from={`listq-${line.q}`} to={`lista-${line.a}`} />
                    })
                    }
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

import { hot } from 'react-hot-loader/root'
export default hot(KuisHasilDetail)