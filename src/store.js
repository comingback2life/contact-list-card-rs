const { configureStore } = require('@reduxjs/toolkit');
import { setUserContacts } from './components/main-page/contactSlice';

export const store = configureStore({
	reducer: {
		userContacts: setUserContacts,
	},
});
