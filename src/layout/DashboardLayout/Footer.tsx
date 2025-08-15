// next
import Link from 'next/link';

// material-ui
import Links from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">
        &copy; Able Pro crafted with ♥ by Team{' '}
        <Links component={Link} href="https://themeforest.net/user/phoenixcoded" target="_blank" underline="none">
          {' '}
          Phoenixcoded
        </Links>
      </Typography>
      <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Links component={Link} href="https://ableproadmin.com" target="_blank" variant="caption" color="text.primary">
          Home
        </Links>
        <Links component={Link} href="https://phoenixcoded.gitbook.io/able-pro" target="_blank" variant="caption" color="text.primary">
          Documentation
        </Links>
        <Links component={Link} href="https://phoenixcoded.authordesk.app/" target="_blank" variant="caption" color="text.primary">
          Support
        </Links>
      </Stack>
    </Stack>
  );
}
