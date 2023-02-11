import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function AccountTable({ headList, bodyList }) {
	return (
		<Table striped>
			<thead>
				<tr>
					{headList.map((item, index) => (
						<th key={index}>{item}</th>
					))}
				</tr>
			</thead>
			<tbody>

				{bodyList.map((item, index) => (
					<tr key={index}>
						<td>{item.id}</td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.email}</td>
						<td>
							<Button variant="primary">
								<Link
									style={{ textDecoration: "none", color: "white" }}
									to={`/accounts/${item.id}`}
								>
									Details
								</Link>
							</Button>
							<Button variant="warning">Update</Button>
							<Button variant="danger" >
								<Link
									style={{ textDecoration: "none", color: "white" }}
									to={`/accounts/${item.id}`}
								>
									Remove
								</Link>
							</Button>

						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default AccountTable;
