import  { FETCH_POSTS, FETCH_POST } from '../actions/index'
// all post and single post in initial state
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {

        case FETCH_POST:
        // keep the existing state but replace and post in there by fetching new post from API
            return { ...state, post: action.payload.data }

        case FETCH_POSTS:
        // take whatever current state we have and add on 'all' the action.payload.data = api response
            return { ...state, all: action.payload.data };

        default:
            return state;
    }
}