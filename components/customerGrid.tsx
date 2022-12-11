import { dbRef } from '../firebase/initFirebase';
import { onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'first_name',
		headerName: 'First name',
		width: 150,
		editable: true,
	},
	{
		field: 'last_name',
		headerName: 'Last name',
		width: 150,
		editable: true,
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 150,
		editable: true,
	},
	{
		field: 'address',
		headerName: 'Address',
		width: 150,
		editable: true,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 160,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.first_name || ''} ${params.row.last_name || ''}`,
	},
	{
		field: 'invoice',
		headerName: 'Invoice',
		type: 'number',
		width: 110,
		editable: true,
	},
];


const data = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function CustomerGrid() {
	const [rows, setRows] = useState([]);
	useEffect(() => {
		onValue(dbRef, (snapshot) => {
			setRows(snapshot.val());
		});
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
		<Box sx={{ height: 635, width: '100%' }}>
		  <DataGrid
		    columns={columns}
		    rows={rows}
		    pageSize={10}
		    rowsPerPageOptions={[5]}
		    checkboxSelection
		    disableSelectionOnClick
		    experimentalFeatures={{ newEditingApi: true }}
		    className=' bg-gray-900 border-slate-300 border-2'
		  />
		  {console.log(rows)}
		</Box>
		</ThemeProvider>
	);
}
