import React, { useState, useEffect } from 'react'
import useForm from '../utils/useForm'

import Token from './../utils/Token'
import axios from 'axios'

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { TextForm, RadioForm } from './html/BasicForm'
import { PageTitle } from './html/Template'

const Profile = (props) => {
    const { user, updateUser } = props
    const fields = user
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);
    const [img, setImg] = useState({
        src: 'images/profile.jpg',
        changed: false,
        prev: '',
        file: ''
    });
    const [cImg, setCimg] = useState();
    let cropper = null;

    useEffect(() => {
        getImg()
    }, []);

    function getImg() {
        axios.get('images/users/' + user.id + '.jpg').then(() => setImg({ ...img, src: 'images/users/' + user.id + '.jpg' })).catch(() => { })
    }

    function submit(imgage = false) {
        const token = Token.getToken()
        if (!token) return
        setLoading(true)
        setSuccess(false)
        const path = imgage ? 'update-pp' : 'update-profile'
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
            if (!imgage) {
                updateUser({
                    email: values.email,
                    name: values.name,
                    jk: values.jk,
                })
            } else {
                setImg({ ...img, prev: '' })
            }
        }).catch((err) => {
            resetImg()
            if (err.response) {
                if (err.response.request.status === 422) {
                    setErrors(getErrors(err.response.data.errors))
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
        setSuccess(false)
        setImg({ ...img, changed: true })
        setCimg(URL.createObjectURL(uploadedFile))
    }

    function resetImg() {
        setCimg('')
        setImg({ src: img.prev ? img.prev : img.src, changed: false, prev: '' })
    }

    function submitImage() {
        if (img.changed) {
            submit(true)
        }
    }

    function crop() {
        const croppedImg = cropper.getCroppedCanvas().toDataURL();
        setCimg('')
        setSuccess(false)
        setImg({ src: croppedImg, changed: true, prev: img.src })
        setValues(values => ({ ...values, img: croppedImg }))
    }

    return (
        <React.Fragment>
            <PageTitle title="Pengaturan" />
            <hr />
            <div className="row">
                <div className="col-12 col-md-2 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-1">
                                <img src={img.src} style={{ width: '100%' }} />
                            </div>
                            <label className="btn btn-xs btn-primary" style={{ width: '100%', paddingBottom: '10px' }}>
                                Pilih Gambar <input type="file" accept="image/*" onChange={changeImage} style={{ height: '0.1px', width: '0.1px', opacity: 0, margin: 0 }} />
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
                                    {cImg ?
                                        <React.Fragment>
                                            <button type="button" className="btn btn-success btn-fullwidth" onClick={crop}>crop</button>
                                            <Cropper
                                                ref={(input) => { cropper = input }}
                                                src={cImg}
                                                style={{ height: 400, width: '100%' }}
                                                aspectRatio={1 / 1}
                                                guides={false} />
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
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
                                        </React.Fragment>
                                    }
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
        </React.Fragment>
    )

}

export default Profile

 