
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CustomerTable from "../components/CustomerTable";
import Header from "../components/Header";
// import { customerData } from "../data/DummyData";

const headList = [
	"Reference de compte",
	"Nom",
	"Prenom",
	"Email",
	"Actions",
];

function CustomersPage() {
	const [customerData,setCustomerData] = useState([]);
	const getData = async () => {
		const { data } = await axios.get(`http://localhost:8089/customers/`);
		setCustomerData(data);
	  };
	  useEffect(() => {
		getData();
	  }, []);
	return (
		<div>
			<Header />
			<Container style={{ marginTop: 40 }}>
				<CustomerTable headList={headList} bodyList={customerData} />
			</Container>
		</div>
	);
}

export default CustomersPage;
