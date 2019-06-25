import config from '../config'


const EmailServcice = {
    postEmail(email) {
        return fetch(`${config.REACT_APP_API_BASE}/emails`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(email)
          })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default EmailServcice