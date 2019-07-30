import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Token from '../../utils/Token'
import useForm from '../../utils/useForm'

import { TextForm } from '../html/BasicForm'

const KategoriForm = (props) => {
    const { tipe, id, toggle } = props
    const fields = {
        id: (tipe === 'update') ? id : 0,
    }
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (tipe === 'update') {
            if (!Token.cek()) { setErrors(['mohon login ulang']); return }
            setLoading(true)
            axios.get('/api/kategori-admin/' + id, {
                headers: { Authorization: 'Bearer ' + Token.getToken() }
            }).then(res => {
                const data = res.data.data
                setValues(values => ({
                    ...values,
                    nama: data.nama,
                }))
                setLoading(false)
            }).catch(() => toggle('table', ''))
        }
    }, []);

    function submit() {
        if (!Token.cek()) { setErrors(['mohon login ulang']); return }
        setLoading(true)
        setSuccess(false)
        const m = tipe === 'add' ? 'post' : 'put';
        axios[m]('/api/kategori-admin/' + (id ? id : ''), { ...values }, {
            headers: { Authorization: 'Bearer ' + Token.getToken() }
        }).then(res => {
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
                        <h5 className="float-left"><b>{tipe === 'add' ? 'Tambah' : 'Ubah'} Data Kategori</b></h5>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2%' }} >
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="form">
                            <TextForm name="nama" label="Nama" placeholder="Nama Kategori" handleChange={handleChange} value={values.nama} />
                            <div className="form-group row">
                                <div className="col-md-2"></div>
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
        </div>
    )

}

export default KategoriForm

