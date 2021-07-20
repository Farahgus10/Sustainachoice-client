import config from '../config'


const ResultsService = {
    getAllResults() {
        return fetch(`${config.REACT_APP_API_BASE}/api/results`)
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default ResultsService;
