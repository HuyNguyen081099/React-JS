import { combineReducers } from 'redux'
import { demoReduxReducer } from './demoRedux/reducer'
import { baiTapPhoneReducer } from './baiTapPhone/reducer'
import { baiTapMovieBookingReducer } from './baiTapMovieBooking/slice'

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
    baiTapPhone: baiTapPhoneReducer,

    baiTapMovieBooking: baiTapMovieBookingReducer,
})
