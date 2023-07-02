class Auth {
    constructor(url) {
        this._url = url;
    };

    _checkResponse(res) {
        // if (res.ok) {
        //     return res.json();
        // }

        // console.log('message', res);
        return res.json()
    };

    register(data) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": data.name,
                "email": data.email,
                "password": data.password
            })
        })
            .then((res) => this._checkResponse(res))
            .catch(e => console.log(`${e}`))
    }

    login(data) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": data.email,
                "password": data.password
            })
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res)
                }
                return res.json();
            })
            .catch(e => console.log('Error', e))
    }

    updateCurrentProfile(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
            .then((res) => this._checkResponse(res))
            .catch(e => e);
    };

    getCurrentProfile(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(res => this._checkResponse(res))
            .then(data => data)
    }

}

const auth = new Auth('https://api.kemrankrm-mesto.nomoredomains.work');
// const auth = new Auth('http://localhost:3000');
export default auth;
