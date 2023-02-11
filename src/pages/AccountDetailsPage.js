import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import TransactionsTable from "../components/TransactionsTable";
import { accountTransactions } from "../data/DummyData";

const headList = [
	"Reference de Transaction",
	"Type",
	"Montant",
	"Date",
	"Description",
];
function AccountDetailsPage() {
	let { accountId } = useParams();
	return (
		<h3>
			<Header />
			<Container style={{ marginTop: 40 }}>
				<TransactionsTable headList={headList} bodyList={accountTransactions} />
			</Container>
		</h3>
	);
}

export default AccountDetailsPage;
