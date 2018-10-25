import axios from "axios";
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_ERR = 'FRIENDS_ERR';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends')
    return dispatch => {
        dispatch({type: FETCHING_FRIENDS})
        promise
        .then(({data}) => {
            console.log('response', data)
            dispatch({type: FRIENDS_RECEIVED, payload: data})
        })
        .catch(err => {
            dispatch({type: FRIENDS_ERR, payload: err})
        })
    }
}

