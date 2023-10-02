import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function EmployeesTable({employees}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Identity</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Telephone</TableCell>
            <TableCell align="right">Photo id</TableCell>
            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {employee.id}
                </TableCell>
                <TableCell align="right">{employee.code}</TableCell>
                <TableCell align="right">{employee.name}</TableCell>
                <TableCell align="right">{employee.surname}</TableCell>
                <TableCell align="right">{employee.identity}</TableCell>
                <TableCell align="right">{employee.address}</TableCell>
                <TableCell align="right">{employee.telephone}</TableCell>
                <TableCell align="right">{employee.photo_id}</TableCell>
                <TableCell align="right">{employee.created_at}</TableCell>
                <TableCell align="right">{employee.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
