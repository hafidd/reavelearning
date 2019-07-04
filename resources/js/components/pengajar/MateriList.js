import React, { useState } from 'react'

function MateriList(props) {
    const { materis, from, loading, toggle, action = "default", select } = props
    let no = from | 0
    return (
        <React.Fragment>
            <ul className="list-group">
                {
                    materis.map((materi, key) => {
                        const content = JSON.parse(materi.isi)
                        return <Item materi={materi} key={key} content={content} no={no++} action={action} select={select} toggle={toggle} />
                    })
                }
            </ul>
            {loading && <i className="fas fa-spinner fa-spin"></i>}
        </React.Fragment>
    )
}

const Item = (props) => {
    const { content, materi, no, action, select, toggle } = props
    const [selected, setSelected] = useState(false)

    return (
        <li className="list-group-item p-1" style={{ backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff' }}>
            <b>{no} . </b>
            {content.type === 'file' && <span className="fas fa-file mr-1"></span>}
            {content.type === 'text' && <span className="fas fa-book mr-1"></span>}
            {content.type === 'video' && <span className="fas fa-play-circle mr-1"></span>}
            {materi.kode && `[${materi.kode}]`} {materi.judul}
            <span className="float-right">
                {action === "default" &&
                    <React.Fragment>
                        <button className="btn btn-xs btn-success ml-1"><i className="fas fa-plus"></i></button>
                        <button className="btn btn-xs btn-primary ml-1"><i className="fas fa-expand"></i></button>
                        <button className="btn btn-xs btn-warning ml-1" value={`update-${materi.id}`} onClick={toggle}><i className="fas fa-edit"></i></button>
                        <button className="btn btn-xs btn-danger ml-1" value={`delete-${materi.id}`} onClick={toggle}><i className="fas fa-trash"></i></button>
                    </React.Fragment>
                }
                {action === "select" &&
                    <React.Fragment>
                        <input name="select" className="custom-cb" value={materi.id} type="checkbox" onChange={select} onClick={() => { setSelected(!selected) }} />
                    </React.Fragment>
                }
            </span>
        </li>
    )
}

export default MateriList
