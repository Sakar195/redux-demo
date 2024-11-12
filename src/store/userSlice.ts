import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  age: number;
  address: string;
}

interface initState {
  user: User[];
}

const initialState: initState = {
  user: [
    {
      id: "1",
      name: "john doe",
      age: 32,
      address: "New york",
    },
    {
      id: "2",
      name: "jane doe",
      age: 32,
      address: "kanchanjunga",
    },
  ],
};

export const courterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push({ id: Date.now(), ...action.payload });
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action) =>{
      const 
    }
  },
});
