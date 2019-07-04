import React, { useEffect } from 'react'
import useForm from '../../utils/useForm'

function KuisSearch(props) {
    const { setSearch, defaultValues } = props
    const { values, handleChange, setValues } = useForm(submit)
    useEffect(() => {
        if (defaultValues.judul || defaultValues.kode)
            setValues({ ...defaultValues })
    }, [])
    const submit = (e) => {
        e.preventDefault()
        setSearch({ kuis: values })
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
                        <button className="btn btn-warning float-left" style={{ width: '48%', padding: "0.375rem 0.5rem" }} onClick={() => setValues({})}><i className="fas fa-times"></i></button>
                        <button className="btn btn-success float-right" style={{ width: '48%', padding: "0.375rem 0.5rem" }}><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default KuisSearch

