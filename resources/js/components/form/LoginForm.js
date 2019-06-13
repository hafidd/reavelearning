import React from 'react'

export default function LoginForm(props) {
    const { submitForm, handleChange, email, password, disabled } = props
    return (
        <form onSubmit={submitForm}>
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="email" placeholder="Email" name="email" value={email || ''} onChange={handleChange} className="form-control" disabled={disabled} />
            </div>
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" placeholder="Password" name="password" value={password || ''} onChange={handleChange} className="form-control" disabled={disabled} />
            </div>
            <div className="row align-items-center remember">
                <input type="checkbox" />Remember Me
			</div>
            <div className="form-group">
                <button className="btn float-right login_btn" disabled={disabled}>{disabled && <span className="fa fa-spinner fa-pulse"></span>} Log In</button>
            </div>
        </form>
    )
}