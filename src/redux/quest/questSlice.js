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

// const questSlice = createSlice({
//   name: "quest",
//   initialState: initialQuestState,
//   extraReducers: {
//     [fetchTodos.pending]: handlePending,
//     [fetchTodos.fulfilled](state, action) {
//       handleFullfilled(state);
//       state.items = action.payload;
//     },
//     [fetchTodos.rejected]: handleRejected,
//     [addTodos.pending]: handlePending,
//     [addTodos.fulfilled](state, action) {
//       handleFullfilled(state);
//       state.items.push(action.payload);
//     },
//     [addTodos.rejected]: handleRejected,
//     [deleteTodos.pending]: handlePending,
//     [deleteTodos.fulfilled](state, action) {
//       handleFullfilled(state);
//       state.items = state.items.filter((item) => item.id !== action.payload.id);
//     },
//     [deleteTodos.rejected]: handleRejected,
//   },
// });

const questSlice = createSlice({
  name: "quest",
  initialState: initialQuestState,
  reducers: {
    handlePending: (state) => {
      state.status = "loading";
    },
    handleFulfilled: (state) => {
      state.status = "succeeded";
    },
    handleRejected: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getQuestById = (state) => console.log(state);
export const getQuests = (state) => state.quest.quests;

export const questReducer = questSlice.reducer;
