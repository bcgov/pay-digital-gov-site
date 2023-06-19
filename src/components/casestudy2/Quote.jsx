import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { QuoteUp } from 'iconsax-react';
import Item from '../Item';

function Quote() {
  return (
    <>
      <Box
        sx={{
          background: '#fff',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: '2rem 1rem', md: '7rem 0' },
          borderTop: '1px solid #eee',
        }}
        name='casestudy'
      >
        <Grid container spacing={{ xs: 8, md: 14 }} sx={{ width: '800px' }}>
          <Grid
            xs={12}
            md={12}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Stack
              spacing={8}
              sx={{
                alignItems: 'flex-start',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Item
                sx={{
                  boxShadow: 'none',
                  textAlign: 'left',
                }}
              >
                <QuoteUp size='32' color='#F8D165' variant='Bold' />
                <Typography
                  variant='h3'
                  sx={{
                    color: '#222',
                    fontSize: '1.45rem',
                    lineHeight: '1.75',
                    marginTop: '0.25rem',
                    marginBottom: '0.55rem',
                  }}
                >
                  Through this project, the branch has provided a platform that
                  can largely replace what was done in BC OnLine. With a
                  streamlined and enhanced features, this new modernized
                  platform offers users an improved and consistent experience.
                </Typography>
              </Item>
              <Item
                sx={{
                  boxShadow: 'none',
                  textAlign: 'left',
                  maxWidth: '540px',
                  borderRadius: '0',
                  paddingLeft: '1rem',
                  borderLeft: '2px solid #F8D165',
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    color: '#222',
                    fontSize: '1rem',
                    fontWeight: '400',
                    marginBottom: '0.25rem',
                  }}
                >
                  Linda McCLung
                </Typography>
                <Typography
                  variant='p'
                  sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
                >
                  BC Registry, Citizens’ Services
                </Typography>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* <Divider sx={{ maxWidth: '1300px', margin: 'auto' }} /> */}
    </>
  );
}

export default Quote;
