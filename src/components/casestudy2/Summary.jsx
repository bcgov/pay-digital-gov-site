import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '../Item';

function Summary() {
  return (
    <Box
      sx={{
        background: '#f8f8f8',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '7rem 0' },
      }}
      name='casestudy'
    >
      <Grid container spacing={{ xs: 8, md: 14 }} sx={{ width: '1300px' }}>
        <Grid
          xs={12}
          md={6}
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
              width: '84%',
            }}
          >
            <Item
              sx={{
                boxShadow: 'none',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#222',
                  fontSize: '1rem',
                  marginBottom: '0.55rem',
                }}
              >
                Ministry
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
              >
                Corporate Services for the Natural Resource
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                textAlign: 'left',
                marginBottom: '3rem',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#222',
                  fontSize: '1rem',
                  marginBottom: '0.55rem',
                }}
              >
                Division / Branch
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
              >
                Financial Services Branch
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                textAlign: 'left',
                maxWidth: '540px',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#222',
                  fontSize: '1rem',
                  marginBottom: '0.55rem',
                }}
              >
                Responsiblities
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
              >
                Provides comprehensive financial and management services to natural resource ministries
              </Typography>
            </Item>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={6}
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
              width: '84%',
            }}
          >
            <Item
              sx={{
                boxShadow: 'none',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#222',
                  fontSize: '1rem',
                  marginBottom: '0.55rem',
                }}
              >
                Top challenges
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
              >
                Disruptions in workflow and limited client payment options
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                textAlign: 'left',
                marginBottom: '3rem',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#222',
                  fontSize: '1rem',
                  marginBottom: '0.55rem',
                }}
              >
                Motivation for change
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
              >
                Consolidated processes and system help both clients and government employees
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                textAlign: 'left',
                maxWidth: '540px',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#222',
                  fontSize: '1rem',
                  marginBottom: '0.55rem',
                }}
              >
                Current payment methods
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontWeight: '400', fontSize: '1rem' }}
              >
                BC Express Pay, Online bill payments, In-person payments, Telephone payments, Mail payments
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Summary;
