import React from 'react'
import Tooltip from "react-simple-tooltip"
import { DefaultImage } from "../html/Template"

const MapelDetailCard = props => {
    const { mapel } = props

    return (
        <div className="card mt-2 ml-" style={{ width: "100%" }}>
            <div className="card-body row p-1">
                <div className="col-md-4 col-lg-3">
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
                </div>
                <div className="col-md-8 col-lg-9">
                    <strong className="card-title">{mapel.nama}</strong>
                    <p className="mb-1"><small>{mapel.pengajar} | kategori: {mapel.kategori}</small></p>
                    <p className="card-text">{mapel.keterangan}</p>
                    <span className="float-right">
                    </span>
                </div>
            </div>

        </div>
    )
};

export default MapelDetailCard

