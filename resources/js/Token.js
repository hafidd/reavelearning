import jwtDecode from 'jwt-decode'

export default class Token {
    static cek() {
        const st = localStorage.getItem('token')
        if (st !== null) {
            const token = JSON.parse(st).token
            return jwtDecode(token).exp > Date.now() / 1000
        }
        return false
    }

    static setToken(token) {
        const data = { token: token }
        localStorage["token"] = JSON.stringify(data);
    }

    static getToken(token) {
        return JSON.parse(localStorage.getItem('token')).token
    }

    static getRole() {
        if (this.cek()) {
            return jwtDecode(JSON.parse(localStorage.getItem('token')).token).role
        }
        return 0
    }

    static getUser() {
        if (this.cek()) {
            return jwtDecode(JSON.parse(localStorage.getItem('token')).token)
        }
        return false
    }

    static del() {
        localStorage.removeItem('token')
    }
}