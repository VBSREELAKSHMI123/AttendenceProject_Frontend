import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { privateRequest } from '../apis/requsetMethods';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'fname', headerName: 'Employee Name', width: 130 },
  { field: '_id', headerName: 'Employee ID', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 },
  { field: 'designation', headerName: 'Designation', width: 130 },
  { field: 'mode', headerName: 'Mode', width: 90 },
  { field: 'type', headerName: 'Type', width: 90 },
  { field: 'action', headerName: 'Action', width: 100 },
];

const EmpList = () => {
  const [employees, setEmployees] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const [totalRows, setTotalRows] = useState(0);

  const fetchEmp = async () => {
    try {
      const { page, pageSize } = paginationModel;
      const response = await privateRequest.get(`/api/employee/viewemp?page=${page + 1}&limit=${pageSize}`);
      console.log('API Response:', response.data);
      setEmployees(response.data.data);
      setTotalRows(response.data.empCount);
    } catch (error) {
      console.error('Error fetching Employees:', error);
    }
  };

  console.log(employees);


  useEffect(() => {
    fetchEmp();
  }, [paginationModel.page, paginationModel.pageSize]);

  const navigate = useNavigate();

  return (
    <div >
      <div className='flex justify-end'>

        <button
          className=' bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50'
          onClick={() => navigate('/addemp')}>
          Add New Employee
        </button>
      </div>
      <div className='mt-10'>

        <Paper sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={employees}
            columns={columns}
            pagination
            rowCount={totalRows}
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            getRowId={(row) => row._id}
          />
        </Paper>
      </div>

    </div>
  );
};

export default EmpList;
