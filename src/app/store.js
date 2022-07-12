import { configureStore } from '@reduxjs/toolkit';
import weatherSliceReducer from "../features/weather/weatherSlice";

const store = configureStore({
    reducer: {
        ciudades: weatherSliceReducer
    },
})

export default store;