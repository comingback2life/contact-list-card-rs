import userContactSlice from './components/main-page/contactSlice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
	reducer: {
		userContacts: userContactSlice,
	},
});
