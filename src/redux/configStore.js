

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { QuanLyPhimReducer } from './reducer/QuanLyPhimReducer'

// Cài đặt middleware redux thunk
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    // nơi định nghĩa các reducer trong hệ thống
    QuanLyPhimReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));