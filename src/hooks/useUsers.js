import axios from "axios"
import {useQuery} from "@tanstack/react-query"

const fetchUsers = async (filters) => {
  const {data} = await axios.get('http://localhost:4000/users', {
    params: {
      q: filters.searchTerm,
      _page: filters.page,
      _limit: filters.rowsPerPage
    }
  })
  return data
}

const useUsers = (filters) => {
  return useQuery(["users", filters],
    () => fetchUsers(filters),
    {
      keepPreviousData: true
    })
}

export default useUsers
