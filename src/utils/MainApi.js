import {baseUrl} from "./constants";

export class MainApi {
    constructor(url) {
        this._baseUrl = url;
    }

    saveMovie(data, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: "HUY EBANIY",
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `${baseUrl}${data.image.url}`,
                trailerLink: data.trailerLink,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                thumbnail: "www.dodod.com",
                movieId: data.id
            }),
        }).then((res) => {
            return res;
        })
            .catch(e => console.log(e));
    }

    getMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .catch(e => console.log(e))
    }

    removeMovie(id, token) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
            }),
        }).then((res) => {
            return res;
        })
            .catch(e => console.log(e));
    }
}
