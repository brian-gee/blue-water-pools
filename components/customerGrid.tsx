import { dbRef } from '../firebase/initFirebase';
import { onValue } from 'firebase/database';
import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  DataGrid,
	GridColDef,
	GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
	GridToolbar
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';


const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const dollarUS = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});




const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', width: 90 },
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
		field: 'invoice',
		headerName: 'Invoice',
		type: 'number',
		width: 110,
		editable: true,
		valueGetter: (params: GridValueGetterParams) =>
			`${dollarUS.format(params.row.invoice)}`,
	},
	// {
	// 	field: 'actions',
	// 	type: 'actions',
	// 	width: 80,
	// 	getActions: (params) => [
	// 		<GridActionsCellItem
	// 			icon={<DeleteIcon />}
	// 			label="Delete"
	// 			onClick={testClick}
	// 		/>,
	// 		<GridActionsCellItem
	// 			icon={<SecurityIcon />}
	// 			label="Toggle Admin"
	// 			showInMenu
	// 		/>,
	// 		<GridActionsCellItem
	// 			icon={<FileCopyIcon />}
	// 			label="Duplicate User"
	// 			showInMenu
	// 		/>,
	// 	],
	// },
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
			<div style={{ height: 670, width: '100%' }}>
				<DataGrid
					columns={columns}
					rows={rows}
					autoPageSize
					components={{ Toolbar: GridToolbar }}
					pagination
					checkboxSelection
					disableSelectionOnClick
					experimentalFeatures={{ newEditingApi: true }}
					className=' bg-gray-900 border-slate-300 border-2'
				/>
			</div>
		</ThemeProvider>
	);
}
