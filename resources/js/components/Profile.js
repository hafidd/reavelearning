import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useForm from './../hooks/useForm'
import { TextForm, RadioForm } from './form/'

const Profile = (props) => {
    const fields = {}
    const { values, setValues, handleChange, handleSubmit } = useForm(submit, fields)

    function submit() { }

    console.log(props)
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
                                <img src="images/profile.jpg" style={{ width: '100%' }} />
                            </div>
                            <label className="btn btn-xs btn-primary" style={{ width: '100%', paddingBottom: '10px' }}>
                                Pilih Gambar <input type="file" style={{ height: '0.1px', width: '0.1px', opacity: 0, margin: 0 }} />
                            </label>
                            {true && (
                                <div className="text-center mt-1">
                                    <button className="btn btn-xs btn-success mr-3"><i className="fas fa-check"></i></button>
                                    <button className="btn btn-xs btn-warning"><i className="fas fa-times"></i></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-10">
                    <form>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ubah Profil</h5>
                                <hr />
                                <TextForm type="email" name="email" label="Email" value={values.email} handleChange={handleChange} formW="4" />
                                <TextForm name="nama" label="Nama Lengkap" value={values.nama} handleChange={handleChange} formW="4" />
                                <RadioForm
                                    label="Jenis Kelamin" name="jk" handleChange={handleChange} value={values.jk}
                                    options={[
                                        ['l', 'Laki - Laki'],
                                        ['p', 'Perempuan']
                                    ]}
                                />
                                <hr />
                                <TextForm type="password" name="password1" label="Password Baru" value={values.password1} handleChange={handleChange} formW="3" />
                                <TextForm type="password2" name="password2" label="Ulangi Password" value={values.password2} handleChange={handleChange} formW="3" />
                                <hr />
                                <TextForm type="password" name="password" label="Password" value={values.password} handleChange={handleChange} formW="3" />
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-sm btn-success">Simpan</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )

}

export default Profile