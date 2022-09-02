const { configureStore } = require('@reduxjs/toolkit');
import { userContactReducer } from './components/main-page/contactSlice';

export const store = configureStore({
	reducer: {
		userContacts: userContactReducer,
	},
});
