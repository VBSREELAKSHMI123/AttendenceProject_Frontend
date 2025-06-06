import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        email: "",
        role: "",
        fname: "",
        lname: "",
        user_id: "",
        token: "",
        designation:"",
        isProfileComplete: null
    },
    isAuthenticated: false

}

const loginSlice = createSlice({
    name: "loginState",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            state.user.email = action.payload.email;
            state.user.role = action.payload.role;
            state.user.fname = action.payload.fname;
            state.user.lname = action.payload.lname;
            state.user.user_id = action.payload.user_id;
            state.user.token = action.payload.token;
            state.user.designation = action.payload.designation;
            state.isAuthenticated = true
            state.user.isProfileComplete = action.payload.isProfileComplete
        },
        updateProfilecomplete: (state, action) => {
            state.user.isProfileComplete = action.payload
        },
        logout: (state) => {
            state.user = { email: "", role: "", fname: "", lname: "", user_id: "", token: "",designation:"", isProfileComplete: null }
            state.isAuthenticated = false
        }

    }
})

export const { login, logout, updateProfilecomplete } = loginSlice.actions;
export default loginSlice.reducer;