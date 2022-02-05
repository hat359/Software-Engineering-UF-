


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
  createData('What would be the cheapest flight from New Delhi to Orlando ?', 'John Doe', '2/12/2021'),
  createData('How to travel from Orlando International airport to Gainesville ?', 'Elon Musk', '2/12/2021'),
  createData('What documents to carry during travel???', 'Bezos to the moon', '2/12/2021'),
  createData('Has anyone travelled with Etihad before??', 'Zukerberg ', '2/12/2021'),
  createData('How much is the baggage allowance in Qatar Airways? ', 'Bill ','2/12/2021'),
];

export default function BasicTable() {
  return (
    <TableContainer sx={{marginTop:'100px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:600}}>Questions</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">Author</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}