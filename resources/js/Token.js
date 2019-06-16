import jwtDecode from 'jwt-decode'

export default class Token {
    static cek() {
        try {
            const token = jwtDecode(JSON.parse(localStorage.getItem('token')))
            return token.exp > Date.now() / 1000
        } catch (e) {
            return false
        }
    }

    static setToken(token) {
        localStorage["token"] = JSON.stringify(token);
    }

    static getToken() {
        if (this.cek())
            return JSON.parse(localStorage.getItem('token'))
        return false
    }

    static getRole() {
        if (this.cek()) {
            return jwtDecode(JSON.parse(localStorage.getItem('token'))).role
        }
        return 0
    }

    static setUser(user) {
        localStorage["user"] = JSON.stringify(user);
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    static del() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}