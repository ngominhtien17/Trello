import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      height: (theme) => theme.trello.boardHeaderHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Bar
    </Box>
  )
}

export default BoardBar
