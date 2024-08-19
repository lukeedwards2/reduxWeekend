import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feelingRating =(state='', action)=>{
    switch(action.type){
        case 'ADD_FEELING_RATING':
            return action.payload
        default:
            return state
    }
}

const undestandRating =(state='', action)=>{
    switch(action.type){
        case 'ADD_UNDERSTAND_RATING':
            return action.payload
        default:
            return state
    }
}

const supportedRating =(state='', action)=>{
    switch(action.type){
        case 'ADD_SUPPORTED_RATING':
            return action.payload
        default:
            return state
    }
}

const commentsRating =(state='', action)=>{
    switch(action.type){
        case 'ADD_COMMENTS_RATING':
            return action.payload
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        feelingRating,
        undestandRating,
        supportedRating,
        commentsRating,
    }),
    
        applyMiddleware(logger),
)

export default store