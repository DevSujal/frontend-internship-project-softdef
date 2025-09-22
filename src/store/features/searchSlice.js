import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: 0,
  maxPrice: 9999999,
  color: "all",
  sortBy: "name",
};

const temp = { ...initialState };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setMinPrice(state, action) {
      state.minPrice = action.payload.value;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload.value;
    },
    setColor(state, action) {
      state.color = action.payload.color;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload.sortBy;
    },
    clearState(state, action) {
      state = { ...temp };
    },
  },
});

export const { setColor, setMaxPrice, setMinPrice, setSortBy, clearState } =
  searchSlice.actions;

const searchReducer = searchSlice.reducer;

export default searchReducer;
