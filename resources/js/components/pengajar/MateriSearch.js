import React from 'react'
import useForm from '../../utils/useForm'

function MateriSearch(props) {
    const { loadData } = props
    const { values, handleChange, handleSubmit, setValues } = useForm(submit)
    const submit = (e) => {
        e.preventDefault()
        loadData(values)
    }
    return (
        <form onSubmit={submit}>
            <div className="container d-flex h-100 flex-column">
                <div className="flex-grow-1 mb-1"></div>
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-1">
                        <input className="form-control" placeholder="judul" name="judul" value={values.judul || ''} onChange={handleChange} />
                    </div>
                    <div className="col-md-2 mb-1">
                        <input className="form-control" placeholder="kode" name="kode" value={values.kode || ''} onChange={handleChange} />
                    </div>
                    <div className="col-md-2 mb-1">
                        <select className="custom-select" name="type" onChange={handleChange} value={values.type || ''} >
                            <option value="">= Pilih Jenis =</option>
                            <option value="text"> TEKS </option>
                            <option value="file"> FILE </option>
                            <option value="video"> VIDEO </option>
                        </select>
                    </div>
                    <div className="col-md-2 mb-1">
                        <button className="btn btn-warning float-left" style={{ width: '48%', padding: "0.375rem 0.5rem" }} onClick={() => setValues({})}><i className="fas fa-times"></i></button>
                        <button className="btn btn-success float-right" style={{ width: '48%', padding: "0.375rem 0.5rem" }}><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default MateriSearch

