import {Switch} from '@mui/material'
import {useState} from 'react'
import {useUpdateUser} from '../hooks/useUpdateUser'


const Switcher = ({user}) => {
  const [checked, setChecked] = useState(user.isActive)
  const updateUserMutation = useUpdateUser()

  const handleChange = (event) => {
    const resolvedUser = {
      ...user,
      isActive: checked
    }
    setChecked(event.target.checked)
    updateUserMutation.mutate({user: resolvedUser, id: user.id})
  }
  return (
    <Switch checked={checked} onChange={handleChange} />
  )
}

export default Switcher
