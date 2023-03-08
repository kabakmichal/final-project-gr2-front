import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000/api/";
// axios.defaults.baseURL = "http://localhost:3000/api/";

export const fetchTodos = createAsyncThunk(
  "quest/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/todos");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTodos = createAsyncThunk(
  "quest/addTodos",
  async (todoData, thunkAPI) => {
    try {
      const response = await axios.post("/todos", todoData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  "quest/deleteTodos",
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${todoId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setTodosDone = createAsyncThunk(
  "quest/setTodosDone",
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todoId}/finished`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTodos = createAsyncThunk(
  "quest/updateTodos",
  async (todoId, thunkAPI) => {
    try {
      const response = await axios.put(`/todos/${todoId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
