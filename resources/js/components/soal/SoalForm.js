import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import useForm from '../../utils/useForm'
import LineTo from 'react-lineto';

import { TextForm, TextAreaForm, SelectForm, RadioForm } from '../html/BasicForm'

const SoalForm = (props) => {
    const { tipe, id, setAction } = props
    const fields = {
        id: (tipe === 'update') ? id : 0,
        type: 1,
    }
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (tipe === 'update') {
            if (!Token.cek()) {
                setErrors(['mohon login ulang'])
                return
            }
            setLoading(true)
            axios.get('/api/soal/' + id, {
                headers: {
                    Authorization: 'Bearer ' + Token.getToken()
                }
            }).then(res => {
                const data = res.data.data
                let dt = {};
                if (data.type == 2) dt = { kunci: JSON.parse(data.jawaban) ? '1' : '0' }
                else if (data.type == 5) dt = { kunci: JSON.parse(data.jawaban) }
                else if (data.type == 1) dt = {
                    jawabans: JSON.parse(data.pertanyaan).alist,
                    kunci: JSON.parse(data.jawaban).a,
                    aType: JSON.parse(data.jawaban).type,
                }
                else if (data.type == 3) dt = {
                    pertanyaans: JSON.parse(data.pertanyaan).qlist,
                    jawabans: JSON.parse(data.pertanyaan).alist,
                    kunci: JSON.parse(data.jawaban),
                }
                else if (data.type == 4) dt = {
                    kunci: JSON.parse(data.jawaban),
                }

                setValues({
                    ...values,
                    ...dt,
                    type: data.type,
                    kode: data.kode,
                    q: JSON.parse(data.pertanyaan).q,
                })

                setLoading(false)
            }).catch(() => setAction('', { message: 'data error', action: 'soal' }))
        }
    }, []);

    function submit() {
        //console.log(values)
        if (!Token.cek()) {
            setErrors(['mohon login ulang'])
            return
        }
        setLoading(true)
        //return
        setSuccess(false)

        let formData = new FormData()
        for (let key in values) {
            //const val = (values.type == 3 && key == 'kunci') ? JSON.stringify(values[key]) : values[key]
            const val = values[key].constructor == Array ? JSON.stringify(values[key]) : values[key]
            formData.append(key, val)
        }
        if (tipe === "update") formData.append("_method", "put")

        axios.post('/api/soal/' + (id ? id : ''), formData, {
            headers: {
                'Content-Type': `multipart/form-data`,
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(res => {
                setLoading(false)
                setSuccess(true)
                setErrors({})
                if (tipe === 'add')
                    if (values.type != 3) setValues({ ...fields })
                    else setValues({ ...fields, pertanyaans: [''], jawabans: [''], kunci: [] })
            }).catch(err => {
                if (err.response) {
                    if (err.response.request.status === 422) {
                        setErrors(getErrors(err.response.data.errors))
                    } else if (err.response.request.status === 401) {
                        setErrors(['mohon login ulang'])
                    } else {
                        setErrors(['server error'])
                    }
                } else {
                    setErrors(['server error'])
                }
                setLoading(false)
            })
    }

    function errorMessages(err) {
        return (<ul>{err.map((item, key) => <li key={key}>{item}</li>)}</ul>);
    }

    function form(type) {
        if (type == 1) return <PilihanGandaForm values={values} handleChange={handleChange} setValues={setValues} />
        else if (type == 2) return <BenarSalahForm values={values} handleChange={handleChange} setValues={setValues} />
        else if (type == 3) return <MenjodohkanForm values={values} handleChange={handleChange} setValues={setValues} />
        else if (type == 4) return <IsianForm values={values} handleChange={handleChange} setValues={setValues} />
        else if (type == 5) return <EssayForm values={values} handleChange={handleChange} setValues={setValues} />
    }

    return (
        <div className="row" style={{ padding: '2%' }}>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="float-left"><b>{tipe === 'add' ? '...' : 'Ubah'} ... </b></h5>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2%' }} >
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="form">
                            <SelectForm
                                label="Tipe Soal"
                                name="type"
                                value={values.type}
                                handleChange={handleChange}
                                options={[
                                    { id: 1, nama: 'Pilihan Ganda' },
                                    { id: 2, nama: 'Benar/Salah' },
                                    { id: 3, nama: 'Menjodohkan' },
                                    { id: 4, nama: 'Isian Singkat' },
                                    { id: 5, nama: 'Essay' },
                                ]} />

                            <TextForm formW="4" name="kode" label="Kode" placeholder="Kode Soal" handleChange={handleChange} value={values.kode} />
                            <hr />
                            {form(values.type)}
                            <hr />
                            <div className="form-group row">
                                <div className="col-md-8">
                                    <button type="submit" className="btn btn-success" disabled={loading}>SIMPAN {loading && <i className="fa fa-spinner fa-spin"></i>} </button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-4">
                        {(errors.constructor === Array && errors.length > 0) && (
                            <div className="bg-warning" style={{ padding: '5%', margin: '5%' }}>
                                {errorMessages(errors)}
                            </div>
                        )}
                        {success && (
                            <div className="bg-success" style={{ padding: '5%', margin: '5%' }}>
                                <p className="lead">Sukses!</p>
                                <p>data berhasil disimpan</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

const PilihanGandaForm = (props) => {
    const { values, handleChange, setValues } = props

    useEffect(() => {
        if (values.aType === undefined) setValues({ ...values, aType: 1, jawabans: [""], kunci: [] })
    }, [])

    useEffect(() => {
        //if (values.aType) setValues({ ...values, kunci: [] })
        //PR
    }, [values.aType])

    const handleCheck = (e) => {
        if (values.aType == 1) setValues({ ...values, kunci: [parseInt(e.target.value) + 1] })
        else if (values.aType == 2) {
            if (e.target.checked) setValues({ ...values, kunci: [...values.kunci, parseInt(e.target.value) + 1] })
            else {
                const filteredKunci = values.kunci.filter(k => { return k !== parseInt(e.target.value) + 1 })
                setValues({ ...values, kunci: filteredKunci })
            }
        }
    }

    const newJawaban = e => {
        setValues({ ...values, jawabans: [...values.jawabans, ""] })
    }

    const handleJawaban = e => {
        const newJawabans = [...values.jawabans]
        newJawabans[e.target.name] = e.target.value
        setValues({ ...values, jawabans: newJawabans })
    }

    const delJawaban = e => {
        const deletedKeys = []
        const filteredJawabans = values.jawabans.filter((jawaban, i) => {
            if (e.target.value === jawaban) deletedKeys.push(i + 1)
            return e.target.value !== jawaban
        })
        const filteredKeys = values.kunci.filter((k, i) => { return deletedKeys.indexOf(k) === -1 })
        setValues({ ...values, jawabans: filteredJawabans, kunci: filteredKeys })
    }
    return (
        <React.Fragment>
            <TextAreaForm label="Pertanyaan" formW="10" name="q" value={values.q} placeholder="isikan pertanyaan..." handleChange={handleChange} />
            <SelectForm
                label="Tipe Jawaban"
                name="aType"
                value={values.aType}
                handleChange={handleChange}
                options={[
                    { id: 1, nama: 'Satu Jawaban' },
                    { id: 2, nama: 'Multi Jawaban' },
                ]} />
            <div className="row">
                <label className="col-md-2">
                    Jawaban <br />
                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={newJawaban}><i className="fas fa-plus"></i></button>                </label>
                <div className="col-md-8">
                    {values.jawabans && values.jawabans.length > 0 &&
                        <ul className="list-group">
                            {values.jawabans.map((jawaban, i) => (
                                <React.Fragment key={i}>
                                    <li style={{ listStyle: 'none' }}>
                                        <div className="form-inline float-left mb-1" style={{ width: '100%' }}>
                                            <label style={{ width: '1.3em', }}><b>{String.fromCharCode(65 + i)}</b></label>
                                            <input type="text" size="45" name={i} value={jawaban} className="form-control mr-1" onChange={handleJawaban} />
                                            {values.aType == 1 ?
                                                <input name={`kunci`} type="radio" value={i} checked={parseInt(values.kunci) === i + 1} onChange={handleCheck} className="custom-rd mr-1" />
                                                : <input name={`kunci`} type="checkbox" value={i} checked={values.kunci.indexOf(i + 1) !== -1} onChange={handleCheck} className="custom-cb mr-1" />
                                            }
                                            <button type="button" value={jawaban} onClick={delJawaban} className="btn btn-xs btn-outline-danger">&times;</button>
                                        </div>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

const BenarSalahForm = (props) => {
    const { values, handleChange, setValues } = props

    useEffect(() => {
        if (values.kunci === undefined) setValues({ ...values, kunci: '1' })
    }, [])

    return (
        <React.Fragment>
            <TextAreaForm label="Pertanyaan" formW="10" name="q" value={values.q} placeholder="isikan pertanyaan..." handleChange={handleChange} />
            <RadioForm
                label="Jawaban" name="kunci" handleChange={handleChange} value={values.kunci}
                options={[
                    ['1', 'BENAR'],
                    ['0', 'SALAH'],
                ]}
            />
        </React.Fragment>
    )
}

const MenjodohkanForm = (props) => {
    const { values, handleChange, setValues } = props

    useEffect(() => {
        if (values.pertanyaans === undefined) setValues({ ...values, pertanyaans: [''], jawabans: [''], kunci: [] })
    }, [])

    const handleCheck = (e) => {
        if (values.aType == 1) setValues({ ...values, kunci: [parseInt(e.target.value) + 1] })
        else if (values.aType == 2) {
            if (e.target.checked) setValues({ ...values, kunci: [...values.kunci, parseInt(e.target.value) + 1] })
            else {
                const filteredKunci = values.kunci.filter(k => { return k !== parseInt(e.target.value) + 1 })
                setValues({ ...values, kunci: filteredKunci })
            }
        }
    }

    const newJawaban = e => {
        setValues({ ...values, jawabans: [...values.jawabans, ""] })
    }

    const handleJawaban = e => {
        const newJawabans = [...values.jawabans]
        newJawabans[e.target.name] = e.target.value
        setValues({ ...values, jawabans: newJawabans })
    }

    const delJawaban = e => {
        const deletedKeys = []
        const filteredJawabans = values.jawabans.filter((jawaban, i) => {
            if (e.target.value === jawaban) deletedKeys.push(i + 1)
            return e.target.value !== jawaban
        })
        const filteredKeys = values.kunci.filter((k, i) => { return deletedKeys.indexOf(k) === -1 })
        setValues({ ...values, jawabans: filteredJawabans, kunci: filteredKeys })
    }

    const newPertanyaan = e => {
        setValues({ ...values, pertanyaans: [...values.pertanyaans, ""] })
    }

    const handlePertanyaan = e => {
        const newPertanyaans = [...values.pertanyaans]
        newPertanyaans[e.target.name] = e.target.value
        setValues({ ...values, pertanyaans: newPertanyaans })
    }

    const delPertanyaan = e => {
        const deletedKeys = []
        const filteredPertanyaans = values.pertanyaans.filter((pertanyaan, i) => {
            if (e.target.value === pertanyaan) deletedKeys.push(i + 1)
            return e.target.value !== pertanyaan
        })
        const filteredKeys = values.kunci.filter((k, i) => { return deletedKeys.indexOf(k) === -1 })
        setValues({ ...values, pertanyaans: filteredPertanyaans, kunci: filteredKeys })
    }

    const handleDragStart = data => event => {
        const newKunci = values.kunci.filter(k => { return k.q !== data.id })
        setValues({ ...values, kunci: newKunci })
        event.dataTransfer.setData("dragContent", data.id)
    };
    const handleDrop = data => event => {
        event.preventDefault()
        const exist = values.kunci.filter(line => { return line.a === data.id })
        if (exist.length > 0) return
        const from = JSON.parse(event.dataTransfer.getData("dragContent"))
        const to = data.id
        //setLines([...lines, { q: from, a: to }])
        console.log({ ...values, kunci: [...values.kunci, { q: from, a: to }] })
        setValues({ ...values, kunci: [...values.kunci, { q: from, a: to }] })
        return false
    };

    return (
        <React.Fragment>
            <TextAreaForm labelW="0" formW="12" name="q" value={values.q} placeholder="isikan perintah/petunjuk mengerjakan..." handleChange={handleChange} />
            <div className="row">
                <label className="col-5">
                    <span>Pertanyaan</span>
                    <button type="button" className="btn btn-sm btn-outline-primary ml-1 mr-3" onClick={newPertanyaan}><i className="fas fa-plus"></i></button>
                </label>
                <div className="col-2"></div>
                <label className="col-5">
                    <span>Jawaban</span>
                    <button type="button" className="btn btn-sm btn-outline-success ml-1" onClick={newJawaban}><i className="fas fa-plus"></i></button>
                </label>
            </div>
            <div className="row">
                <div className="col-5">
                    {values.pertanyaans && values.pertanyaans.length > 0 &&
                        <ul className="list-group">
                            {values.pertanyaans.map((pertanyaan, i) => (
                                <React.Fragment key={i}>
                                    <li style={{ listStyle: 'none' }}>
                                        <div className="form">
                                            <label className="m-0"><b>{String.fromCharCode(65 + i)}</b></label>
                                            <span draggable="true" onDragStart={handleDragStart({ id: i })} className={`float-right fas fa-question-circle listq-${i}`}></span>
                                            <input type="text" name={i} value={pertanyaan} className="form-control m-0" onChange={handlePertanyaan} />
                                            <button type="button" value={pertanyaan} onClick={delPertanyaan} className="btn btn-xs btn-outline-danger">&times;</button>
                                        </div>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    }
                </div>
                <div className="col-2 m-0">
                    {values.kunci && values.kunci.constructor === Array && values.kunci.map((line, i) => <LineTo key={i} from={`listq-${line.q}`} to={`lista-${line.a}`} />)}
                </div>
                <div className="col-5">
                    {values.jawabans && values.jawabans.length > 0 &&
                        <ul className="list-group">
                            {values.jawabans.map((jawaban, i) => (
                                <React.Fragment key={'a' + i}>
                                    <li style={{ listStyle: 'none' }}>
                                        <div className="form"
                                            draggable="true"
                                            onDragOver={(e) => { e.preventDefault() }}
                                            onDrop={handleDrop({ id: i })} >
                                            <span className={`fas fa-check-circle lista-${i}`}></span>
                                            <label className="m-0"><b>{String.fromCharCode(65 + i)}</b></label>
                                            <input type="text" name={i} value={jawaban} className="form-control m-0" onChange={handleJawaban} />
                                            <button type="button" value={jawaban} onClick={delJawaban} className="float-right btn btn-xs btn-outline-danger mt-1">&times;</button>
                                        </div>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

const IsianForm = (props) => {
    const { values, handleChange, setValues } = props

    useEffect(() => {
        if (values.kunci === undefined) setValues({ ...values, kunci: [], })
    }, [])

    const handleText = e => {
        const match = e.target.value.match(/\[\[.*?\]\]/g)
        const kunci = match ? match.reduce((filtered, s) => {
            if (s.replace(/\[|]/g, '') != "") filtered.push(s.replace(/\[|]/g, ''))
            return filtered
        }, []) : [];
        setValues({ ...values, q: e.target.value, kunci: kunci })
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-10 offset-md-2 col-12">
                    <div className="p-3 mb-2 bg-info text-white">Isikan jawaban didalam tanda [[]]. <br /> Contoh: Ibu kota Indonesia adalah [[Jakarta]].</div>
                </div>
            </div>
            <TextAreaForm label={<p>Pertanyaan -<br />Jawaban</p>} formW="10" name="q" value={values.q} placeholder={values.aType == 1 ? "isikan pertanyaan" : "isikan pertintah/petunjuk mengerjakan"} handleChange={handleText} />
            <div className="row">
                <div className="col-md-10 offset-md-2 col-12">
                    {values.kunci && values.kunci.map((kunci, i) => <span key={i} className="badge badge-primary mr-1" style={{ fontSize: '1rem' }}>{kunci}</span>)}
                </div>
            </div>
        </React.Fragment>
    )
}

const EssayForm = (props) => {
    const { values, handleChange, setValues } = props

    useEffect(() => {
        if (values.kunci === undefined) setValues({ ...values, kunci: "", })
    }, [])

    return (
        <React.Fragment>
            <TextAreaForm label={"Pertanyaan"} formW="10" name="q" value={values.q} placeholder={"isikan pertanyaan"} handleChange={handleChange} />
            <TextAreaForm label={"Jawaban"} formW="10" name="kunci" value={values.kunci} placeholder={"Isikan kunci jawaban"} handleChange={handleChange} />
        </React.Fragment>
    )
}

import { withRouter } from 'react-router-dom'
export default withRouter(SoalForm)