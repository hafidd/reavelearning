import React, { useState, useEffect } from 'react'
import { PilihanGanda, BenarSalah, Isian, Menjodohkan, Essay } from './KuisJawabForm'

const KuisHasilModal = props => {
    const { show, toggle, hasil } = props
    const [tambalan, setTambalan] = useState(1)

    var nomor = 1;
    return (
        <div className="modal" id="modal" style={{ display: show ? 'block' : 'none', overflow: 'auto', }}>
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header row">
                        <div className="col-12">
                            <strong>Hasil</strong>
                            <button type="button" className="close" onClick={toggle}>
                                <span>&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">
                        {hasil === null ? 'Anda belum/tidak mengikuti ujian ini!' :
                            !hasil ? 'Hasil ujian belum diterbitkan' :
                                <div className="row">
                                    <div className="col-12">
                                        Nilai Anda : {hasil.hasil && (parseFloat(hasil.hasil.points) / parseFloat(hasil.hasil.max_points) * 100)}
                                        <hr />
                                        {hasil.hasil && hasil.hasil.details.map(detail => {
                                            const data = detail.soal
                                            const pertanyaan = JSON.parse(data.pertanyaan)
                                            const jawaban = JSON.parse(data.jawaban)

                                            return (
                                                <div className="card mb-2" key={detail.id}>
                                                    <div className={"card-body"}>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <span className="float-left">
                                                                    <b>{nomor++} .</b>
                                                                </span>
                                                                <span className="float-left">
                                                                    {data.type == 1 && <PilihanGanda soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                                                    {data.type == 2 && <BenarSalah soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                                                    {data.type == 3 && <Menjodohkan soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} idkWhy={() => { console.log(tambalan); setTambalan(!tambalan) }} />}
                                                                    {data.type == 4 && <Isian soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                                                    {data.type == 5 && <Essay soalId={data.id} pertanyaan={pertanyaan} jawaban={JSON.parse(detail.jawaban)} kunci={jawaban} setJawaban={() => { return false }} />}
                                                                </span>
                                                                <span className="float-right">
                                                                    {detail.point == detail.max_point ?
                                                                        <i className="fas fa-check text-success fa-2x"></i>
                                                                        : detail.point == 0 ? <i className="fas fa-times text-danger fa-2x"></i>
                                                                            : detail.point == null ? <i className="fas fa-question text-warning fa-2x"></i>
                                                                                : <i className="fas fa-exclamation text-info fa-2x"></i>}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <hr />
                                                                <small className="text-primary">
                                                                    Kunci :  <br />
                                                                    max point: {detail.max_point}
                                                                </small>
                                                                <div className="form-inline float-right">
                                                                    POINT : {detail.point}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>

                        }
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default KuisHasilModal
