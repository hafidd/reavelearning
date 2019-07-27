import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../utils/useForm'
import Token from '../../utils/Token'
import { flatToHierarchy } from '../../utils/Array'

import { List } from 'react-content-loader'

import { Loading, NotifMessage } from "../html/Template"
import { RadioForm, TextForm } from "../html/BasicForm"

import MateriList from '../pengajar/MateriList'
import MateriSearch from '../pengajar/MateriSearch'

import FileSaver from 'file-saver';

import Pagination from './../html/Pagination'

const MapelMateriCard = props => {
    const { id, notif, isSiswa = false } = props
    const token = Token.getToken()
    const fields = {
        mapel_id: id,
        type: '1',
        dirName: '',
        parent: '',
        materi: ''
    }

    //data materi
    const [materis, setMateris] = useState([])

    //pilihan materi
    const [materiList, setMateriList] = useState({
        materis: [], pageData: {}, search: {}, page: 1
    })
    const [selectedMateris, setSelectedMateris] = useState([])

    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)
    const [loading, setLoading] = useState(false);

    const [formOpen, setFormOpen] = useState(false)

    useEffect(() => {
        loadMateri()
    }, [])

    useEffect(() => {
        if (!isSiswa) getMateriList()
    }, [materiList.search, materiList.page])

    const loadMateri = () => {
        if (!Token.getToken()) { notif(<NotifMessage text={`mohon login ulang`} success={false} />); return }
        setLoading(true)
        const ep = !isSiswa ? '/api/materi/mapel/' : '/api/materi-siswa/mapel/';
        axios.get(ep + id, {
            params: {},
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            setLoading(false)
            setMateris(flatToHierarchy(res.data.data))
        }).catch((err) => {
            setLoading(false)
            notif(JSON.stringify(err.message))
        })
    }

    const getMateriList = () => {
        if (!Token.getToken()) { notif(<NotifMessage text={`mohon login ulang`} success={false} />); return }
        axios.get('/api/materi?page=' + materiList.page, {
            params: materiList.search,
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            //console.log(res.data)
            setMateriList({
                ...materiList,
                materis: res.data.data,
                pageData: {
                    from: res.data.meta.from,
                    total: res.data.meta.total,
                    per_page: res.data.meta.per_page,
                    pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page),
                },
            })
        }).catch((err) => {
            notif(JSON.stringify(err.message))
        })
    }

    const setSearch = (values = {}) => { setMateriList({ ...materiList, search: values }) }

    function submit() {
        if (!token) {
            notif("mohon login ulang")
            return
        }
        setLoading(true)
        axios.post('/api/add-materi/', { ...values, materis: selectedMateris }, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            notif(<NotifMessage text={`berhasil ditambahkan`} />)
            setLoading(false)
            loadMateri()
            closeAndReset()
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

    const openForm = e => {
        const pid = e.currentTarget.value
        setFormOpen(true)
        setValues(values => ({ ...values, parent: pid }))
    }

    const closeAndReset = () => {
        setFormOpen(false)
        setValues(fields)
        setMateriList({ materis: [], pageData: {}, search: {} })
        setSelectedMateris([])
    }

    const delMateri = (mid, nama) => {
        if (!token) { notif("mohon login ulang"); return }
        if (!confirm(`hapus ${nama}?`)) return
        setLoading(true)
        axios.delete('/api/rem-materi/' + mid, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(() => {
            notif(<NotifMessage text={`${nama} berhasil dihapus`} />)
            setLoading(false)
            loadMateri()
            closeAndReset()
        }).catch((err) => {
            if (err.response) {
                if (err.response.request.status === 422) {
                    notif(<NotifMessage text="Kosongkan direktori terlebih dahulu" success={false} />)
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

    const handleSelectMateri = e => {
        e.persist()
        if (e.target.checked) {
            setSelectedMateris([...selectedMateris, e.target.value])
            console.log([...selectedMateris, e.target.value])
        } else {
            const updated = selectedMateris.filter(mat => { if (e.target.value !== mat) return mat })
            setSelectedMateris(updated)
            console.log(updated)
        }
    }

    const getIcon = (isi) => {
        const ar = JSON.parse(isi)
        if (ar.type == 'text')
            return <i className="fas fa-book"></i>
        else if (ar.type == 'video')
            return <i className="fas fa-video"></i>
        else if (ar.type == 'file')
            return <i className="fas fa-file"></i>
    }

    const getAction = (isi, id) => {
        const ar = JSON.parse(isi)
        if (ar.type == 'text')
            return <button className="btn btn-xxs btn-outline-primary" onClick={() => toMateri(id)}><i className="fas fa-expand"></i></button>
        else if (ar.type == 'video')
            return <button className="btn btn-xxs btn-outline-primary" onClick={() => toMateri(id)}><i className="fas fa-play"></i></button>
        else if (ar.type == 'file')
            return <button className="btn btn-xxs btn-outline-primary" onClick={() => downloadFile('api/get-materi-file-test/file/' + ar.name, ar.name)}><i className="fas fa-download"></i></button>
    }

    function toMateri(materiId) {
        const path = !isSiswa ? `/mapel/${id}/${materiId}` : `/mapel_siswa/${id}/${materiId}`
        props.history.push({
            pathname: path,
            state: {
                isSiswa: isSiswa
            }
        })
    }

    const downloadFile = (link, name) => {
        const token = Token.getToken()
        if (!token) {
            setErrors(['mohon login ulang'])
            return
        }
        axios.get(link, {
            responseType: 'arraybuffer',
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            var blob = new Blob([res.data], { type: res.headers['content-type'] })
            FileSaver.saveAs(blob, name)
        }).catch(() => { console.log('err') })
    }

    const renderMateri = (data = [], root = true, level = 1) => {
        if (data.length === 0 && root) {
            return loading ? <List width={300} height={80} /> : <span><i className="fas fa-exclamation"></i> Belum ada data</span>
        }
        else return (
            <ul className={root ? "list-group" : ''}>
                {data.map((materi) => (
                    <li key={materi.id} className={root ? 'list-group-item p-1' : ''}>
                        {materi.type == 1 && <i className="fas fa-folder"></i>}
                        {materi.type == 2 && getIcon(materi.materi.isi)}
                        {' '}{materi.type == 1 ? materi.nama : materi.materi.judul}{' '}
                        {materi.type == 2 && <span className="mr-2">{getAction(materi.materi.isi, materi.materi.id)}</span>}
                        {!isSiswa &&
                            <span>
                                {(materi.type == 1 && level < 3) && <button className="btn btn-xxs btn-outline-dark mr-1" value={materi.id} onClick={openForm}><i className="fas fa-plus"></i></button>}
                                {<button className="btn btn-xxs btn-outline-danger" value={materi.id} onClick={() => delMateri(materi.id, materi.type == 1 ? materi.nama : materi.materi.judul)}><i className="fas fa-times"></i></button>}
                            </span>
                        }
                        {renderMateri(materi.child, false, (level + 1))}
                    </li>
                ))}
            </ul>
        )
    }

    const handlePageClick = data => {
        setMateriList({ ...materiList, page: data.selected + 1 })
    };

    return (
        <React.Fragment>
            <div className="card" style={{ width: "100%", borderTop: 'none' }}>
                <div className="card-body row p-1">
                    <div className="col-12">
                        <div className="pb-1">
                            <strong className="card-title">Materi</strong>
                            {!isSiswa &&
                                <button className="btn btn-xxs btn-primary ml-1" value={0} onClick={openForm}><i className="fas fa-plus"></i></button>
                            }
                        </div>
                        <ul className="list-group">
                            {renderMateri(materis)}
                        </ul>
                        <hr className="mt-5" />
                    </div>
                </div>
            </div>
            {formOpen && !isSiswa &&
                <div className="modal" style={{ display: 'block', overflow: 'auto', }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit} id="form-1"></form>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <span className="float-left" style={{ width: '80%' }}>
                                            <RadioForm
                                                name="type" handleChange={handleChange} value={values.type}
                                                options={[
                                                    ['1', 'Direktori'],
                                                    ['2', 'Materi']
                                                ]}
                                                labelClass="btn btn-primary btn-sm"
                                                formW="5"
                                                labelW="0"
                                                form="form-1"
                                            />
                                        </span>
                                        <button type="button" className="close" onClick={closeAndReset}>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        {values.type == '1' && <TextForm form="form-1" formW="5" labelW="0" placeholder="Nama Direktori" name="dirName" value={values.dirName} handleChange={handleChange} />}
                                        {values.type == '2' && (
                                            <React.Fragment>
                                                <MateriSearch loadData={setSearch} />
                                                <div className="mb-1"></div>
                                                <MateriList materis={materiList.materis} from={materiList.pageData.from} action="select" select={handleSelectMateri} />
                                                <div className="mb-1"></div>
                                                <Pagination
                                                    pageData={materiList.pageData}
                                                    page={materiList.page}
                                                    handlePageClick={handlePageClick}
                                                />
                                            </React.Fragment>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => {
                                    if (!confirm('Buat materi baru?')) return
                                    props.history.push(`/materi/mapel/${id}/${values.parent}`)
                                }}>
                                    <i className="fas fa-plus"></i> Materi Baru
                                </button>
                                <button type="sumbit" form="form-1" className="btn btn-sm btn-success" disabled={loading}>
                                    <i className="fas fa-plus"></i>
                                    {' '}Tambahkan{' '}
                                    {loading && <i className="fas fa-spinner fa-spin"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}

        </React.Fragment>
    )
};

export default withRouter(MapelMateriCard)

