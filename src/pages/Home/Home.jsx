import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        pt: 10,
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Phonebook
      </Typography>
      <Typography variant="h6" sx={{ paddingX: 4 }}>
        the ability to register, authorize and update the user, as well as work
        with a private collection of contacts.
      </Typography>
    </Box>
  );
}
