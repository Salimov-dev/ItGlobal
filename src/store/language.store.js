import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    entities: "Ru",
  },
  reducers: {
    languageReceived: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { reducer: languageReducer, actions } = languageSlice;
const { languageReceived } = actions;

export const getLanguage = () => (state) => state.language.entities;

export default languageReducer;
