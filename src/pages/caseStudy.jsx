import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '../../src/components/Item';
import Content from '../components/casestudy/Content';
import Quote from '../components/casestudy/Quote';
import Summary from '../components/casestudy/Summary';
import casemain from '../images/casestudy.png';

function CaseStudy() {
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
                  {/* <Button
                  sx={{
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0',
                  }}
                > */}
                  {/* <ArrowLeft size='20' color='#036' /> */}
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
                  {/* </Button> */}
                </Item>
                <Item
                  sx={{
                    boxShadow: 'none',
                    paddingBottom: '2.75rem',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant='h1'
                    sx={{
                      fontWeight: '800',
                      fontSize: '2.5rem',
                    }}
                  >
                    BC Registries’ payment project
                  </Typography>
                </Item>
                <Item
                  sx={{
                    boxShadow: 'none',
                    maxWidth: '500px',
                    textAlign: 'left',
                  }}
                >
                  {/* <Typography
                    variant='p'
                    sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
                  >
                    <a
                      className='external-link download'
                      rel='noreferrer'
                      target='_blank'
                      href=''
                    >
                      <DocumentDownload />
                      Download PDF
                    </a>
                    2023 March
                  </Typography> */}
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
        <Quote />
      </Box>
    </>
  );
}

export default CaseStudy;
