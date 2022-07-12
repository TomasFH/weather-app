import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'cities',
    initialState: [],
    reducers: {
        searchCity: (state, action) => {
            console.log(action.payload);
            if(state.find(c => c.id === action.payload.id) !== undefined){
                console.log("Ya existe esa ciudad dentro del arreglo y no se agregó.");
                return [...state];
            };
            console.log("Agregando nueva ciudad a la lista.")
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