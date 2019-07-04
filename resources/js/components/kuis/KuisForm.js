import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import useForm from '../../utils/useForm'

import { TextForm, TextAreaForm } from '../html/BasicForm'

const KuisForm = (props) => {
    const { tipe, id, setAction, mapelId, dirId } = props
    const fields = {
        id: (tipe === 'update') ? id : 0,
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
            axios.get('/api/kuis/' + id, {
                headers: {
                    Authorization: 'Bearer ' + Token.getToken()
                }
            }).then(res => {
                const data = res.data.data
                setValues(values => ({
                    ...values,
                    judul: data.judul,
                    kode: data.kode,
                    keterangan: data.keterangan,
                }))
                setLoading(false)
            }).catch(() => setAction('', { message: 'data error' }))
        }
        if (mapelId) {
            console.log('kurang load data detail mapel')
        }
    }, []);

    function submit() {
        if (!Token.cek()) {
            setErrors(['mohon login ulang'])
            return
        }
        setLoading(true)
        setSuccess(false)

        let formData = new FormData()
        for (let key in values) {
            formData.append(key, values[key])
        }
        if (tipe === "update") formData.append("_method", "put")

        axios.post('/api/kuis/' + (id ? id : ''), formData, {
            headers: {
                'Content-Type': `multipart/form-data`,
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(res => {
                setLoading(false)
                setSuccess(true)
                setErrors({})
                if (tipe === 'add') setValues({})
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

    return (
        <div className="row" style={{ padding: '2%' }}>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="float-left"><b>{tipe === 'add' ? 'Tambah' : 'Ubah'} Kuis {mapelId && ` - Mata pelajaran : ${mapelId}`}</b></h5>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2%' }} >
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="form">
                            <TextForm formW="4" name="kode" label="Kode" placeholder="Kode Kuis" handleChange={handleChange} value={values.kode} />
                            <TextForm name="judul" label="Judul" placeholder="Judul Kuis" handleChange={handleChange} value={values.judul} />
                            <TextAreaForm formW="6" name="keterangan" label="Keterangan" placeholder="Keterangan (max 100)" handleChange={handleChange} value={values.keterangan} />

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
                        <div className="bg-success" style={{ padding: '5%', margin: '5%', display: 'none' }}>
                            <p className="lead">Keterangan</p>
                            <p><span>20</span> total murid</p>
                            <p><span>20</span> total ujian</p>
                            <p><span>10</span> total materi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

import { withRouter } from 'react-router-dom'
export default withRouter(KuisForm)

