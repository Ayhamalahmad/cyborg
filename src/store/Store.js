import { configureStore } from '@reduxjs/toolkit'
import RecordDataSlice from './Slices/RecordDataSlice';
const store =configureStore({
    reducer:{
        RecordDataSlice:RecordDataSlice,
    }
})
export default store;