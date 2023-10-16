import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { v4 as uuidv4 } from "uuid";

export interface TaskListState {
  list: TaskItemState[];
}

export interface TaskItemState {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  category: string;
  createdAt: Date;
}

const initialState: TaskListState = {
  list: [],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        title: string;
        dueDate: string;
        category: string;
      }>
    ) => {
      const item: TaskItemState = {
        // random id
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
        createdAt: new Date(),
        dueDate: action.payload.dueDate,
        category: action.payload.category,
      };
      state.list.push(item);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      const item = state.list.find((item) => item.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
    updateItemTitle: (
      state,
      action: PayloadAction<{
        id: string;
        title?: string;
        dueDate?: string;
        category?: string;
      }>
    ) => {
      const item = state.list.find((item) => item.id === action.payload.id);
      if (item && action.payload.title) {
        item.title = action.payload.title;
      }
      if (item && action.payload.dueDate) {
        item.dueDate = action.payload.dueDate;
      }
      if (item && action.payload.category) {
        item.category = action.payload.category;
      }
    },
  },
});

export const { addItem, removeItem, toggleItem, updateItemTitle } =
  taskListSlice.actions;

export const taskListItem = (state: RootState) => state.list;
export default taskListSlice.reducer;
