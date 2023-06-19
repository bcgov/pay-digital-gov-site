import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '../../src/components/Item';
import Content from '../components/casestudy2/Content';
import Quote from '../components/casestudy2/Quote';
import Summary from '../components/casestudy2/Summary';
import casemain from '../images/casestudy.png';

function CaseStudy2() {
  return (
    <>
      <Box>
        <Box
          sx={{
            marginTop: '75px',
            background: '#fff',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            padding: { xs: '2rem 1rem', md: '5rem 0' },
          }}
          name='main'
        >
          <Grid container spacing={{ xs: 8, md: 0 }} sx={{ width: '1200px' }}>
            <Grid
              xs={12}
              md={8}
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Stack
                spacing={1}
                sx={{
                  alignItems: 'flex-start',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <Item
                  sx={{
                    boxShadow: 'none',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant='p'
                    sx={{
                      color: '#222',
                      fontSize: '1rem',
                      marginLeft: '0rem',
                    }}
                  >
                    Case studies
                  </Typography>
                </Item>
                <Item
                  sx={{
                    boxShadow: 'none',
                    paddingBottom: '2.75rem',
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    variant='h1'
                    sx={{
                      fontWeight: '800',
                      fontSize: '2.5rem',
                      maxWidth: '640px',
                    }}
                  >
                    NRS’ approach to omni-channel payments
                  </Typography>
                </Item>
                <Item
                  sx={{
                    boxShadow: 'none',
                    maxWidth: '500px',
                    textAlign: 'left',
                  }}
                >
                </Item>
              </Stack>
            </Grid>
            <Grid md={4}>
              <Item>
                <Box
                  component='img'
                  src={casemain}
                  sx={{ maxWidth: '440px' }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Summary />
        <Content />
      </Box>
    </>
  );
}

export default CaseStudy2;
