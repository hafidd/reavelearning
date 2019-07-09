import React from 'react'
import Tooltip from "react-simple-tooltip"
import { DefaultImage } from "../html/Template"
import { Link } from 'react-router-dom'

const MapelCard = props => {
    const { mapels, toggleDetail, action } = props
    return (
        <div className="container">
            <div className="row">
                {mapels.map(mapel => <MapelCardItem key={mapel.id} mapel={mapel} toggleDetail={toggleDetail} action={action} />)}
            </div>
        </div>
    )
};

const MapelCardItem = React.memo(props => {
    const { mapel, toggleDetail, action } = props
    return (
        <div className="col-md-3 mb-3 p-1 hover1">
            <div className="card" style={{ width: "100%" }}>
                <div style={{ position: 'relative', textAlign: 'center', padding: 0, height: 150 }}>
                    {mapel.image ?
                        <img src={`images/mapel/${mapel.id}.jpg`} alt="error" style={{ width: '100%', height: '100%' }} />
                        : <DefaultImage text={mapel.nama} />
                    }
                    <div style={{ position: 'absolute', top: 10, left: 8, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color: 'white', paddingLeft: '0.5em', paddingRight: '0.5em' }}>
                        <b>{mapel.kode}</b>
                    </div>
                    <div style={{ position: 'absolute', bottom: 10, right: 8, textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", color: 'white', paddingLeft: '0.5em', paddingRight: '0.5em' }}>
                        <b>{mapel.akses === "private" && <i className="fas fa-lock fa-2x"></i>}</b>
                    </div>
                </div>
                <div className="card-body">
                    <strong className="card-title">{mapel.nama.substring(0, 25)}{mapel.nama.length > 25 && (
                        <Tooltip content={mapel.nama} background="#fff" color="#000" padzding="0">...</Tooltip>
                    )}</strong>
                    <p><small><b>{mapel.pengajar}</b></small></p>
                    <p className="card-text" style={{ height: '3.2em', position: 'relative' }}>
                        {mapel.keterangan && mapel.keterangan.substring(0, 50)}
                        {mapel.keterangan && mapel.keterangan.length > 50 && "..."}
                        {!mapel.keterangan && '-'}
                    </p>
                    <span className="float-right">
                        {action == "joined" && <Link to={`/mapel_siswa/${mapel.id}`} > <button className="btn btn-success btn-sm"><i className="fas fa-expand"></i></button> </Link>}
                        <button value={mapel.id} onClick={toggleDetail} className={`btn btn-primary btn-sm mr-1`}>Detail</button>
                    </span>
                </div>
            </div>
        </div>
    )
})

export default MapelCard

