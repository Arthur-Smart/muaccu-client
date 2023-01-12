import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'memberName',
    headerName: 'Member name',
    width: 250,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Member email',
    width: 250,
    editable: true,
  },
   {
    field: 'phone',
    headerName: 'Member phone',
    width: 150,
    editable: true,
  },
  {
    field: 'year',
    headerName: 'Year of study',
    type: 'number',
    width: 150,
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
  { id: 1, memberName: 'Snow', email: 'Jon', phone: '0742068914', year:'4.2' },
  { id: 2, memberName: 'Lannister', email: 'Cersei', phone: '0742068914', year:'4.2' },
  { id: 3, memberName: 'Lannister', email: 'Jaime', phone: '0742068914', year:'4.2' },
  { id: 4, memberName: 'Stark', email: 'Arya', phone: '0742068914', year:'4.2' },
  { id: 5, memberName: 'Targaryen', email: 'Daenerys', phone: '0742068914', year:'4.2' },
  { id: 6, memberName: 'Melisandre', email: null, phone: '0742068914', year:'4.2' },
  { id: 7, memberName: 'Clifford', email: 'Ferrara', phone: '0742068914', year:'4.2' },
  { id: 8, memberName: 'Frances', email: 'Rossini', phone: '0742068914', year:'4.2' },
  { id: 9, memberName: 'Roxie', email: 'Harvey', phone: '0742068914', year:'4.2' },
];

export default function RegisteredMembers() {
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