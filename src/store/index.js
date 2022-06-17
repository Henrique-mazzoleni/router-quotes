import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  quotesList: [
    {
      id: "q1",
      text: "Fumar faz bem",
      author: "Sebastiao",
      created_at: new Date(1990, 1, 8).toString(),
      comments: [
        {
          id: "q1c1",
          text: "é...",
        },
        {
          id: "q1c2",
          text: "vdd.",
        },
      ],
    },
    {
      id: "q2",
      text: "Iaoéai",
      author: "Seu Zézinho",
      created_at: new Date(1991, 1, 4).toString(),
      comments: [
        {
          id: "q2c1",
          text: "que?",
        },
        {
          id: "q2c2",
          text: "qq ce ta falando?",
        },
      ],
    },
  ],
};

const quoteSlice = createSlice({
  name: "quoteSlice",
  initialState,
  reducers: {
    addQuote(state, action) {
      state.quotesList.push(action.payload);
    },
    addComment(state, action) {
      const quote = state.quotesList.find(
        (quoteItem) => quoteItem.id === action.payload.quoteId
      );
      quote.comments.unshift(action.payload.comment);
    },
  },
});

const store = configureStore({
  reducer: quoteSlice.reducer,
});

export const quotesActions = quoteSlice.actions;
export default store;
