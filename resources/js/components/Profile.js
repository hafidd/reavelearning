import React, { useState, useEffect } from 'react'
import useForm from './../hooks/useForm'

import Token from './../Token'
import axios from 'axios'

import { TextForm, RadioForm } from './form/'

const Profile = (props) => {
    const { user, updateUser } = props
    const fields = user
    const { values, setValues, handleChange, handleSubmit } = useForm(submit, fields)
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);
    const [img, setImg] = useState({
        src: 'images/profile.jpg',
        changed: false,
        prev: '',
        file: ''
    });

    useEffect(() => {
        getImg()
    }, []);

    function getImg() {
        axios.get('images/users/' + user.id + '.jpg').then(() => setImg({ ...img, src: 'images/users/' + user.id + '.jpg' })).catch(() => { })
    }

    function submit(img = false) {
        const token = Token.getToken()
        if (!token) return
        setLoading(true)
        setSuccess(false)
        const path = img ? 'update-pp' : 'update-profile'
        let formData = new FormData()
        for (let key in values) {
            formData.append(key, values[key])
        }
        axios.post('/api/' + path, formData, {
            headers: {
                'Content-Type': `multipart/form-data`,
                Authorization: 'Bearer ' + token,
            }
        }).then(() => {
            setSuccess(true)
            setLoading(false)
            setValues(values => ({ ...values, password_baru: '', password_baru_confirmation: '', password: '', img: '' }))
            if (!img) {
                updateUser({
                    email: values.email,
                    name: values.name,
                    jk: values.jk,
                })
            } else {
                //setImg({ src: URL.createObjectURL(img.uploadedFile) })
            }
        }).catch((err) => {
            if (err.response) {
                if (err.response.request.status === 422) {
                    setNotif(err.response.data.errors)
                } else if (err.response.request.status === 401) {
                    setErrors([err.response.data.error])
                } else {
                    setErrors(['server error'])
                }
            } else {
                setErrors(['server error'])
            }
            resetImg()
            setLoading(false)
        })
    }

    function changeImage(e) {
        const uploadedFile = e.target.files[0]
        setValues(values => ({ ...values, img: uploadedFile }))
        setSuccess(false)
        setImg({ src: URL.createObjectURL(uploadedFile), changed: true, prev: img.src, file: uploadedFile })
    }

    function resetImg() {
        setImg({ src: img.prev, changed: false, prev: '' })
    }

    function submitImage() {
        if (img.changed) {
            if (!values.password || values.password === '') {
                setErrors(['isi password'])
                return
            }
            submit(true)
        }
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

    return (
        <div className="container-fluid content">
            <div className="row mt-0">
                <div className="col-12 mt-3">
                    <h2>
                        {!props.sidebar && (<><button className="btn btn-sm btn-outline-dark" onClick={props.toggleSidebar}><i className="fas fa-bars"></i></button>{' '}</>)}
                        Profile
                    </h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 col-md-2 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-1">
                                <img src={img.src} style={{ width: '100%' }} />
                            </div>
                            <label className="btn btn-xs btn-primary" style={{ width: '100%', paddingBottom: '10px' }}>
                                Pilih Gambar <input type="file" accept="image/x-png,image/jpeg" onChange={changeImage} style={{ height: '0.1px', width: '0.1px', opacity: 0, margin: 0 }} />
                            </label>
                            <div className="text-center mt-1">
                                {(img.changed && !loading && !success) && (
                                    <React.Fragment>
                                        <button className="btn btn-xs btn-success mr-3" onClick={submitImage}><i className="fas fa-check"></i></button>
                                        <button className="btn btn-xs btn-warning" onClick={resetImg}><i className="fas fa-times"></i></button>
                                    </React.Fragment>
                                )}
                                {(loading && img.changed) && <i className="fa fa-spinner fa-spin"></i>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-10">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body row">
                                <div className="col-12">
                                    <h5 className="card-title">Ubah Profil</h5>
                                    <hr />
                                </div>
                                <div className="col-md-8">
                                    <TextForm type="email" name="email" label="Email" value={values.email} handleChange={handleChange} labelW="3" formW="6" />
                                    <TextForm name="name" label="Nama Lengkap" value={values.name} handleChange={handleChange} labelW="3" formW="6" />
                                    <RadioForm
                                        label="Jenis Kelamin" name="jk" handleChange={handleChange} value={values.jk}
                                        options={[
                                            ['l', 'Laki - Laki'],
                                            ['p', 'Perempuan']
                                        ]}
                                        labelW="3"
                                        formW="6"
                                    />
                                    <hr />
                                    <TextForm type="password" name="password_baru" label="Password Baru" value={values.password_baru} handleChange={handleChange} labelW="3" formW="5" formtext="kosongi jika tidak ingin mengubah password" />
                                    <TextForm type="password" name="password_baru_confirmation" label="Ulangi Password" value={values.password_baru_confirmation} handleChange={handleChange} labelW="3" formW="5" />
                                    <hr />
                                    <TextForm type="password" name="password" label="Password" value={values.password} handleChange={handleChange} labelW="3" formW="5" required={true} />
                                </div>
                                <div className="col-md-4">
                                    {(errors.constructor === Array && errors.length > 0 && !success) && (
                                        <div className="bg-warning" style={{ padding: '5%', margin: '5%' }}>
                                            <ul>{errors.map((item, key) => <li key={key}>{item}</li>)}</ul>
                                        </div>
                                    )}
                                    {success && (
                                        <div className="bg-success" style={{ padding: '5%', margin: '5%' }}>
                                            <p className="lead">Sukses!</p>
                                            <p>profil berhasil disimpan</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-success" disabled={loading || !values.password}>SIMPAN {loading && <i className="fa fa-spinner fa-spin"></i>} </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Profile