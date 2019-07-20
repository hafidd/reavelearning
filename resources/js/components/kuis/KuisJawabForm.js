import React, { useState, useEffect } from 'react'
import { RadioForm, TextAreaForm } from '../html/BasicForm'
import LineTo from 'react-lineto'

const PilihanGanda = (props) => {
    const { pertanyaan, jawaban, setJawaban = () => { }, soalId, kunci = { a: [] } } = props
    const jawab = jawaban ? jawaban : [];
    const handleCheck = (e) => { }
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
                                    <div className={"form-inline float-left mb-1" + (kunci.a.indexOf(i + 1) !== -1 && ' bg-success')} style={{ width: '100%' }}>
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
    const { pertanyaan, jawaban, setJawaban, soalId, kunci = null } = props
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
                    [1, 'BENAR', kunci ? 'bg-success' : ''],
                    [0, 'SALAH', !kunci ? 'bg-success' : ''],
                ]}
            />
        </React.Fragment>
    )
}

const Essay = (props) => {
    const { pertanyaan, jawaban, setJawaban, soalId, kunci } = props
    return (
        <React.Fragment>
            <div>
                {pertanyaan.q.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br /></span>
                })}
            </div>
            <table className="table table-sm">
                <tbody>
                    <tr>
                        <td width="10%">Jawab: </td>
                        <td>{jawaban !== null && jawaban.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br /></span>
                        })}</td>
                    </tr>
                </tbody>
            </table>
            <table className="bg-success text-white">
                <tbody>
                    <tr>
                        <td>Kunci: </td>
                        <td>{kunci !== null && kunci.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br /></span>
                        })}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

const Menjodohkan = (props) => {
    const { pertanyaan, jawaban = [], setJawaban, soalId, idkWhy, kunci } = props
    const [jw, setJw] = useState(jawaban)
    const [kn, setKn] = useState(kunci)
    const handleDragStart = data => event => {
    };
    const handleDrop = data => event => {
        event.preventDefault()
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
                    {jawaban.map((line, i) => {
                        return <LineTo key={i} zIndex={9999} borderColor="red" from={`listq-${line.q}`} to={`lista-${line.a}`} />
                    })}
                    {kunci.map((line, i) => {
                        return <LineTo key={i} from={`listq-${line.q}`} to={`lista-${line.a}`} />
                    })}
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
                    Kunci : {JSON.stringify(kunci)} <br />
                    Jawaban : {JSON.stringify(jawaban)}
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

export {
    PilihanGanda,
    BenarSalah,
    Essay,
    Menjodohkan,
    Isian,
};