import { AppBar, Container } from '@mui/material';

export const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ height: "70px", mt: "20px" }}>
      <Container maxWidth="xl">
        2022
      </Container>
    </AppBar>
  )
}
