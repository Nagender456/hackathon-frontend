// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import * as api from '../../api/axios';

// const initialState = {
// 	isLoggedIn: false,
// 	userName: ''
// }

// export const userRegister = createAsyncThunk('user/register', async (userDetails) => {
// 	try {
// 		const { data } = await api.userRegister(userDetails);
// 		return data;
// 	} catch(err) {
// 		console.log(err?.response);
// 	}
// })

// // export const userLogin = createAsyncThunk('user/login', async (userDetails) => {
// // 	try {
// // 		const { data } = await api.userLogin(userDetails);
// // 		return data;
// // 	} catch(err) {
// // 		console.log(err?.response);
// // 	}
// // })

// export const userLogout = createAsyncThunk('user/logout', async () => {
// 	try {
// 		const { data } = await api.userLogout();
// 		return data;
// 	} catch(err) {
// 		console.log(err?.message);
// 	}
// })

// export const userRefreshToken = createAsyncThunk('user/refreshToken', async () => {
// 	try {
// 		const { data } = await api.userRefreshToken();
// 		return data;
// 	} catch(err) {
// 		console.log(err?.response);
// 	}
// })

// export const userSlice = createSlice({
// 	name: 'user',
// 	initialState,
// 	reducers: {
// 	},
// 	// extraReducers(builder) {
// 	// 	builder
// 	// 		.addCase(userRegister.fulfilled, (state, action) => {
// 	// 			if (action.payload) {
// 	// 				console.log('Registered');
// 	// 				console.log(action.payload);
// 	// 			}
// 	// 		})
// 	// 		.addCase(userLogin.fulfilled, (state, action) => {
// 	// 			if (action.payload) {
// 	// 				console.log('Logged in');
// 	// 				console.log(action.payload);
// 	// 				localStorage.setItem('access_token', action?.payload?.accessToken || '');
// 	// 				// state.accessToken = action?.payload?.accessToken || '';
// 	// 				state.isLoggedIn = true;
// 	// 			}
// 	// 		})
// 	// 		.addCase(userRefreshToken.fulfilled, (state, action) => {
// 	// 			if (action.payload) {
// 	// 				console.log('Refreshed Token');
// 	// 				console.log(action.payload);
// 	// 				state.accessToken = action.payload;
// 	// 			}
// 	// 		})
// 	// }
// })

// export const selectIsLogin = (state) => state.user.isLoggedIn;

// export const selectAccessToken = (state) => state.user.accessToken;

// export const { } = userSlice.actions;

// export default userSlice.reducer;