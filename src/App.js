import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorNotFound from './pages/404';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="*" element={<ErrorNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
