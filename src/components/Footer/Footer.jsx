import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

export function Footer() {
  return (
    <AppBar position="relative" component="footer">
      <Container
        maxWidth="sm"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          display: { xs: 'flex' },
          paddingY: 3,
        }}
      >
        <Typography variant="h7">Disigned by Ihor Statsenko</Typography>
        <CopyrightIcon sx={{ display: { md: 'flex' }, ml: 1, mr: 1 }} />
        <Typography variant="h7">GoIT 2023</Typography>
      </Container>
    </AppBar>
  );
}
