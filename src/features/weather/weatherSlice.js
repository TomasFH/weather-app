import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'cities',
    initialState: [],
    reducers: {
        searchCity: (state, action) => {
            if(state.find(c => c.id === action.payload.id) !== undefined){
                return [...state];
            };
            return [...state, action.payload];
        },
        removeCity: (state, action) => {
            let filteredState = state.filter(c => {
                return c.id !== action.payload
            });
            state = filteredState;
            return state;
        }
    }
});

export const { searchCity, removeCity } = weatherSlice.actions;

export default weatherSlice.reducer;