import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from './../../Token'

import useForm from './../../hooks/useForm'

import { TextForm, SelectForm, RadioForm, TextAreaForm } from './../form'

const MapelForm = (props) => {
    const { tipe, id, toggle, kategori } = props
    const fields = {
        id: (tipe === 'update') ? id : 0,
        akses: 'public',
        status: 'aktif'
    }
    const { values, setValues, handleChange, handleSubmit } = useForm(submit, fields)
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
            axios.get('/api/mapel/' + id, {
                headers: {
                    Authorization: 'Bearer ' + Token.getToken()
                }
            }).then(res => {
                const data = res.data.data
                setValues(values => ({
                    ...values,
                    nama: data.nama,
                    kode: data.kode,
                    kategori_id: data.kategori_id,
                    akses: data.akses,
                    status: data.status,
                    keterangan: data.keterangan
                }))
                setLoading(false)
            }).catch(() => toggle('table', ''))
        }
    }, []);

    function submit() {
        if (!Token.cek()) {
            setErrors(['mohon login ulang'])
            return
        }
        setLoading(true)
        setSuccess(false)
        const m = tipe === 'add' ? 'post' : 'put';
        axios[m]('/api/mapel/' + (id ? id : ''), values, {
            headers: {
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
                        setNotif(err.response.data.errors)
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

    function setNotif(msg = []) {
        let errMsg = []
        errMsg = Object.keys(msg).map((key) => {
            return msg[key].map(item => {
                return item;
            })
        })
        setErrors(errMsg)
    }

    function errorMessages() {
        return (<ul>{errors.map((item, key) => <li key={key}>{item}</li>)}</ul>);
    }

    return (
        <div className="row" style={{ padding: '2%' }}>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="float-left"><b>{tipe === 'add' ? 'Tambah' : 'Ubah'} Data</b></h5>
                        <button onClick={() => toggle('table')} className="btn btn-sm btn-outline-dark float-right"><span className="fas fa-arrow-left"></span> Kembali</button>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2%' }} >
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="form">
                            <TextForm name="nama" label="Nama" placeholder="Nama Mata Pelajaran" handleChange={handleChange} value={values.nama} />
                            <TextForm formW="4" name="kode" label="Kode" placeholder="Kode Mata Pelajaran" handleChange={handleChange} value={values.kode} />
                            <SelectForm name="kategori_id" options={kategori} label="Kategori" placeholder="= Pilih Kategori =" handleChange={handleChange} value={values.kategori_id} />
                            <RadioForm
                                label="Akses" name="akses" handleChange={handleChange} value={values.akses}
                                options={[
                                    ['public', 'Public'],
                                    ['private', 'Private']
                                ]}
                            />
                            <RadioForm
                                label="Status" name="status" handleChange={handleChange} value={values.status}
                                options={[
                                    ['aktif', 'Aktif'],
                                    ['nonaktif', 'Nonaktif']
                                ]}
                            />
                            <TextAreaForm name="keterangan" label="Keterangan" handleChange={handleChange} value={values.keterangan} />
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
                                {errorMessages()}
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
        </div>
    )
}

export default MapelForm

