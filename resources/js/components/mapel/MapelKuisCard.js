import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import useForm from '../../utils/useForm'
import { withRouter } from 'react-router-dom'

import { Loading, NotifMessage } from '../html/Template'
import { SelectForm, TextForm, RadioForm } from '../html/BasicForm'

import KuisList from '../kuis/KuisList'
import KuisSearch from '../kuis/KuisSearch'

import Timer from 'react-compound-timer'
import { is } from 'immutable';

const MapelKuisCard = (props) => {
    const { id, notif, groups, isSiswa = false } = props
    const token = Token.getToken()
    const fields = {
        dataId: '',
        type: '',
        mulai: '',
        waktu: '',
        start: '',
        published: false,
    }
    const { values, setValues, handleChange, getErrors } = useForm(applySettings, fields)
    const [kuises, setKuises] = useState([])
    const [kuis, setKuis] = useState({})

    // pilihan kuis
    const [kuisList, setKuisList] = useState({
        kuises: [], pageData: {}, search: {}
    })

    const [loading, setLoading] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const [selectedGroup, setSelectedGroup] = useState('')

    const [selectedKuises, setSelectedKuises] = useState([])

    useEffect(() => {
        getKuis()
    }, [selectedGroup])

    useEffect(() => {
        if (!isSiswa) getKuisList()
    }, [kuisList.search])

    function setSearch(values = {}) { setKuisList({ ...kuisList, search: values }) }

    const getKuis = () => {
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        const ep = !isSiswa ? '/api/materi/kuis/' : '/api/materi-siswa/kuis/';
        axios.get(ep + id, {
            params: { group: selectedGroup },
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setLoading(false)
            setKuises(res.data.data)
        }).catch((err) => {
            setLoading(false)
            notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
        })
    }

    const getKuisList = () => {
        if (!Token.getToken()) { notif(<NotifMessage text={`mohon login ulang`} success={false} />); return }
        axios.get('/api/kuis/', {
            params: kuisList.search.kuis,
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            setKuisList({ ...kuisList, kuises: res.data.data })
        }).catch((err) => {
            notif(JSON.stringify(err.message))
        })
    }

    const getDetail = (id) => {
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        axios.get('/api/materi/kuis-detail/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setLoading(false)
            setKuis(res.data.data)
            const settings = JSON.parse(res.data.data.settings)
            const setArr = {
                type: settings.type,
                keterangan: settings.keterangan,
                waktu: settings.waktu,
                mulai: settings.mulai,
                start: settings.start,
                published: res.data.data.published,
            }
            setValues({ ...values, ...setArr, dataId: res.data.data.id })
        }).catch((err) => {
            setLoading(false)
            notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
        })
    }

    const openSettingForm = (id) => {
        getDetail(id)
        setValues({ ...values, dataId: id })
        setFormOpen(true)
    }

    const openForm = () => {
        setValues({ ...values, materiId: id })
        setFormOpen(true)
    }

    function submit() {
        if (!token) {
            notif("mohon login ulang")
            return
        }
        setLoading(true)
        axios.post('/api/add-kuis/', { mapelId: id, group: values.group, kuises: selectedKuises }, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            notif(<NotifMessage text={`berhasil ditambahkan`} />)
            setLoading(false)
            closeAndReset()
            loadMateri()
        }).catch((err) => {
            if (err.response) {
                if (err.response.request.status === 422) {
                    notif(getErrors(err.response.data.errors))
                } else if (err.response.request.status === 401) {
                    notif(<NotifMessage text={`mohon login ulang`} success={false} />)
                } else {
                    notif(JSON.stringify(err.message) + ' ' + JSON.stringify(err.response.data))
                }
            } else {
                notif(JSON.stringify(err.message) + ' ' + JSON.stringify(err.response.data))
            }
            setLoading(false)
            closeAndReset()
        })
    }

    function applySettings(e) {
        e.preventDefault()
        if (!Token.cek()) { notif('mohon login ulang'); return }
        setLoading(true)
        axios.put('/api/materi/kuis/' + values.dataId, { ...values }, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            setLoading(false)
            notif('sukses')
            closeAndReset()
            getKuis()
        }).catch((err) => {
            if (err.response) {
                if (err.response.request.status === 422) {
                    console.log(getErrors(err.response.data.errors))
                    notif(getErrors(err.response.data.errors))
                }
            }
            closeAndReset()
        })
    }

    const closeAndReset = e => {
        setValues({ ...fields })
        setSelectedKuises([])
        setFormOpen(false)
    }

    const delKuis = (id, judul) => {
        if (!confirm(`hapus ${judul}`)) return
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        axios.delete('/api/rem-kuis/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setLoading(false)
            notif(<NotifMessage text={`${judul} telah dihapus`} />)
            getPeserta()
        }).catch((err) => {
            setLoading(false)
            notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
        })
    }

    const handleSelectKuis = e => {
        e.persist()
        if (e.target.checked) {
            setSelectedKuises([...selectedKuises, e.target.value])
            console.log([...selectedKuises, e.target.value])
        } else {
            const updated = selectedKuises.filter(mat => { if (e.target.value !== mat) return mat })
            setSelectedKuises(updated)
            console.log(updated)
        }
    }

    const handleCheck = e => {
        const checked = e.target.checked
        console.log({ ...values, [e.target.name]: checked })
        setValues({ ...values, [e.target.name]: checked })
    }

    function bedaWaktu(kuisStart, time) {
        const now = new Date();
        const startDate = new Date(kuisStart);
        const start = (startDate.getTime() - now.getTime());
        const end = (start + time * 60000);
        const status = (start <= 0 && end > 0) ? 2 : end < 0 ? 3 : 1;
        return { start: start, end: end, status: status }
    }

    function mulaiKuis(id) {
        if (isSiswa) {
            if (confirm(`Mulai Kuis?`)) {
                props.history.push({
                    pathname: '/mulai-kuis/' + id,
                })
            }
        }
    }

    return (
        <React.Fragment>
            <div className="card" style={{ width: "100%", borderTop: 'none' }}>
                <div className="card-body row p-1">
                    <div className="col-12">
                        <div className="pb-1">
                            <strong className="card-title">Kuis</strong>
                            {!isSiswa &&
                                <button className="btn btn-xxs btn-primary ml-1" value={0} onClick={openForm}><i className="fas fa-plus"></i></button>
                            }
                        </div>
                        {!isSiswa &&
                            <SelectForm formW="2" placeholder=" - " label="kelas / kelompok" options={groups} value={selectedGroup} handleChange={e => { setSelectedGroup(e.currentTarget.value) }} />
                        }
                        <ul className="list-group">
                            {kuises.map(kuis => {
                                const settings = JSON.parse(kuis.settings)
                                const ms = bedaWaktu(settings.start, settings.waktu)
                                return (
                                    <li className="list-group-item p-1 pl-2" key={kuis.id}>
                                        <div className="row">

                                            <div className="col-md-8">
                                                <strong>{kuis.kuis.judul}</strong>
                                                {!isSiswa &&
                                                    <React.Fragment>
                                                        <button className="ml-2 btn btn-xxs btn-outline-info" value={kuis.id} onClick={() => openSettingForm(kuis.id)}><i className="fas fa-wrench"></i></button>
                                                        <button className="ml-2 btn btn-xxs btn-outline-danger" value={kuis.id} onClick={() => delKuis(kuis.id, kuis.kuis.judul)}><i className="fas fa-times"></i></button>
                                                    </React.Fragment>
                                                }
                                                <br />
                                                <small style={{}}>
                                                    {!isSiswa && selectedGroup == "" && <p className="mb-0">{`kelompok: ${kuis.group ? kuis.group : 'umum'}`}</p>}
                                                    {settings.keterangan && <p className="mb-0">{`keterangan: ${settings.keterangan}`}</p>}
                                                    {settings.type == 2 && <p className="mb-0">{`waktu: ${settings.waktu} menit`}</p>}
                                                    {settings.mulai == 2 && <p className="mb-0">{`mulai: ${settings.start}`}</p>}
                                                    {!isSiswa && kuis.published && <span className="badge badge-success mr-1">published</span>}
                                                    {settings.type == 1 ? <span className="badge badge-info mr-1">latihan</span> : settings.type == 2 && <span className="badge badge-warning mr-1">ujian</span>}
                                                    {settings.mulai == 1 ? <span className="badge badge-secondary">mulai manual</span> : settings.mulai == 2 && <span className="badge badge-primary mr-1">terjadwal</span>}
                                                </small>
                                            </div>
                                            <div className="col-md-4">
                                                {!isSiswa && kuis.published && settings.type == 2 && settings.mulai == 1 && true /*cek selesai?*/ && <button className="btn btn-outline-success float-right mr-1"><i className="fas fa-play"></i></button>}
                                                {isSiswa && <button className="btn btn-outline-success float-right mr-1" onClick={() => mulaiKuis(kuis.id)}><i className="fas fa-play"></i></button>}
                                                {(settings.type == 1 || false /** cak selesai? */) && <button className="btn btn-outline-primary float-right mr-1"> <i className="fas fa-table"></i></button>}
                                                {kuis.published && settings.type == 2 && (settings.mulai == 2 || (settings.mulai == 1 && settings.started)) &&
                                                    <span className="">
                                                        <Timer
                                                            initialTime={ms.start}
                                                            direction="backward"
                                                            checkpoints={[
                                                                {
                                                                    time: 0,
                                                                    callback: () => getKuis(),
                                                                },
                                                            ]}
                                                        >
                                                            {() => (
                                                                <span style={{ display: ms.status == 1 ? 'block' : 'none' }}>
                                                                    <b>Mulai : </b>
                                                                    <Timer.Days />hari {' '}
                                                                    <Timer.Hours />jam{' '}
                                                                    <Timer.Minutes />menit{' '}
                                                                    <strong style={{ fontSize: 20 }}><Timer.Seconds /></strong>
                                                                </span>
                                                            )}
                                                        </Timer>
                                                        <Timer
                                                            initialTime={ms.end}
                                                            direction="backward"
                                                            checkpoints={[
                                                                {
                                                                    time: 0,
                                                                    callback: () => getKuis(),
                                                                },
                                                            ]}
                                                        >
                                                            {() => (
                                                                <React.Fragment>
                                                                    <span style={{ display: ms.status == 2 ? 'block' : 'none' }}>
                                                                        <b>Selesai : </b>
                                                                        <Timer.Hours />jam{' '}
                                                                        <Timer.Minutes />menit{' '}
                                                                        <strong style={{ fontSize: 20 }}><Timer.Seconds /></strong>
                                                                    </span>
                                                                    {!isSiswa && ms.status != 1 && <button className="btn btn-outline-primary float-right mr-1"> <i className="fas fa-table"></i></button>}
                                                                </React.Fragment>
                                                            )}
                                                        </Timer>
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
            </div>


            {formOpen && values.materiId && !isSiswa &&
                <div className="modal" style={{ display: 'block', overflow: 'auto', }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form onSubmit={submit} id="form-1"></form>
                            <div className="modal-body">
                                <button type="button" className="close" onClick={closeAndReset}>
                                    <span>&times;</span>
                                </button>
                                <div className="row">
                                    <div className="col-12 pr-0">
                                        Tambah Kuis<br />
                                        <hr />
                                        <SelectForm
                                            label="Kelompok" name="group"
                                            options={groups}
                                            value={values.group}
                                            placeholder=" - PILIH -"
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <KuisSearch kuises={kuisList.kuises} setSearch={setSearch} defaultValues={{}} />
                                        <KuisList kuises={kuisList.kuises} action="select" select={handleSelectKuis} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" form="form-1" className="btn btn-sm btn-success" disabled={loading}>
                                    <i className="fas fa-check"></i>
                                    {' '}Tambahkan{' '}
                                    {loading && <i className="fas fa-spinner fa-spin"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}


            {formOpen && values.dataId && !isSiswa &&
                <div className="modal" style={{ display: 'block', overflow: 'auto', }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form onSubmit={applySettings} id="form-1"></form>
                            <div className="modal-body">
                                <button type="button" className="close" onClick={closeAndReset}>
                                    <span>&times;</span>
                                </button>
                                <div className="row">
                                    <div className="col-12 pr-0">
                                        Pengaturan<br />
                                        <small>{kuis.kuis && kuis.kuis.judul}</small>
                                        <hr />
                                        <TextForm label="Keterangan" name="keterangan" placeholder="keterangan kuis" value={values.keterangan} handleChange={handleChange} />
                                        <SelectForm
                                            label="Jenis" name="type"
                                            options={[{ id: '', nama: '-' }, { id: 1, nama: 'Latihan' }, { id: 2, nama: 'Ujian' }]}
                                            value={values.type}
                                            handleChange={handleChange}
                                        />
                                        {values.type == 2 &&
                                            <React.Fragment>
                                                <TextForm label="Waktu" name="waktu" formW="2" placeholder="menit" value={values.waktu} handleChange={handleChange} />
                                                <RadioForm
                                                    label="Mulai Kuis" name="mulai"
                                                    options={[[1, "Manual"], [2, "Terjadwal"]]}
                                                    value={values.mulai}
                                                    handleChange={handleChange}
                                                />
                                                {values.mulai == 2 &&
                                                    <React.Fragment>
                                                        <TextForm label="Waktu Mulai" name="start" formW="3" placeholder="DD/MM/YY H:i:s" value={values.start} handleChange={handleChange} />
                                                    </React.Fragment>
                                                }
                                            </React.Fragment>
                                        }
                                        <div className="ro2">
                                            <div className="col-8 offset-md-2 p-0">
                                                <label><input type="checkbox" name="published" className="custom-cb" onChange={handleCheck} checked={values.published ? true : false} />  Terbitkan</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" form="form-1" className="btn btn-sm btn-success" disabled={loading}>
                                    <i className="fas fa-check"></i>
                                    {' '}Terapkan{' '}
                                    {loading && <i className="fas fa-spinner fa-spin"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}

        </React.Fragment>
    )
}

export default withRouter(MapelKuisCard)