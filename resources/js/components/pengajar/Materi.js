import React from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import MateriList from './MateriList'
import MateriSearch from './MateriSearch'
import MateriForm from './MateriForm'
import MateriDelete from './MateriDelete'

import { PageTitle, Alert } from '../html/Template'

import Pagination from './../html/Pagination'

class Materi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: this.props.match.path === "/materi/mapel/:materiId/:dirId" ? 'add' : '',
            mapelId: this.props.match.params.materiId ? this.props.match.params.materiId : '',
            dirId: this.props.match.params.dirId ? this.props.match.params.dirId : '',
            id: '',
            materis: [],
            pageData: { pageCount: 0 },
            page: 1,

            fetch: false,
            message: '',
        }
    }

    componentDidMount() {
        this.loadMateri()
    }

    loadMateri = (values = {}) => {
        console.log(values);
        const token = Token.getToken()
        if (!token) this.props.logOut('materi', true)
        axios.get('/api/materi?page=' + this.state.page, {
            params: values,
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            this.setState({
                materis: res.data.data,
                pageData: {
                    from: res.data.meta.from,
                    total: res.data.meta.total,
                    per_page: res.data.meta.per_page,
                    pageCount: Math.ceil(res.data.meta.total / res.data.meta.per_page),
                },
                fetch: false
            })
        })
    }

    toggle = (e) => {
        if (e) {
            e.preventDefault()
            const action = e.currentTarget.value.split('-')[0]
            const id = e.currentTarget.value.split('-')[1]
            const message = e.currentTarget.value.split('-')[2]
            if (this.state.mapelId !== '') {
                console.log('back')
                this.props.history.goBack()
            }
            this.setState({ action: action, id: id, message: message ? message : '' })
        }
        else this.setState({ action: '', id: '', message: '' })
    }

    notif = (n, reloadData = false) => {
        this.setState({ action: '', id: '', message: n }, () => {
            if (reloadData) this.loadMateri()
        })
    }

    remAlert = () => { this.setState({ message: '' }); }

    handlePageClick = data => {
        this.setState({ fetch: true, page: data.selected + 1 }, () => {
            this.loadMateri()
        });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    title="Materi Pelajaran"
                    navs={[
                        { show: this.state.action === '', clickHandle: this.toggle, action: "add" },
                        { show: this.state.action !== '', clickHandle: this.toggle, action: "", icon: "fa-arrow-left" },
                    ]}
                />
                {this.state.message !== '' && <Alert message={this.state.message} clickHandle={this.remAlert} />}
                <hr className="mt-1 mb-2" />
                <div className="row">
                    <div className="col-12">
                        {(() => {
                            switch (this.state.action) {
                                case "": return (
                                    <React.Fragment>
                                        <MateriSearch loadData={this.loadMateri} />
                                        <div className="mb-2"></div>
                                        <MateriList
                                            materis={this.state.materis}
                                            from={this.state.pageData.from}
                                            loading={this.state.fetch}
                                            toggle={this.toggle}
                                            handlePageClick={this.handlePageClick}
                                            page={this.state.page}
                                        />
                                        <div className="mb-2"></div>
                                        <Pagination
                                            pageData={this.state.pageData}
                                            page={this.state.page}
                                            handlePageClick={this.handlePageClick}
                                        />
                                    </React.Fragment>
                                )
                                case "add": return (
                                    <MateriForm
                                        tipe={'add'}
                                        toggle={this.toggle}
                                        mapelId={this.state.mapelId}
                                        dirId={this.state.dirId}
                                    />
                                )
                                case "update": return (
                                    <MateriForm
                                        tipe={'update'}
                                        id={this.state.id}
                                        toggle={this.toggle}
                                    />
                                )
                                case "delete": return (
                                    <MateriDelete
                                        id={this.state.id}
                                        notif={this.notif}
                                    />
                                )
                                default: return '';
                            }
                        })()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

import { hot } from 'react-hot-loader/root'
export default module.hot ? hot(Materi) : Materi
