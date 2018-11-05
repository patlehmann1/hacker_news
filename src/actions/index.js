import axios from 'axios';

const url = `https://hn.algolia.com/api/v1`;

const SET_LOADING = 'SET LOADING';
const SET_NEWS    = 'SET NEWS';
const GET_NEWS    = 'GET NEWS';
const SET_SEARCH  = 'SET SEARCH';

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

const setNews = news => ({
  type: SET_NEWS,
  payload: news
});

const setSearch = (query, results) => ({
  type: SET_SEARCH,
  payload: {
    query,
    results
  }
});

const getNews = query => {
  return (dispatch, getState) => {
    dispatch(setLoading(true));

    // check to see if we've done this search
    const state = getState();
    if (state.news.searches[query]) {
      // if so, return it from the cache
      dispatch(setNews(state.news.searches[query]));
      dispatch(setLoading(false));
      // if not run the http request
    } else {
      axios.get(`${url}/search?query=${query}`)
        .then(({ data }) => {
          dispatch(setNews(data.hits));
          dispatch(setSearch(query, data.hits));
          dispatch(setLoading(false));
        });
    }
  }
}

export {
  SET_LOADING,
  setLoading,

  SET_NEWS,
  setNews,

  GET_NEWS,
  getNews,

  SET_SEARCH,
  setSearch
}
