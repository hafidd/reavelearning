import React, { useState, useEffect } from 'react'
import useForm from '../../utils/useForm'
import Token from '../../utils/Token'
import axios from 'axios'

import { TextForm, SelectForm, RadioForm } from '../html/BasicForm'

const PengaturanSoalModal = props => {
    const { id, closeAndReset, loadSoal, setNotif } = props
    const fields = {
        id: id,
        nama: '',
        settings: {}
    }
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)

    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadDetail()
    }, [])

    const loadDetail = () => {
        if (!Token.cek()) { setNotif('mohon login ulang'); return }
        setLoading(true)
        axios.get('/api/kuis-soal/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            setType(res.data.data.type)
            setValues({ ...values, nama: res.data.data.nama, settings: JSON.parse(res.data.data.settings) })
            setLoading(false)
        }).catch(() => closeAndReset())
    }

    function submit() {
        if (!Token.cek()) { setNotif('mohon login ulang'); return }
        setLoading(true)
        axios.put('/api/kuis-soal/' + id, { ...values, type: type }, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            setLoading(false)
            setNotif('sukses')
            closeAndReset()
            loadSoal()
        }).catch((err) => {
            if (err.response) {
                if (err.response.request.status === 422) {
                    console.log(getErrors(err.response.data.errors))
                    setNotif(getErrors(err.response.data.errors))
                }
            }
            closeAndReset()
        })
    }


    const handleCheck = e => {
        const checked = e.target.checked
        setValues({ ...values, settings: { ...values.settings, [e.target.name]: checked } })
    }

    const handleSettingsChange = e => {
        setValues({ ...values, settings: { ...values.settings, [e.target.name]: e.target.value } })
    }

    return (
        <div className="modal" style={{ display: 'block', overflow: 'auto', }}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header row">
                        <div className="col-12">
                            <strong>Pengaturan</strong>
                            <button type="button" className="close" onClick={closeAndReset}>
                                <span>&times;</span>
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} id="form-1"></form>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                {type == 1 &&
                                    <div>
                                        <TextForm label="Nama *" placeholder="Nama group/bab kuis" name="nama" value={values.nama} handleChange={handleChange} />
                                        <TextForm label="Keterangan" name="keterangan" placeholder="keterangan kuis" value={values.settings.keterangan} handleChange={handleSettingsChange} />
                                        <TextForm label="Bobot *" formW="3" formtext="* Bobot group/bab soal" name="bobot" placeholder="Bobot nilai" value={values.settings.bobot} handleChange={handleSettingsChange} />
                                        <div className="col-8 offset-md-2 p-0">
                                            <label className="mb-0"><input type="checkbox" name="bobotPerSoal" className="custom-cb" onChange={handleCheck} checked={values.settings.bobotPerSoal ? true : false} />  Bobot per soal</label>
                                        </div>
                                        <div className="col-8 offset-md-2 p-0">
                                            <label><input type="checkbox" name="acakSoal" className="custom-cb" onChange={handleCheck} checked={values.settings.acakSoal ? true : false} />  Acak Soal</label>
                                        </div>
                                    </div>
                                }
                                {type == 2 &&
                                    <div>
                                        <TextForm label="Bobot *" formW="3" formtext="* Bobot soal" name="bobot" placeholder="Bobot nilai" value={values.settings.bobot} handleChange={handleSettingsChange} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="sumbit" form="form-1" className="btn btn-sm btn-success" disabled={loading}>
                            <i className="fas fa-check"></i>
                            {' '}Terapkan{' '}
                            {loading && <i className="fas fa-spinner fa-spin"></i>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PengaturanSoalModal