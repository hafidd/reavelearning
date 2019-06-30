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
        group: ''
    }
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)
    const [pesertas, setPesertas] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(values)
        getPeserta()
    }, [values])

    const getPeserta = () => {
        if (!token) { notif(<NotifMessage text="mohon login ulang" success={false} />); return }
        setLoading(true)
        axios.get('/api/materi/peserta/' + id, {
            params: { group: values.group },
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

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <React.Fragment>
            <div className="card" style={{ width: "100%", borderTop: 'none' }}>
                <div className="card-body row p-1">
                    <div className="col-12">
                        <div className="pb-1">
                            <strong className="card-title">Peserta</strong>
                        </div>
                        <form onSubmit={submit}>
                            <SelectForm formW="2" name="group" label="kelas / kelompok" options={groups} placeholder="-" value={values.group} handleChange={handleChange} />
                        </form>
                        <strong>{pesertas.length} Peserta</strong>
                        <ul className="list-group">
                            {pesertas.map(peserta => {
                                return <li className="list-group-item p-1 pl-2" key={peserta.id}>
                                    <b>{peserta.user.name}</b> (uid: {peserta.user_id})
                                    <br />
                                    {values.group == "" && <small>kelompok {peserta.group ? peserta.group : 'umum'}</small>}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(MapelPesertaCard)