import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'
import useForm from '../../utils/useForm'
import { flatToHierarchy } from '../../utils/Array'

import { Loading, NotifMessage } from "../html/Template"
import { RadioForm, TextForm } from "../html/BasicForm"

import SoalList from '../soal/SoalList'
import SoalSearch from '../soal/SoalSearch'

import PengaturanKuisModal from './PengaturanKuisModal'

import { List } from 'react-content-loader'

const KuisDetail = (props) => {
    const { id, notif, setAction } = props
    const [data, setData] = useState({})
    const [soals, setSoals] = useState([])
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    const [formOpen, setFormOpen] = useState(false)
    const [formType, setFormType] = useState("")

    const token = Token.getToken();
    //pilihan soal
    const [soalList, setSoalList] = useState({
        soals: [], pageData: {}, search: {}
    })
    const [selectedSoals, setSelectedSoals] = useState([])

    const fields = {
        kuis_id: id,
        type: '1',
        dirName: '',
        parent: '',
        soal: ''
    }
    const { values, setValues, getErrors, handleChange, handleSubmit } = useForm(submit, fields)

    const [dataId, setDataId] = useState(0)

    useEffect(() => {
        loadDetail()
        loadSoal()
    }, []);

    useEffect(() => {
        getSoalList()
    }, [soalList.search]);

    const loadDetail = () => {
        if (!Token.cek()) { notif('mohon login ulang'); return }
        setLoading(true)
        axios.get('/api/kuis/' + id, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then(res => {
            setData(res.data.data)
            setLoading(false)
        }).catch(() => setAction('', '', true))
    }

    const loadSoal = () => {
        if (!Token.getToken()) { notif(<NotifMessage text={`mohon login ulang`} success={false} />); return }
        setLoading(true)
        axios.get('/api/soal/kuis/' + id, {
            params: {},
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            setLoading(false)
            setSoals(flatToHierarchy(res.data.data))
        }).catch((err) => {
            setLoading(false)
            notif(JSON.stringify(err.message))
        })
    }

    const setSearch = (values = {}) => { setSoalList({ ...soalList, search: values }) }

    const getSoalList = () => {
        if (!Token.getToken()) { notif(<NotifMessage text={`mohon login ulang`} success={false} />); return }
        axios.get('/api/soal/', {
            params: soalList.search.soal,
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            setSoalList({ ...soalList, soals: res.data.data })
        }).catch((err) => {
            notif(JSON.stringify(err.message))
        })
    }

    const openForm = (e, type = "") => {
        const pid = e.currentTarget.value
        setFormType(type)
        setFormOpen(true)
        setDataId(pid)
        setValues(values => ({ ...values, parent: pid }))
    }

    const closeAndReset = () => {
        setFormOpen(false)
        setValues(fields)
        setSoalList({ soals: [], pageData: {}, search: {} })
        setSelectedSoals([])
    }

    const delSoal = (mid, nama) => {
        if (!token) { notif("mohon login ulang"); return }
        if (!confirm(`hapus ${nama}?`)) return
        setLoading(true)
        axios.delete('/api/rem-soal/' + mid, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(() => {
            notif(<NotifMessage text={`${nama} berhasil dihapus`} />)
            setLoading(false)
            loadSoal()
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

    const handleSelectSoal = e => {
        e.persist()
        if (e.target.checked) {
            setSelectedSoals([...selectedSoals, e.target.value])
            console.log([...selectedSoals, e.target.value])
        } else {
            const updated = selectedSoals.filter(mat => { if (e.target.value !== mat) return mat })
            setSelectedSoals(updated)
            console.log(updated)
        }
    }

    function submit() {
        if (!token) { notif("mohon login ulang"); return }
        setLoading(true)
        axios.post('/api/add-soal/', { ...values, soals: selectedSoals }, {
            headers: {
                Authorization: 'Bearer ' + Token.getToken()
            }
        }).then((res) => {
            notif(<NotifMessage text={`berhasil ditambahkan`} />)
            setLoading(false)
            loadSoal()
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


    const types = { 1: "Pilihan ganda", 2: "Benar/Salah", 3: "Menjodohkan", 4: "Isian singkat", 5: "Essay" }
    var totalPoint = 0
    const renderItem = (data = [], root = true, level = 1, enableSetting = false) => {
        if (data.length === 0 && root) {
            return loading ? <List width={300} height={80} /> : <span><i className="fas fa-exclamation"></i> Belum ada data</span>
        }
        else return (
            <ul className={root ? "list-group" : ''}>
                {data.map((dt, i) => {
                    const settings = JSON.parse(dt.settings)
                    const enableChildSetting = dt.type == 1 ? settings.bobotPerSoal : false
                    if ((dt.type == 2 && enableSetting) || (root && !enableChildSetting)) {
                        totalPoint += parseInt(settings.bobot)
                    }
                    return (
                        <li key={dt.id} className={root ? 'list-group-item p-1' : ''}>
                            {dt.type == 1 && <i className="fas fa-folder"></i>}
                            {' '}{dt.type == 1 ? dt.nama : <span>[{types[dt.soal.type]}] {JSON.parse(dt.soal.pertanyaan).q}</span>}{' '}
                            <span>
                                {(dt.type == 1 && level < 2) && <button className="btn btn-xxs btn-outline-dark mr-1" value={dt.id} onClick={openForm}><i className="fas fa-plus"></i></button>}
                                {(dt.type == 1) && <button className="btn btn-xxs btn-outline-primary mr-1" value={dt.id} onClick={(e) => openForm(e, "pengaturan")}><i className="fas fa-wrench"></i></button>}
                                {(dt.type == 2 && enableSetting) && <button className="btn btn-xxs btn-outline-primary mr-1" value={dt.id} onClick={(e) => openForm(e, "pengaturan")}><i className="fas fa-wrench"></i></button>}
                                {<button className="btn btn-xxs btn-outline-danger" value={dt.id} onClick={() => delSoal(dt.id, dt.type == 1 ? dt.nama : JSON.parse(dt.soal.pertanyaan).q)}><i className="fas fa-times"></i></button>}
                            </span>
                            {root && !enableChildSetting && <span className="float-right"><strong>{settings.bobot | 0}</strong></span>}
                            {(dt.type == 2 && enableSetting) && <span className="float-right"><strong>{settings.bobot | 0}</strong></span>}
                            {renderItem(dt.child, false, (level + 1), enableChildSetting)}
                        </li>
                    )
                })}
            </ul>
        )
    }



    return (
        <React.Fragment>

            <div className="row p2">
                <div className="col-md-12">
                    <div className="row card">
                        <div className="col-md-12 card-body pb-0">
                            <h5><b>{data.kode && `[${data.kode}]`} {data.judul}</b></h5>
                            <p>{data.keterangan}</p>
                        </div>
                    </div>
                    <div className="row mt-2 card">
                        <div className="col-md-12 card-body">
                            <div className="pb-1">
                                <strong>Daftar Soal/Pertanyaan</strong>
                                <button className="btn btn-xxs btn-primary ml-1" value={0} onClick={openForm}><i className="fas fa-plus"></i></button>
                            </div>
                            <ul className="list-group">
                                {renderItem(soals)}
                            </ul>
                            <span className="float-right"><strong>Total : {totalPoint}</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            {formOpen && formType !== "pengaturan" &&
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
                                                    ['2', 'Soal']
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
                                                <SoalSearch setSearch={setSearch} defaultValues={{}} />
                                                <div className="mb-1"></div>
                                                <SoalList soals={soalList.soals} from={soalList.pageData.from} loading={loading} showType={soalList.search.type ? false : true} action="select" select={handleSelectSoal} />
                                            </React.Fragment>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => {
                                    if (!confirm('Buat soal baru?')) return
                                    props.history.push(`/soal/kuis/${id}/${values.parent}`)
                                }}>
                                    <i className="fas fa-plus"></i> Soal Baru
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

            {formOpen && formType === "pengaturan" && <PengaturanKuisModal id={dataId} closeAndReset={closeAndReset} loadSoal={loadSoal} setNotif={notif} />}

        </React.Fragment>
    )
}

export default KuisDetail

