import React from 'react'
import useForm from './../../hooks/useForm'

const MapelSearch = (props) => {
    const { kategori, loadData } = props
    const { values, handleChange, handleSubmit, setValues } = useForm(() => loadData(values))
    return (
        <form onSubmit={handleSubmit} id="form-search">
            <div className="row">
                <div className="col-md-3">
                    <input className="form-control" placeholder="nama" name="nama" value={values.nama || ''} onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <input className="form-control" placeholder="kode" name="kode" value={values.kode || ''} onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <select className="custom-select" name="kategori_id" onChange={handleChange} value={values.kategori_id || ''} >
                        <option value="">= Pilih Kategori =</option>
                        {kategori.map(k => <option key={k.id} value={k.id}>{k.nama}</option>)}
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="custom-select" name="status" onChange={handleChange} value={values.status || ''} >
                        <option value="">= Status =</option>
                        <option value="aktif">Aktif</option>
                        <option value="nonaktif">Non aktif</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="custom-select" name="akses" onChange={handleChange} value={values.akses || ''} >
                        <option value="">= Akses =</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-warning float-left" style={{ width: '48%' }} onClick={() => setValues({})}><i className="fas fa-times"></i></button>
                    <button className="btn btn-success float-right" style={{ width: '48%' }}><i className="fas fa-search"></i></button>
                </div>
            </div>
        </form>
    )
}

export default MapelSearch