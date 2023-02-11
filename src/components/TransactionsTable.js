import React from "react";
import Table from "react-bootstrap/Table";

function TransactionsTable({ headList, bodyList }) {
	return (
		<Table striped>
			<thead style={{ fontSize: 13 }}>
				<tr>
					{headList.map((item, index) => (
						<th key={index}>{item}</th>
					))}
				</tr>
			</thead>
			<tbody style={{ fontSize: 13 }}>
				{bodyList.map((item, index) => (
					<tr
						key={index}
						style={{
							backgroundColor: item.type == "DEBIT" ? "red" : "transparent",
						}}
					>
						<td>{item.id}</td>
						<td>{item.type}</td>
						<td>{item.amount}</td>
						<td>{item.date}</td>
						<td>{item.description}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default TransactionsTable;
