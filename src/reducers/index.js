import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import RecentSearch from './reducer_search';

const rootReducer = combineReducers({
  news: NewsReducer,
  search: RecentSearch
});

export default rootReducer;
