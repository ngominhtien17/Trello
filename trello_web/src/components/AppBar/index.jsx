import { Box } from '@mui/material'
import ModeToggle from '../ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      height: (theme) => theme.trello.appBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeToggle />
    </Box>
  )
}

export default AppBar
