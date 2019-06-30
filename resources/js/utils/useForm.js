import { useState } from 'react';

const useForm = (callback, fields = {}) => {
    const [values, setValues] = useState(fields);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback();
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    function getErrors(msg = []) {
        let errMsg = []
        errMsg = Object.keys(msg).map((key) => {
            return msg[key].map(item => {
                return item;
            })
        })
        return errMsg
    }

    return {
        handleChange,
        handleSubmit,
        setValues,
        values,
        getErrors,
    }
};

export default useForm;