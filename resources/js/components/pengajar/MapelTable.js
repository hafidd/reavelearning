import React from 'react'
import { Link } from 'react-router-dom'

function MapelTable(props) {
    const { mapels, from, loading, toggle, waiting = false, setId = "" } = props
    let no = from
    return (
        <React.Fragment>
            <div className="table-responsive mt-2">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th className="text-center" width="5%">No</th>
                            <th className="text-center" width="10%">Kode</th>
                            <th className="text-center" width="auto">Nama</th>
                            <th className="text-center" width="15%">Kategori</th>
                            {!waiting && (
                                <React.Fragment>
                                    <th className="text-center" width="14%">status</th>
                                    <th className="text-center" width="10%"></th>
                                </React.Fragment>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mapels.map(mapel => {
                                return (
                                    <tr key={mapel.id}>
                                        <td className="text-center">{no++}</td>
                                        <td className="text-center">{mapel.kode}</td>
                                        <td>
                                            {waiting && <React.Fragment> <button className="btn btn-sm btn-primary" value={mapel.id} onClick={setId}>{mapel.waitings_count | 0}</button>{mapel.nama}</React.Fragment>}
                                            {!waiting && <Link to={`/mapel/${mapel.id}`}>{mapel.nama}</Link>}
                                        </td>
                                        <td className="text-center">{mapel.kategori}</td>
                                        {!waiting && (
                                            <React.Fragment>
                                                <td className="text-center">{mapel.akses} <span className={'badge ' + (mapel.status === 'aktif' ? 'badge-success' : 'badge-warning')}>{mapel.status}</span></td>
                                                <td className="text-center">
                                                    <React.Fragment>
                                                        <button className="btn btn-xs btn-success mr-1" onClick={() => toggle('update', mapel.id)}><span className="fas fa-pen"></span></button>
                                                        <button className="btn btn-xs btn-warning" onClick={() => toggle('delete', mapel.id)}><span className="fas fa-trash"></span></button>
                                                    </React.Fragment>
                                                </td>
                                            </React.Fragment>
                                        )}
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

