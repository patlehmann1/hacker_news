import { FETCH_NEWS } from '../actions/index.js';

export default function(state = [], action) {
    console.log('Action recieved', action);

    if (action.type === FETCH_NEWS) {
        return action.payload.data.hits;
    } 
        return state;
}