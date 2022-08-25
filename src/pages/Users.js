import {useLocalStorageState} from '../hooks/useLocalStorageState'
import useDebounce from '../hooks/useDebounce'
import useUsers from '../hooks/useUsers'
import {Button, styled} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Search from '../components/Search'
import {useNotification} from '../contexts'
import UsersTable from '../components/UsersTable'

const Wrapper = styled('div')({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column"

})

const TopBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between"
})

const Users = () => {
  const [filters, setFilters] = useLocalStorageState("state", {
    page: 1,
    rowsPerPage: 5,
    searchTerm: ""
  })
  const {notify} = useNotification()
  const debouncedFilters = useDebounce(filters, 500)
  const {data, isLoading, isError, isFetching} = useUsers(debouncedFilters)

  if (isError) {
    notify({message: "something went wrong!", severity: "error"})
  }

  return (
    <Wrapper>
      <TopBarWrapper>
        <Button variant="contained" startIcon={<AddCircleOutlineIcon fontSize="large" />}>
          Add User
        </Button>
        <Search
          filters={filters}
          setFilters={setFilters}
          isFetching={isFetching}
          isloading={isLoading}
        />
      </TopBarWrapper>
      <UsersTable
        users={data}
        filters={filters}
        setFilters={setFilters}
      />
    </Wrapper>
  )
}

export default Users
