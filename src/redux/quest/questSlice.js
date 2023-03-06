import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodos,
  deleteTodos,
  setTodosDone,
  updateTodos,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFullfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const initialQuestState = {
  quests: [],
  filter: "",
  isLoading: false,
};

const questSlice = createSlice({
  name: "quest",
  initialState: initialQuestState,
  extraReducers: {
    [fetchTodos.pending]: handlePending,
    [fetchTodos.fulfilled](state, action) {
      handleFullfilled(state);
      state.items = action.payload;
    },
    [fetchTodos.rejected]: handleRejected,
    [addTodos.pending]: handlePending,
    [addTodos.fulfilled](state, action) {
      handleFullfilled(state);
      state.items.push(action.payload);
    },
    [addTodos.rejected]: handleRejected,
    [deleteTodos.pending]: handlePending,
    [deleteTodos.fulfilled](state, action) {
      handleFullfilled(state);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    [deleteTodos.rejected]: handleRejected,
  },
});

export const getQuestById = (state) => console.log(state);
export const getQuests = (state) => state.quest.quests;

export const questReducer = questSlice.reducer;
