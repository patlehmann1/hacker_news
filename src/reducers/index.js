import { combineReducers } from 'redux';

import { SET_NEWS, SET_LOADING, SET_SEARCH } from '../actions';

const newsReducer = (state = { loading: false, news: [], searches: {} }, action) => {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, news: action.payload };

    case SET_SEARCH:
      return { ...state, searches: { ...state.searches, [action.payload.query]: action.payload.results } };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default: return state
  }
}

const rootReducer = combineReducers({ news: newsReducer });

export default rootReducer;