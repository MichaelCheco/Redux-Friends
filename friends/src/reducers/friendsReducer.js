import { FETCHING_FRIENDS, FRIENDS_RECEIVED, FRIENDS_ERR} from "../actions"

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
        return {...state, fetchingFriends: true}
        case FRIENDS_RECEIVED:
        return {...state, friends: [...state.friends, ...action.payload ], fetchingFriends: false}
        case FRIENDS_ERR:
        return {...state, error: action.payload}
        default:
        return state
    }
}

