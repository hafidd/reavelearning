import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import FileSaver from 'file-saver';


const MateriDelete = (props) => {
    const { id, notif } = props
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
        axios.get('/api/materi/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            let data = res.data.data
            data = { ...data, type: JSON.parse(data.isi).type }
            if (JSON.parse(data.isi).type === "text")
                data = { ...data, isi: JSON.parse(data.isi).isi }
            else if (JSON.parse(data.isi).type === "video" && data.file)
                data = { ...data, desc: JSON.parse(data.isi).desc, fileName: JSON.parse(data.isi).name }
            else if (JSON.parse(data.isi).type === "file" && data.file)
                data = { ...data, fileName: JSON.parse(data.isi).name }
            setData(data)
            setLoading(false)
        }).catch(() => notif('err'))
    }, []);

    function submit() {
        if (!Token.cek()) {
            notif('mohon login ulang')
            return
        }
        if (!confirm('Hapus data?')) return
        setLoading(true)
        axios.delete('/api/materi/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(() => { notif('data berhasil dihapus' , true) })
            .catch(() => {
                setErrors(['terjadi kesalahan, coba beberapa saat lagi'])
                setLoading(false)
            })
    }

    const downloadFile = (file) => {
        const token = Token.getToken()
        if (!token) {
            setErrors(['mohon login ulang'])
            return
        }
        axios.get(data.file, {
            responseType: 'arraybuffer',
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            var blob = new Blob([res.data], { type: res.headers['content-type'] })
            FileSaver.saveAs(blob, data.fileName)
        }).catch(() => notif('file error'))
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
                        <p><b>Type : </b><br />{data.type}</p>
                        <p><b>Kode : </b><br />{data.kode}</p>
                        <p><b>Judul : </b><br />{data.judul}</p>
                        {data.type === "text" && <p><b>Isi : </b><br />{data.isi}</p>}
                        {(data.type !== "text" && data.file) && <button onClick={downloadFile} className="btn btn-sm btn-success"><i className="fas fa-download"></i>{data.fileName}</button>}
                        {data.type === "video" && <p><b>Desc : </b><br />{data.desc}</p>}
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

export default MateriDelete

