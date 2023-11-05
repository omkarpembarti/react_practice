import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox, Container, FormControl, IconButton, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';




// const defaultRecord = {
//   id: 1,
//   selection: false,
//   add_Or: "",
//   field: "",
//   operator: "",
//   value: "",
// }

const getNewRecord = () => {
  var id = "id" + Math.random().toString(16).slice(2)
  return ({
    id: id,
    selection: false,
    add_Or: "",
    field: "",
    operator: "",
    value: "",
  })
}


const tableCellStyle = {
  "paddingLeft": "2px",
  "paddingRight": "2px"
}

export default function CustomTable(props) {

  const [records, setRecords] = React.useState(() => [getNewRecord()]);

  const onRecordChange = (e, id) => {
    try {
      //console.log(id + "---" + e.target.name + "---" + e.target.value);
      setRecords((prevRecords) => {
        return prevRecords.map((record) => {
          if (record.id === id) {
            if (e.target.type === "checkbox")
              record[e.target.name] = e.target.checked;
            else
              record[e.target.name] = e.target.value;
            return record;
          }
          return record;
        });
      });
    } catch (e) { console.log(e) }
  };
  const addRecord = () => {
    setRecords((prevRecords) => [...prevRecords, getNewRecord()]);
  }
  const deleteRecord = (id) => {
    if (records.length === 1)
      return;
    setRecords((prevRecords) => {
      let newRecords = prevRecords.filter(record => record.id !== id);
      return newRecords;
    })
  }

  const onSubmitClick = () => {
    try {
      console.log('onSubmitClick');
      if (records.length === 1) {
        props.setLogs([]);
      } else {
        props.setLogs(records);
      }
      //clear the records
      setRecords([getNewRecord()]);
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ padding: "1px", marginTop: '10px' }}>
      <Button
        variant="contained"
        color='success'
        sx={{ float: 'right' }}
        onClick={onSubmitClick}
      >
        Submit
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="dense simple table">

          <TableHead>
            <TableRow>
              <TableCell align="center" style={tableCellStyle}>And/Or</TableCell>
              <TableCell align="left" style={tableCellStyle}>Field*</TableCell>
              <TableCell align="left" style={tableCellStyle}>Operator</TableCell>
              <TableCell align="left" style={tableCellStyle}>Value</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {records.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  //component="div"
                  scope="row"
                  sx={{}}
                  style={tableCellStyle}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton color='success' size="small" onClick={addRecord}>
                      <AddOutlinedIcon fontSize='small' />
                    </IconButton>
                    <IconButton color='error' size="small" onClick={() => { deleteRecord(row.id) }}>
                      <CloseIcon fontSize='small' />
                    </IconButton>
                    <Checkbox
                      checked={row.selection}
                      onChange={(e) => { onRecordChange(e, row.id) }}
                      inputProps={{ 'aria-label': 'controlled' }}
                      size="small"
                      name="selection"

                    />

                    <FormControl fullWidth={true} size="small">
                      <Select
                        value={row.add_Or}
                        onChange={(e) => { onRecordChange(e, row.id) }}
                        name="add_Or"
                        displayEmpty
                      >
                        <MenuItem value="Add">Add</MenuItem>
                        <MenuItem value="Or">Or</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </TableCell>
                <TableCell align="left" style={tableCellStyle}>
                  <FormControl fullWidth={true} size="small">
                    <Select
                      value={row.field}
                      onChange={(e) => { onRecordChange(e, row.id) }}
                      name="field"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="left" style={tableCellStyle}>
                  <FormControl fullWidth={true} size="small">
                    <Select
                      value={row.operator}
                      onChange={(e) => { onRecordChange(e, row.id) }}
                      name="operator"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value={10}>=</MenuItem>
                      <MenuItem value={20}>!=</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="left" style={tableCellStyle}>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      onChange={(e) => { onRecordChange(e, row.id) }}
                      name="value"
                      id="outlined-adornment-weight"
                      value={row.value}
                    />
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}