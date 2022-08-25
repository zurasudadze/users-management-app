import axios from "axios"
import {useNotification} from '../contexts'
import {useMutation, useQueryClient} from '@tanstack/react-query'

const updateUser = async ({user, id}) => {
  console.log(user)
  const response = await axios.put(
    `http://localhost:4000/users/${user?.id}`,
    user,
  )

  return response.data
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const {notify} = useNotification()

  return useMutation(updateUser, {
    onSuccess: (data) => {
      console.log(data)
      notify({message: "User was updated successfully", severity: "success"})
      queryClient.invalidateQueries(["users", data.user.id])
    },
    onError: (error) => {
      notify({message: error.message, severity: "error"})
    }
  })
}
