import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {Button, Switch} from "@mui/material"
import {Link} from "react-router-dom"
import {useUpdateUser} from '../hooks/useUpdateUser'
import {useCallback} from 'react'
import Switcher from './Switcher'

const UsersTable = ({users, filters, setFilters}) => {
  const updateUserMutation = useUpdateUser();

  const handleChangePage = (event, newPage) => {
    setFilters((prevState) => ({
      ...prevState,
      page: newPage + 1
    }))
  }

  const handleChangeRowsPerPage = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
    }))
  }

  return (
    <>
      <TableContainer component={Paper} style={{marginTop: "2rem"}}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell aling="left">User</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user, index) => (
                <TableRow
                  key={user.id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="left">{user.fullName}</TableCell>
                  <TableCell align="left">{user.role}</TableCell>
                  <TableCell align="left"><Switcher user={user}/></TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" component={Link} state={{data: user}} to={"/users/" + user.id}>View</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default UsersTable

