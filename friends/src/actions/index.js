import axios from "axios";
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIENDS_ERR = 'FRIENDS_ERR'
const getFriends = () => {
    const promise = axios.get('http://localhost:5000')
    return dispatch => {
        dispatch({type: FETCHING_FRIENDS})
        promise
        .then(res => {
            dispatch({type: FRIENDS_RECEIVED, payload: res.data.friends})
        })
        .catch(err => {
            dispatch({type: FRIENDS_ERR, payload: err})
        })
    }
}

export default getFriends;