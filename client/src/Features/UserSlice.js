import { createSlice } from "@reduxjs/toolkit";
import {UsersData}  from "../ExampleData";

const initialState = { value: UsersData }; //list of user is an object with empty array as initial value
const userSlice=createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        addUser:(state, action)=>{
            state.value.push(action.payload);

        },

        deleteUsers:(state,action)=>{
            state.value=state.value.filter((user)=>user.email !== action.payload)
        },
        updateUsers:(state,action)=>{},

    },

});
export const {addUser , deleteUsers , updateUsers} = userSlice.actions; //export the functio
export default userSlice.reducer;