import config from '../config'
import TokenService from './Token-Service'

const CommentsService = {
    getAllComments() {
        return fetch(`${config.REACT_APP_API_BASE}/comments`)
            .then(res => {
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            })
    },
    postComment(text, location_id, user_id ) {
        return fetch(`${config.REACT_APP_API_BASE}/comments`, {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'authorization':`bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(text, location_id, user_id)
        })
            .then(res => {
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            })
    },
    updateComent(text, commment_id) {
        return fetch(`${config.REACT_APP_API_BASE}/comments/${commment_id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json',
                'authorization':`bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(text)
        })
            .then(res => {
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            })
    },
    // deleteComment(comment_id) {
    //     return fetch(`${config.REACT_APP_API_BASE}/comments/${comment_id}`, {

    //     })
    // }
}

export default CommentsService