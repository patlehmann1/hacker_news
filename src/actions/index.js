import axios from 'axios';

const ROOT_URL = `https://hn.algolia.com/api/v1/`;

export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(query) {
    const url = `${ROOT_URL}search?query=${query}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_NEWS,
        payload: request
    };
};