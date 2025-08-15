'use client';

// next
import Link from 'next/link';

// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import { APP_DEFAULT_PATH } from 'config';

// assets
const construction = '/assets/images/maintenance/img-cunstruct-1.svg';
const constructionBg = '/assets/images/maintenance/img-cunstruct-1-bg.png';
const constructionBottom = '/assets/images/maintenance/img-cunstruct-1-bottom.svg';

// ==============================|| UNDER CONSTRUCTION ||============================== //

export default function UnderConstructionPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundImage: `url(${constructionBg})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
      <Container fixed sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Grid
          container
          spacing={3}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            py: 2,
            backgroundImage: `url(${constructionBottom})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
          }}
        >
          <Grid size={{ md: 6 }}>
            <Stack sx={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Typography align="center" variant="h1">
                Under Construction
              </Typography>
              <Typography color="text.secondary" variant="body2" align="center" sx={{ width: { xs: '73%', sm: '70%' }, mt: 1 }}>
                We are currently working on this page. Please check back later.
              </Typography>
              <Link href={APP_DEFAULT_PATH} style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ textTransform: 'none', mt: 4 }}>
                  Back To Home
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ width: { xs: 300, sm: 374 } }}>
                <CardMedia component="img" src={construction} alt="under construction" sx={{ height: 1 }} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
