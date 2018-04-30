import { combineReducers } from 'redux';
import { routerReducers } from 'react-router-redux'

import posts from './posts';
import comments from './comments'

const rootReducers = combineReducers({ posts, comments, router: routerReducer })

export default rootReducers;