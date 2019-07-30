import React, { useState } from 'react'

function SoalList(props) {
    const { soals, from, loading, setAction, action = "default", select, showType } = props
    let no = from | 0
    const jenis = { 1: 'pilihan ganda', 2: 'benar/salah', 3: 'menjodohkan', 4: 'isian singkat', 5: 'essay' }

    return (
        <React.Fragment>
            <ul className="list-group">
                {
                    soals.map((soal, key) => {
                        soal.jenis = jenis[soal.type]
                        return <Item soal={soal} key={key} no={no++} action={action} select={select} setAction={setAction} showType={showType} />
                    })
                }
                {soals.length === 0 && <p>Belum ada data soal</p>}
            </ul>
            {loading && <i className="fas fa-spinner fa-spin"></i>}
        </React.Fragment>
    )
}

const Item = (props) => {
    const { soal, no, action, select, setAction, showType } = props
    const [selected, setSelected] = useState(false)

    return (
        <li className="list-group-item p-1" style={{ backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff' }}>
            <b>{no} . </b>
            {showType && `[${soal.jenis}]`} {soal.kode && <b>[{soal.kode}]</b>} {JSON.parse(soal.pertanyaan).q}
            <span className="float-right">
                {action === "default" &&
                    <React.Fragment>
                        <button className="btn btn-xs btn-warning ml-1" value={`soalUpdate-${soal.id}`} onClick={setAction}><i className="fas fa-edit"></i></button>
                        <button style={{display: 'none'}} className="btn btn-xs btn-danger ml-1" value={`soalDelete-${soal.id}`} onClick={setAction}><i className="fas fa-trash"></i></button>
                    </React.Fragment>
                }
                {action === "select" &&
                    <React.Fragment>
                        <input name="select" className="custom-cb" value={soal.id} type="checkbox" onChange={select} onClick={() => { setSelected(!selected) }} />
                    </React.Fragment>
                }
            </span>
        </li>
    )
}

export default SoalList
