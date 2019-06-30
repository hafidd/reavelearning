import React from 'react'

export default function Table(props) {
    const { wrapperClass, tableClass, cols, data = [] } = props
    return (
        <div className={wrapperClass ? wrapperClass : "table-responsive mt-2"}>
            <table className={tableClass ? tableClass : "table table-bordered table-sm"}>
                <thead>
                    <tr>
                        {cols.map((col, key) => (
                            <th key={key}
                                className={col.c ? col.c : "text-center"}
                                width={col.w ? col.w + '%' : "auto"}
                            >{col.t}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => {
                            return (
                                <tr key={d.id}>
                                    <td className="text-center">{no++}</td>
                                    <td className="text-center">{d.kode}</td>
                                    <td>{d.nama}</td>
                                    <td className="text-center">{d.kategori}</td>
                                    <td className="text-center">{d.akses} <span className={'badge ' + (d.status === 'aktif' ? 'badge-success' : 'badge-warning')}>{d.status}</span></td>
                                    <td className="text-center">
                                        <button className="btn btn-xs btn-success mr-1" onClick={() => toggle('update', d.id)}><span className="fas fa-pen"></span></button>
                                        <button className="btn btn-xs btn-warning" onClick={() => toggle('delete', d.id)}><span className="fas fa-trash"></span></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}