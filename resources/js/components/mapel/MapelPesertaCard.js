import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import useForm from '../../utils/useForm'
import { withRouter } from 'react-router-dom'

import { Loading, NotifMessage } from '../html/Template'
import { SelectForm } from '../html/BasicForm'

const MapelPesertaCard = (props) => {
    const { id, notif, groups } = props
    const token = Token.getToken()
    const fields = {
        dataId: '',
        muridId: '',
        nama: '',
        mapelId: id,
        currentGroup: '',
        group: ''
    }
    const { values, setValues, handleChange, getErrors } = useForm(movePeserta, fields)
    const [pesertas, setPesertas] = useState([])
    const [loading, setLoading] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const [filteredGroups, setFilteredGroups] = useState(groups)
    const [selectedGroup, setSelectedGroup] = useState('')

    useEffect(() => {
        getPeserta()
    }, [selectedGroup])

    const getPeserta = () => {
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        axios.get('/api/materi/peserta/' + id, {
            params: { group: selectedGroup },
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setLoading(false)
            setPesertas(res.data.data)
        }).catch((err) => {
            setLoading(false)
            notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
        })
    }

    const movePeserta = (e) => {
        e.preventDefault()
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        axios.put('/api/mov-siswa/', values, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setLoading(false)
            notif(<NotifMessage text={`${values.nama} berhasil dipindahkan`} />)
            getPeserta()
            closeAndReset()
        }).catch((err) => {
            setLoading(false)
            if (err.response) {
                if (err.response.request.status === 422)
                    notif(getErrors(err.response.data.errors))
                else
                    notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
            }
            else
                notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
            closeAndReset()
        })
    }

    const openMoveForm = (id, muridId, nama, kelompok) => {
        const fg = groups.filter(g => { return g.id != (kelompok ? kelompok : 'umum') })
        setFilteredGroups(fg)
        setValues({ dataId: id, muridId: muridId, nama: nama, mapelId: id, currentGroup: kelompok, group: '' })
        setFormOpen(true)
    }

    const closeAndReset = e => {
        setValues({ ...fields })
        setFormOpen(false)
    }

    const delPeserta = (id, nama) => {
        if (!confirm(`hapus ${nama}`)) return
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        axios.delete('/api/rem-siswa/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setLoading(false)
            notif(<NotifMessage text={`${nama} telah dikeluarkan`} />)
            getPeserta()
        }).catch((err) => {
            setLoading(false)
            notif(<NotifMessage text={JSON.stringify(err.message)} success={false} />)
        })
    }

    return (
        <React.Fragment>
            <div className="card" style={{ width: "100%", borderTop: 'none' }}>
                <div className="card-body row p-1">
                    <div className="col-12">
                        <div className="pb-1">
                            <strong className="card-title">Peserta</strong>
                            <a className="float-right" href={'api/excel-mapel-siswa/' + id}>
                                <button className="btn btn-sm btn-outline-primary"><i className="fas fa-file-excel"></i> Download</button>
                            </a>
                        </div>
                        <SelectForm formW="2" label="kelas / kelompok" options={groups} placeholder="-" value={selectedGroup} handleChange={e => { setSelectedGroup(e.currentTarget.value) }} />
                        <strong>{pesertas.length} Siswa</strong>
                        <ul className="list-group">
                            {pesertas.map(peserta => {
                                return <li className="list-group-item p-1 pl-2" key={peserta.id}>
                                    <b>{peserta.user.name}</b> (uid: {peserta.user_id})
                                    {<button className="ml-2 btn btn-xxs btn-outline-info" value={peserta.id} onClick={() => openMoveForm(peserta.id, peserta.user.id, peserta.user.name, peserta.group)}><i className="fas fa-users"></i></button>}
                                    {<button className="ml-2 btn btn-xxs btn-outline-danger" value={peserta.id} onClick={() => delPeserta(peserta.id, peserta.user.name)}><i className="fas fa-times"></i></button>}
                                    <br />
                                    {selectedGroup == "" && <small>kelompok {peserta.group ? peserta.group : 'umum'}</small>}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {formOpen &&
                <div className="modal" style={{ display: 'block', overflow: 'auto', }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form onSubmit={movePeserta} id="form-1"></form>
                            <div className="modal-body">
                                <button type="button" className="close" onClick={closeAndReset}>
                                    <span>&times;</span>
                                </button>
                                <div className="row">
                                    <div className="col-12 pr-0">
                                        Pindahkan {values.nama} <br />
                                        <small>{values.currentGroup}</small>
                                        <hr />
                                        <SelectForm labelW="3" name="group" value={values.group} form="form-1" label="kelompok / kelas" placeholder="pilih" options={filteredGroups} handleChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" form="form-1" className="btn btn-sm btn-success" disabled={loading}>
                                    <i className="fas fa-plus"></i>
                                    {' '}Pindahkan{' '}
                                    {loading && <i className="fas fa-spinner fa-spin"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}


        </React.Fragment>
    )
}

export default withRouter(MapelPesertaCard)