import React from 'react'

function PageTitle(props) {
    const { title = 'Judul Halaman', navs = [] } = props
    return (
        <div className="row mt-2 mb-0">
            <div className="col-12">
                <h2 className="float-left"><b>{title}</b></h2>
                {
                    navs.map((n, key) => {
                        if (n.show)
                            return <button key={key} value={n.action} onClick={n.clickHandle} className={`btn ${n.className ? n.className : 'btn-primary'} float-right ml-1`}><span className={`fas ${n.icon ? n.icon : 'fa-plus'}`}></span> <span>{n.text || ''}</span></button>
                    })
                }
            </div>
        </div>
    )
}

function Alert(props) {
    const { message, type, clickHandle, html = false } = props
    return (
        <div className={`alert alert-${type ? type : 'info'}`} style={{ overflow: 'hidden' }} role="alert">
            <span className="float-left">
                {html ? <span dangerouslySetInnerHTML={{ __html: message }}></span> : message}
            </span>
            <button className="btn btn-xs float-right" onClick={() => clickHandle()}><i className="fas fa-times"></i></button>
        </div>
    )
}

function Loading(props) {
    return props.loading ? <span className="col-12 text-center"><i className="fas fa-spinner fa-spin"></i> {props.text ? props.text : 'Loading...'}</span> : ''
}

function DefaultImage(props) {
    const { text = "", w, h } = props
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return (
        <div style={{
            width: w ? w : '100%', height: h ? h : 150,
            backgroundColor: `rgb(${r}, ${g}, ${b})`, color: 'white',
            textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            textAlign: 'middle', fontSize: 60,
            paddingTop: 30, textTransform: 'uppercase'
        }}><b>{text.substring(0, 1)} {text.substring(text.length - 1, text.length)}</b></div>
    )
}

function NotifMessage(props) {
    const { text, success = true } = props
    return <span><i className={`fas ${!success ? 'fa-exclamation text-danger' : 'fa-check text-success'}`}></i> {text}</span>
}

function ModalWarpper(props) {
    return (
        <div className="modal" style={{ display: 'block', overflow: 'auto', }}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export {
    PageTitle,
    Alert,
    Loading,
    DefaultImage,
    NotifMessage
}