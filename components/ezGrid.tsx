import * as React from 'react';
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
    field: 'lastName',
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
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'invoice',
    headerName: 'Invoice',
    type: 'number',
    width: 110,
    editable: true,
  },
];

export default function EzGrid() {
  const [rows, setRows] = useState([]);
	useEffect(() => {
		onValue(dbRef, (snapshot) => {
			setRows(snapshot.val());
		});
	}, []);

  return (
    <>
    {console.log(rows)}
    </>
    // <ThemeProvider theme={darkTheme}>
    // <Box sx={{ height: 635, width: '100%' }}>
    //   <DataGrid
    //     columns={columns}
    //     rows={rows}
    //     pageSize={10}
    //     rowsPerPageOptions={[5]}
    //     checkboxSelection
    //     disableSelectionOnClick
    //     experimentalFeatures={{ newEditingApi: true }}
    //     className=' bg-gray-900 border-slate-300 border-2'
    //   />
    //   {console.log(rows)}
    // </Box>
    // </ThemeProvider>
  );
}