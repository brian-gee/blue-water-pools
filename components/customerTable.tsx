import { dbRef } from '../firebase/initFirebase';
import { onValue } from 'firebase/database';
import { useState, useEffect, useMemo } from 'react';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const dollarUS = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export default function CustomerTable() {
	const [customers, setCustomers] = useState([]);
	const columnDefs = [
		{ field: 'first_name', header: 'First',sortable: true },
		{ field: 'last_name', header: 'Last' },
		{ field: 'email', header: 'Email' },
		{ field: 'address', header: 'Address' },
		{ field: 'invoice', header: 'Invoice' },
	];

	const dynamicColumns = columnDefs.map((col, i) => {
		return <Column key={col.field} field={col.field} header={col.header} />;
	});

	useEffect(() => {
		onValue(dbRef, (snapshot) => {
			setCustomers(snapshot.val());
		});
	}, []);

	return (
		<>
			<div className="flex justify-center">
				<DataTable
					value={customers}
					responsiveLayout="scroll"
					stripedRows
					showGridlines
					size='large'
				>
					{dynamicColumns}
				</DataTable>
			</div>
		</>
	);
}
