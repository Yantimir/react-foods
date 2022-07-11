import { Box, CircularProgress } from '@mui/material';


export const Preloader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  )
}
