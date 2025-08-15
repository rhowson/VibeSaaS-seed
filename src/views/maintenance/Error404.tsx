'use client';

// next
import Link from 'next/link';

// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import { APP_DEFAULT_PATH } from 'config';

// assets
const error404 = '/assets/images/maintenance/img-error-404.svg';

// ==============================|| ERROR 404 ||============================== //

export default function Error404Page() {
  return (
    <Grid
      container
      spacing={10}
      direction="column"
      sx={{ alignItems: 'center', justifyContent: 'center', minHeight: '100vh', pt: 2, pb: 1, overflow: 'hidden' }}
    >
      <Grid size={12}>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <Grid>
            <Box sx={{ width: { xs: 250, sm: 590 }, height: { xs: 130, sm: 300 } }}>
              <CardMedia component="img" src={error404} alt="error 404" sx={{ height: 1, objectFit: 'inherit' }} />
            </Box>
          </Grid>
        </Stack>
      </Grid>
      <Grid size={12}>
        <Stack sx={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h1">Page Not Found</Typography>
          <Typography color="text.secondary" variant="body2" align="center" sx={{ width: { xs: '73%', sm: '70%' }, mt: 1 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Link href={APP_DEFAULT_PATH} style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ textTransform: 'none', mt: 4 }}>
              Back To Home
            </Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}
