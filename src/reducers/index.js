import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  // we replace state after we create new reducer_posts.js
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
