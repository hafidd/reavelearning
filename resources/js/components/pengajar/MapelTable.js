import React from 'react'

function MapelTable(props) {
    const { mapels, from, loading, toggle } = props
    let no = from
    return (
        <React.Fragment>
            <div className="table-responsive mt-2">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th className="text-center" width="5%">No</th>
                            <th className="text-center" width="10%">Kode</th>
                            <th className="text-center" width="46%">Nama</th>
                            <th className="text-center" width="15%">Kategori</th>
                            <th className="text-center" width="14%">status</th>
                            <th className="text-center" width="10%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mapels.map(mapel => {
                                return (
                                    <tr key={mapel.id}>
                                        <td className="text-center">{no++}</td>
                                        <td className="text-center">{mapel.kode}</td>
                                        <td>{mapel.nama}</td>
                                        <td className="text-center">{mapel.kategori}</td>
                                        <td className="text-center">{mapel.akses} <span className={'badge ' + (mapel.status === 'aktif' ? 'badge-success' : 'badge-warning')}>{mapel.status}</span></td>
                                        <td className="text-center">
                                            <button className="btn btn-xs btn-success mr-1" onClick={() => toggle('update', mapel.id)}><span className="fas fa-pen"></span></button>
                                            <button className="btn btn-xs btn-warning" onClick={() => toggle('delete', mapel.id)}><span className="fas fa-trash"></span></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {loading && <i className="fas fa-spinner fa-spin"></i>}
        </React.Fragment>
    )
}

export default MapelTable

