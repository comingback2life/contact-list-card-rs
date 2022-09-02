import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userContacts: [],
}; //the initial state for the users

const userContactSlice = createSlice({
	name: 'contactSlice',
	initialState,
	reducers: {
		setUserContacts: (state, { payload }) => {
			state.userContacts = payload; //payload is destructured from action
		},
	},
});

const { reducer, actions } = userContactSlice;

export const { setUserContacts } = actions;

export default reducer;
