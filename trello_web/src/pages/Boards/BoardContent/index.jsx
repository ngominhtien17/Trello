import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardHeaderHeight})`,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      Board content
    </Box>
  )
}

export default BoardContent