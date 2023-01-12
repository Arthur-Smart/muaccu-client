import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'Person name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Person Email',
    width: 250,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Person phone',
    width: 150,
    editable: true,
  },
  {
    field: 'subject',
    headerName: 'Appointment subject',
    width: 300,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete member',
    sortable: false,
    width: 200,
    renderCell:(params) => {
    return(
        <button className='flex items-center justify-center'><i className="fa-solid fa-trash ml-10 text-red-400"></i></button>
    )
   }
  },
];

const rows = [
  { id: 1, username: 'Snow', email: 'Jon', phone: '0742985736', subject:'How to deal will depression' },
  { id: 2, username: 'Lannister', email: 'Cersei', phone: '0742985736', subject:'How to deal will depression' },
  { id: 3, username: 'Lannister', email: 'Jaime', phone: '0742985736', subject:'How to deal will depression' },
  { id: 4, username: 'Stark', email: 'Arya', phone: '0742985736', subject:'How to deal will depression' },
  { id: 5, username: 'Targaryen', email: 'Daenerys', phone: '0742985736', subject:'How to deal will depression' },
  { id: 6, username: 'Melisandre', email: null, phone: '0742985736', subject:'How to deal will depression' },
  { id: 7, username: 'Clifford', email: 'Ferrara', phone: '0742985736', subject:'How to deal will depression' },
  { id: 8, username: 'Frances', email: 'Rossini', phone: '0742985736', subject:'How to deal will depression' },
  { id: 9, username: 'Roxie', email: 'Harvey', phone: '0742985736', subject:'How to deal will depression' },
];

export default function AppointmentsMade() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}