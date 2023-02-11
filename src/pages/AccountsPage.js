
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AccountTable from "../components/AccountTable";
import Header from "../components/Header";
// import { accountData } from "../data/DummyData";

const headList = [
	"Reference de compte",
	"Nom",
	"Prenom",
	"Email",
	"Actions",
];

function AccountsPage() {
	const [accountData,setAccountData] = useState([]);
	const getData = async () => {
		const { data } = await axios.get(`http://localhost:8089/customers/`);
		setAccountData(data);
	  };
	  useEffect(() => {
		getData();
	  }, []);
	return (
		<div>
			<Header />
			<Container style={{ marginTop: 40 }}>
				<AccountTable headList={headList} bodyList={accountData} />
			</Container>
		</div>
	);
}

export default AccountsPage;
