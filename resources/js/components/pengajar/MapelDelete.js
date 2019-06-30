import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

const MapelForm = (props) => {
    const { id, toggle } = props
    const [data, setData] = useState({})
    const [mapel, SetMapel] = useState({})
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {
        if (!Token.cek()) {
            toggle('table')
            return
        }
        setLoading(true)
        axios.get('/api/mapel/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            setData(res.data.data)
            setLoading(false)
        }).catch(() => toggle('table', ''))
    }, []);

    function submit() {
        if (!Token.cek()) {
            toggle('table')
            return
        }
        if (!confirm('Hapus data?')) return
        setLoading(true)
        axios.delete('/api/mapel/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(() => toggle('table', '', 'data berhasil dihapus'))
            .catch(() => {
                setErrors(['terjadi kesalahan, coba beberapa saat lagi'])
                setLoading(false)
            })
    }

    return (
        <div className="row" style={{ padding: '2%' }}>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="float-left"><b>Hapus Data</b></h5>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2%' }} >
                    <div className="col-md-8">
                        <p><b>Nama : </b><br />{data.nama}</p>
                        <p><b>Kategori : </b><br />{data.kategori}</p>
                        <p><b>keterangan : </b><br />{data.keterangan}</p>
                        <button className="btn btn-sm btn-danger" onClick={submit} disabled={loading}>Hapus</button>
                    </div>
                    <div className="col-md-4">
                        <p><b>Materi : </b><br />Belum ada materi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapelForm

