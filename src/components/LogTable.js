import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';


const tableCellStyle = {
    "paddingLeft": "2px",
    "paddingRight": "2px"
}

export default function LogTable(props) {

    const records = props.records;

    return (
        <Container maxWidth="lg" sx={{ padding: "1px", marginTop: '10px' }}>
            <Typography component='div' variant='h4' sx={{ textAlign: 'left' }}>LOGS</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="dense simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={tableCellStyle}>ID</TableCell>
                            <TableCell align="center" style={tableCellStyle}>And/Or</TableCell>
                            <TableCell align="center" style={tableCellStyle}>Field*</TableCell>
                            <TableCell align="center" style={tableCellStyle}>Operator</TableCell>
                            <TableCell align="center" style={tableCellStyle}>Value</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {records.length === 0 && <TableRow>No Logs</TableRow>}
                        {records.map((record) => (
                            <TableRow key={record.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center" style={tableCellStyle}>
                                    {record.id}
                                </TableCell>
                                <TableCell align="center" style={tableCellStyle}>
                                    {record.add_Or}
                                </TableCell>
                                <TableCell align="center" style={tableCellStyle}>
                                    {record.field}
                                </TableCell>
                                <TableCell align="center" style={tableCellStyle}>
                                    {record.operator}
                                </TableCell>
                                <TableCell align="center" style={tableCellStyle}>
                                    {record.value}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}