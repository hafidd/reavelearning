import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import FileSaver from 'file-saver';


const SoalDelete = (props) => {
    const { id, notif, setAction } = props
    const [data, setData] = useState({})
    const [materi, setMateri] = useState({})
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {
        if (!Token.cek()) {
            notif('mohon login ulang')
            return
        }
        setLoading(true)
        axios.get('/api/kuis/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            setData(res.data.data)
            setLoading(false)
        }).catch(() => setAction('', '', true))
    }, []);

    function submit() {
        if (!Token.cek()) {
            notif('mohon login ulang')
            return
        }
        if (!confirm('Hapus data?')) return
        setLoading(true)
        axios.delete('/api/kuis/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(() => { setAction('', { message: 'data berhasil dihapus' }, true) })
            .catch(() => {
                notif('err')
                setLoading(false)
            })
    }

    return (
        <div className="row p2">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="float-left"><b>Hapus Data</b></h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <p><b>Kode : </b><br />{data.kode}</p>
                        <p><b>Judul : </b><br />{data.judul}</p>
                        <p><b>Keterangan : </b><br />{data.keterangan}</p>
                        <br />
                        <button className="btn btn-sm btn-danger mt-1" onClick={submit} disabled={loading}>Hapus</button>
                    </div>
                    <div className="col-md-4">
                        <p>nothing here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoalDelete

