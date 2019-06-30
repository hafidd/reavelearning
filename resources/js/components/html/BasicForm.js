import React from 'react'

function TextForm(props) {
    const { type, name, placeholder, handleChange, value, required, label, labelW, formW, formtext, form } = props
    return (
        <div className="form-group row">
            <label className={"col-md-" + (labelW || 2) + " col-form-label"}>{label}</label>
            <div className={"col-md-" + (formW || 6)}>
                <input form={form} type={type || 'text'} className="form-control" name={name} placeholder={placeholder} onChange={handleChange} value={value || ''} required={required} />
                <small className="form-text text-muted">{formtext}</small>
            </div>
        </div>
    )
}

function SelectForm(props) {
    const { name, placeholder, options, handleChange, value, required, label, labelW, formW } = props
    return (
        <div className="form-group row">
            <label className={"col-md-" + (labelW || 2) + " col-form-label"}>{label}</label>
            <div className={"col-md-" + (formW || 4)}>
                <select className="custom-select" name={name} onChange={handleChange} value={value || ''} required={required} >
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map(option => <option key={option.id} value={option.id}>{option.nama}</option>)}
                </select>
            </div>
        </div>
    )
}

function RadioForm(props) {
    const { name, options, handleChange, value, required, label, labelW, formW, form, labelClass = "" } = props
    return (
        <div className="form-group row">
            <label className={"col-md-" + (labelW || 2) + " col-form-label"}>{label}</label>
            <div className={"col-md-" + (formW || 4)} style={{ marginTop: "0.4rem" }}>
                {options.map(option => {
                    const labelC = option[2] ? option[2] : labelClass;
                    return (
                        <div className="form-check form-check-inline" key={option[0]}>
                            <label className={`form-check-label ${labelC}`}>
                                <input form={form} className="form-check-input" type="radio" name={name} onChange={handleChange} value={option[0]} checked={value === option[0]} required={required} /> {option[1]}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


function TextAreaForm(props) {
    const { name, handleChange, value, required, label, labelW, formW } = props
    return (
        <div className="form-group row">
            <label className={"col-md-" + (labelW || 2) + " col-form-label"}>{label}</label>
            <div className={"col-md-" + (formW || 4)}>
                <textarea className="form-control" name={name} onChange={handleChange} value={value || ''} required={required} ></textarea>
            </div>
        </div>
    )
}

export {
    TextForm,
    SelectForm,
    RadioForm,
    TextAreaForm,
}