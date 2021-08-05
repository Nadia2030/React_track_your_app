import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TaskReducer from './reducers/TaskReducer';

const reducer = combineReducers ({
    Todo: TaskReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState,
    applyMiddleware(...middleware)
);

export default store