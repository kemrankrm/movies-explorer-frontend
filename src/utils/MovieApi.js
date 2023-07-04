export class MovieApi {
    constructor(url) {
        this.url = url;
    }

    getMovies() {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => {
                return res;
            })
    }

}
