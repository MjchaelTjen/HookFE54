

import { combineReducers, createStore } from 'redux'


const rootReducer = combineReducers({
    // nơi định nghĩa các reducer trong hệ thống
});

export const store = createStore(rootReducer);