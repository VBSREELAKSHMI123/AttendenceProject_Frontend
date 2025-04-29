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
  const [openModal,setOpenModal] = useState(false)
  const [selectDepartment,setSelectDepartment] = useState<string[]>([])
  const [selectMode,setSelectMode] = useState('')
  const [filterApplied,setFilterApplied] = useState(false)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const [totalRows, setTotalRows] = useState(0);

  const fetchEmp = async () => {
    try {
      const { page, pageSize } = paginationModel;
      let queryParams = `page=${page+1}&limit=${pageSize}`
      if (filterApplied) {
      
      if (selectDepartment.length>0) {
        queryParams+=`&department=${selectDepartment.join(',')}`
      }
      if (selectMode) {
        queryParams+=`&mode=${selectMode}`
      }
    }

    const endpoint = filterApplied ? `api/employee/searchemp?${queryParams}` : `api/employee/viewemp?${queryParams}`
      const response = await privateRequest.get(endpoint);
      console.log('API Response:', response.data);
      setEmployees(response.data.data);
      setTotalRows(response.data.empCount);
    } catch (error) {
      console.error('Error fetching Employees:', error);
    }
  };

  console.log(employees);


const applyFilter =  () => {
  setOpenModal(false)
  setFilterApplied(true)
  setPaginationModel({page:0,pageSize:5})


}

const clearFilter = () => {
  setOpenModal(false)
  setFilterApplied(false)
  setPaginationModel({page:0,pageSize:5})
  fetchEmp()
}



  useEffect(() => {
    fetchEmp();
  },[paginationModel.page, paginationModel.pageSize, filterApplied]);

  const navigate = useNavigate();

  return (
    <div >
      <div className='flex justify-end gap-5'>

        <button
          className=' bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50'
          onClick={() => navigate('/dash/addemp')}>
          Add New Employee
        </button>
        <button
          className=' bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50'
          onClick={()=>setOpenModal(true)}>
          Filter
        </button>
      </div>

      <div className='mt-10'>
        <Paper sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={employees}
            columns={columns}
            pagination
            rowCount={totalRows}
            paginationMode="server"
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            getRowId={(row) => row._id}
          />
        </Paper>
      </div>
      {openModal && (
  <>
    <div className="fixed inset-0 flex items-start justify-end bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mt-20 mr-10">
        <h2 className="text-lg font-semibold mb-4">Filter Employees</h2>

        {/* Department Filter */}
        <div className="space-y-2 mb-4">
          <p className="font-medium">Department</p>
          {['HR', 'IT', 'Design', 'Finance'].map((dept) => (
            <div key={dept} className="flex items-center">
              <input
                type="checkbox"
                id={dept}
                checked={selectDepartment.includes(dept)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectDepartment([...selectDepartment, dept]);
                  } else {
                    setSelectDepartment(selectDepartment.filter(d => d !== dept));
                  }
                }}
              />
              <label htmlFor={dept} className="ml-2 text-sm">{dept}</label>
            </div>
          ))}
        </div>

        {/* Work Type Filter */}
        <div className="space-y-2 mb-4">
          <p className="font-medium">Work Type</p>
          {['Onsite', 'Work From Home'].map((t) => (
            <div key={t} className="flex items-center">
              <input
                type="radio"
                id={t}
                name="workType"
                checked={selectMode === t}
                onChange={() => setSelectMode(t)}
              />
              <label htmlFor={t} className="ml-2 text-sm">{t}</label>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="px-4 py-2 border rounded text-gray-600 mt-3"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={applyFilter}
            className="px-4 py-2 bg-blue-600 text-white rounded mt-3"
          >
            Apply
          </button>
        </div>

      </div>
    </div>
  </>
)}


    </div>
  );
};

export default EmpList;
