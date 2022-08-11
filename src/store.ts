import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'test',
    initialState: 0,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
})


export default configureStore({
    reducer: {
        posts: slice.reducer,
    },
});