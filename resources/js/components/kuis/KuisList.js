import React, { useState } from 'react'

function KuisList(props) {
    const { kuises, from, loading, setAction, action = "default", select } = props
    let no = from | 1
    return (
        <React.Fragment>
            <ul className="list-group">
                {
                    kuises.map((kuis, key) => {
                        return <Item kuis={kuis} key={key} no={no++} action={action} select={select} setAction={setAction} />
                    })
                }
                {kuises.length === 0 && <p>Belum ada data kuis</p>}
            </ul>
            {loading && <i className="fas fa-spinner fa-spin"></i>}
        </React.Fragment>
    )
}

const Item = (props) => {
    const { kuis, no, action, select, setAction } = props
    const [selected, setSelected] = useState(false)

    return (
        <li className="list-group-item p-1" style={{ backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff' }}>
            <b>{no} . </b>
            {kuis.kode && <b>[{kuis.kode}]</b>} {kuis.judul}
            <span className="float-right">
                {action === "default" &&
                    <React.Fragment>
                        <button className="btn btn-xs btn-primary ml-1" value={`kuisDetail-${kuis.id}`} onClick={setAction}><i className="fas fa-expand"></i></button>
                        <button className="btn btn-xs btn-warning ml-1" value={`kuisUpdate-${kuis.id}`} onClick={setAction}><i className="fas fa-edit"></i></button>
                        <button className="btn btn-xs btn-danger ml-1" value={`kuisDelete-${kuis.id}`} onClick={setAction}><i className="fas fa-trash"></i></button>
                    </React.Fragment>
                }
                {action === "select" &&
                    <React.Fragment>
                        <input name="select" className="custom-cb" value={kuis.id} type="checkbox" onChange={select} onClick={() => { setSelected(!selected) }} />
                    </React.Fragment>
                }
            </span>
        </li>
    )
}

export default KuisList
