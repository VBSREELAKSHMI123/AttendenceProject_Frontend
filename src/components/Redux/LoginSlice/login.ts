import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    user:{
        email:"",
        role:"",
        user_name:"",
        user_id:"",
        token:""
    },
    isAuthenticated:false
    
}

const loginSlice = createSlice({
    name:"loginState",
    initialState,
    reducers:{
         login:(state,action)=>{
            state.user.email = action.payload.email;
            state.user.role = action.payload.role;
            state.user.user_name = action.payload.user_name;
            state.user.user_id = action.payload.user_id;
            state.isAuthenticated=true
         },
         logout:(state)=>{
            state.user = {email:"",role:"",user_name:"",user_id:"",token:""}
            state.isAuthenticated=false
         }
         
    }
})

export const { login,logout } = loginSlice.actions;
export default loginSlice.reducer;