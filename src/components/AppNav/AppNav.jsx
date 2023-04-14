import { useAuth } from 'hooks';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { LinkStyled } from '../LinkStyled';

export function AppNav() {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      component="nav"
      sx={{ flexGrow: 1, flexWrap: 'wrap', display: { xs: 'flex' } }}
    >
      <LinkStyled to="/">
        <AutoStoriesIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
        <Typography variant="h6" sx={{ mr: 1 }}>
          Phonebook
        </Typography>
      </LinkStyled>
      {isLoggedIn && (
        <LinkStyled to="/contacts">
          <Typography variant="h6">Contacts</Typography>
        </LinkStyled>
      )}
    </Box>
  );
}
