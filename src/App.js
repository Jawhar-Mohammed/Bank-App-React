import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountsPage from "./pages/AccountsPage";
import CustomersPage from "./pages/CustomersPage";

import AccountDetailsPage from "./pages/AccountDetailsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/accounts"  element={<AccountsPage />} />
				<Route path="/customers"  element={<CustomersPage />} />
				<Route path="/accounts/:accountId" element={<AccountDetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
