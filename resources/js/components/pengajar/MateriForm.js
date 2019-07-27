import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FileSaver from 'file-saver';
import Token from '../../utils/Token'
import useForm from '../../utils/useForm'

import { TextForm, RadioForm, TextAreaForm } from '../html/BasicForm'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MateriForm = (props) => {
    const { tipe, id, toggle, mapelId, dirId } = props
    //console.log(mapelId)
    const fields = {
        id: (tipe === 'update') ? id : 0,
        type: 'text',
    }
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)
    const [fileDownload, setFileDownload] = useState({});
    const [file, setFile] = useState(false);
    const [video, setVideo] = useState(false);


    const [isi, setIsi] = useState('');

    //const [editorState, setEditorState] = React.useState(
    //    EditorState.createEmpty()
    //);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (tipe === 'update') {
            if (!Token.cek()) {
                setErrors(['mohon login ulang'])
                return
            }
            setLoading(true)
            axios.get('/api/materi/' + id, {
                headers: {
                    Authorization: 'Bearer ' + Token.getToken()
                }
            }).then(res => {
                const data = res.data.data
                setValues(values => ({
                    ...values,
                    judul: data.judul,
                    kode: data.kode,
                    type: JSON.parse(data.isi).type,
                }))
                if (JSON.parse(data.isi).type === "video") setValues(values => ({ ...values, desc: JSON.parse(data.isi).desc }))
                if (data.file) {
                    setFileDownload({ link: data.file, name: JSON.parse(data.isi).name })
                }
                if (JSON.parse(data.isi).type === "text") setIsi(JSON.parse(data.isi).isi)
                if (JSON.parse(data.isi).type === "text") console.log(JSON.parse(data.isi).isi)
                setLoading(false)
            }).catch(() => toggle)
        }
        if (mapelId) {
            console.log('kurang load data detail mapel')
        }
    }, []);

    function submit() {
        if (!Token.cek()) {
            setErrors(['mohon login ulang'])
            return
        }
        setLoading(true)
        setSuccess(false)

        let data = {}
        if (values.type === "text") data = { ...values, isi: isi }
        else if (values.type === "file") data = { ...values, file: file ? file : '' }
        else if (values.type === "video") data = { ...values, video: video ? video : '' }

        let formData = new FormData()
        for (let key in data) {
            formData.append(key, data[key])
        }
        if (tipe === "update") formData.append("_method", "put")
        if (mapelId) formData.append("mapelId", mapelId)
        if (dirId) formData.append("parent", dirId)

        axios.post('/api/materi/' + (id ? id : ''), formData, {
            headers: {
                'Content-Type': `multipart/form-data`,
                Authorization: 'Bearer ' + Token.getToken()
            }
        })
            .then(res => {
                if (mapelId !== undefined) {
                    props.history.push({
                        pathname: `/mapel/${mapelId}`,
                        state: {
                            message: 'Materi sukses ditambahkan'
                        }
                    })
                    return
                }
                setLoading(false)
                setSuccess(true)
                if (res.data.data.file) {
                    setFileDownload({ link: res.data.data.file, name: JSON.parse(res.data.data.isi).name })
                }
                setErrors({})
                if (tipe === 'add') setValues({})
            }).catch(err => {
                if (err.response) {
                    if (err.response.request.status === 422) {
                        setErrors(getErrors(err.response.data.errors))
                    } else if (err.response.request.status === 401) {
                        setErrors(['mohon login ulang'])
                    } else {
                        setErrors(['server error'])
                    }
                } else {
                    setErrors(['server error'])
                }
                setLoading(false)
            })
    }

    function errorMessages(err) {
        return (<ul>{err.map((item, key) => <li key={key}>{item}</li>)}</ul>);
    }

    const handleFile = (e) => {
        const uploadedFile = e.target.files[0]
        setFile(uploadedFile)
    }

    const handleVideo = (e) => {
        const uploadedFile = e.target.files[0]
        setVideo(uploadedFile)
    }

    const downloadFile = () => {
        const token = Token.getToken()
        if (!token) {
            setErrors(['mohon login ulang'])
            return
        }
        axios.get(fileDownload.link, {
            responseType: 'arraybuffer',
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            var blob = new Blob([res.data], { type: res.headers['content-type'] })
            FileSaver.saveAs(blob, fileDownload.name)
        }).catch(() => toggle)
    }

    const contentForm = () => {
        if (values.type === 'text') {
            const modules = {
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                    [{ syntax: true }, { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    ['link', 'image'],
                    [{ 'align': [] }],
                    ['clean']
                ],
            };

            const formats = [
                'header',
                'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
                'list', 'bullet', 'indent',
                'link', 'image',
                'align',
            ];
            return (
                <div style={{ height: 320 }}>
                    <ReactQuill
                        value={isi}
                        onChange={(value) => setIsi(value)}
                        style={{ height: 300 }}
                        theme="snow"
                        modules={modules}
                        formats={formats}>
                    </ReactQuill>
                </div>
            )
        } else if (values.type === 'file') {
            return (
                <div>
                    {fileDownload.link ?
                        <button className="btn btn-sm btn-warning mb-1 float-right" type="button" onClick={downloadFile}><i className="fas fa-download"></i> {fileDownload.name}</button>
                        : <span className="mb-1 float-right"><i className="fas fa-exclamation-circle"></i> File tidak ditemukan</span>}
                    <label className="btn btn-sm btn-primary mr-2" style={{}}>
                        Browse <input type="file" accept=".xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,.pdf" onChange={handleFile} style={{ display: 'none' }} />
                    </label>
                    <span>{file ? file.name : 'Pilih File'}</span><br />
                    <small className="form-text text-muted mt-0 mb-1">pdf, doc, docx, xls, xlsx, ppt, pptx, txt, zip, rar, 7z</small>
                </div>
            )
        } else if (values.type === 'video') {
            return (
                <div className="row">
                    <div className="col-12">
                        {fileDownload.link && <button className="btn btn-sm btn-warning mb-1" type="button" onClick={downloadFile}><i className="fas fa-download"></i> {fileDownload.name}</button>}
                    </div>
                    <div className="col-12">
                        <label className="btn btn-sm btn-primary btn-file mb-0 mr-1" style={{}}>
                            Browse <input type="file" accept=".mp4,.avi" onChange={handleVideo} style={{ display: 'none' }} />
                        </label>
                        <span>{video ? video.name : 'Pilih Video'}</span><br />
                        <small className="form-text text-muted mt-0 mb-1">mp4, avi</small>
                        <textarea name="desc" value={values.desc} onChange={handleChange} cols="50" rows="5" placeholder="deskripsi video..."></textarea>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="row" style={{ padding: '2%' }}>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="float-left"><b>{tipe === 'add' ? 'Tambah' : 'Ubah'} Materi {mapelId && ` - Mata pelajaran : ${mapelId}`}</b></h5>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '2%' }} >
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} id="form">
                            {tipe === "add" &&
                                <RadioForm
                                    label="Type" name="type" handleChange={handleChange} value={values.type}
                                    options={[
                                        ['text', 'TEXT'],
                                        ['file', 'FILE'],
                                        ['video', 'VIDEO']
                                    ]}
                                />
                            }
                            <TextForm formW="4" name="kode" label="Kode" placeholder="Kode Materi" handleChange={handleChange} value={values.kode} />
                            <TextForm name="judul" label="Judul" placeholder="Judul Materi" handleChange={handleChange} value={values.judul} />
                            <hr />
                            {values.type === 'text' && <label>Isi Materi</label>}
                            {contentForm()}
                            <hr />
                            <div className="form-group row">
                                <div className="col-md-8">
                                    <button type="submit" className="btn btn-success" disabled={loading}>SIMPAN {loading && <i className="fa fa-spinner fa-spin"></i>} </button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-4">
                        {(errors.constructor === Array && errors.length > 0) && (
                            <div className="bg-warning" style={{ padding: '5%', margin: '5%' }}>
                                {errorMessages(errors)}
                            </div>
                        )}
                        {success && (
                            <div className="bg-success" style={{ padding: '5%', margin: '5%' }}>
                                <p className="lead">Sukses!</p>
                                <p>data berhasil disimpan</p>
                            </div>
                        )}
                        <div className="bg-success" style={{ padding: '5%', margin: '5%', display: 'none' }}>
                            <p className="lead">Keterangan</p>
                            <p><span>20</span> total murid</p>
                            <p><span>20</span> total ujian</p>
                            <p><span>10</span> total materi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

import { withRouter } from 'react-router-dom'
export default withRouter(MateriForm)

