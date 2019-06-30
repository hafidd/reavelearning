import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Token from '../../utils/Token'

import { Loading } from '../html/Template'

const UsersModal = (props) => {
    const { id, setId, toggle } = props
    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = Token.getToken();
        if (!token) setId
        axios.get('/api/mapel-req-list/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            setUsers(res.data.data)
        }).catch(() => setId())

    }, [])

    const submit = (e) => {
        const token = Token.getToken();
        if (!token) setId
        const action = e.target.value
        setLoading(true)
        axios.post('/api/mapel-req-process/', { action: action, selectedUsers: selectedUsers, mapel_id: id }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            const msg = selectedUsers.length + ' berhasil di' + action
            toggle('waiting', '', msg)
        }).catch((e) => setId())
    }

    const handleSelectUser = e => {
        if (e.target.checked) {
            setSelectedUsers([...selectedUsers, e.target.value])
        } else {
            const updated = selectedUsers.filter(user => { if (e.target.value !== user) return user })
            setSelectedUsers(updated)
        }

    }

    return (
        <div className="modal" style={{ display: 'block', overflow: 'auto' }}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <button type="button" className="close" onClick={() => setId()}>
                            <span>&times;</span>
                        </button>
                        <Loading loading={users.length === 0} />
                        <div className="row">
                            {users.map((user, key) =>
                                <div key={key} className="col-md-3 col-6 text-left mt-2">
                                    <img src={`/images/users/${user.user_id}.jpg`} style={{ width: '100%', height: 'auto' }} />
                                    Group: {user.group ? user.group : 'umum'}<br />
                                    <div>
                                        ID: {user.user_id}
                                        <span className="float-right">
                                            <input type="checkbox" value={user.user_id + '|' + user.group} onChange={handleSelectUser} />
                                        </span>
                                    </div>
                                    <b>{user.user.name}</b>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger ml-1"
                            value={'tolak'}
                            onClick={submit}
                            disabled={loading || selectedUsers.length === 0}>
                            Tolak
                            <Loading loading={loading} />
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            value={'terima'}
                            onClick={submit}
                            disabled={loading || selectedUsers.length === 0}>
                            Terima
                            <Loading loading={loading} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UsersModal