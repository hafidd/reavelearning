import React from 'react'
import axios from 'axios'

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            type: 'siswa',
            error: ''
        }
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) { this.setState({ [e.target.name]: e.target.value }) }

    submitForm(e) {
        e.preventDefault()
        this.setState({ error: '' })
        //cek
        if (this.state.name == '' || this.state.email == '' || this.state.password == '' || this.state.type == '') {
            this.setState({ error: 'mohon lengkapi data!' })
            return
        }
        if (this.state.password != this.state.password2) {
            this.setState({ error: 'konfirmasi password salah!' })
            console.log(this.state.password, this.state.password2)
            return
        }
        axios.post('/api/user/register', this.state)
            .then(response => {
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                    type: 'siswa',
                    error: response.data
                })
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 422) {
                    if (err.response.data.errors.email) this.setState({ error: 'email salah/sudah digunakan' })
                    else this.setState({ error: 'err' })
                } else {
                    this.setState({ error: 'err' })
                }
            })
    }

    render() {
        return (
            <div className="d-flex justify-content-center h-100">
                <div className="card card-login">
                    <div className="card-header card-login-header">
                        <h3 className="float-left">Register</h3>
                        <button onClick={() => this.props.formChange('')} className="card-close-btn float-right">{'x'}</button>
                    </div>
                    <div className="card-body">
                        {this.state.error !== '' && <p className="form-error">{this.state.error}</p>}
                        <form onSubmit={this.submitForm}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" placeholder="Nama Lengkap" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" placeholder="Ulangi Password" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-book"></i></span>
                                </div>
                                <div className="form-control">
                                    <input type="radio" name="type" value="siswa" checked={this.state.type === 'siswa'} onChange={this.handleChange} /> <b className="mr-4">Siswa</b>
                                    <input type="radio" name="type" value="pengajar" checked={this.state.type === 'pengajar'} onChange={this.handleChange} /> <b>Pengajar</b>
                                </div>
                            </div>
                            {/** 
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
					            </div>
                                */}
                            <div className="form-group">
                                <button className="btn float-right login_btn">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer card-login-footer">
                        <div className="d-flex justify-content-center links">
                            Sudah punya akun?<a href="#" onClick={() => this.props.formChange('login')}>Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
