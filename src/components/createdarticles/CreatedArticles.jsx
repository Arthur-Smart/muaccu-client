import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './createdarticles.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 150,
    editable: true,
    renderCell:(params) => {
    return(
        <div className='avatar-container'>
            <img src={require('../../assets/team.jpg')} alt=''/>
        </div>
    )
   }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 300,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Date Published',
    width: 110,
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
  { id: 1, title: 'Snow', description: 'Iam the champion of this city and I dont joke', createdAt: 35 },
  { id: 2, title: 'Lannister', description: 'Iam the champion of this city and I dont joke', createdAt: 42 },
  { id: 3, title: 'Lannister', description: 'Iam the champion of this city and I dont joke', createdAt: 45 },
  { id: 4, title: 'Stark', description: 'Iam the champion of this city and I dont joke', createdAt: 16 },
  { id: 5, title: 'Targaryen', description: 'Iam the champion of this city and I dont joke', createdAt: null },
  { id: 6, title: 'Melisandre', description: 'Iam the champion of this city and I dont joke', createdAt: 150 },
  { id: 7, title: 'Clifford', description: 'Iam the champion of this city and I dont joke', createdAt: 44 },
  { id: 8, title: 'Frances', description: 'Iam the champion of this city and I dont joke', createdAt: 36 },
  { id: 9, title: 'Roxie', description: 'Iam the champion of this city and I dont joke', createdAt: 65 },
];

export default function CreatedArticles() {
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