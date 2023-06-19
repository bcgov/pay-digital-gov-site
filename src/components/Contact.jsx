import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import ContactImage from '../images/contact.jpg';
import Item from './Item';

function Contact() {
  return (
    <Box
      sx={{
        background: '#fff',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '6rem 0' },
      }}
      name='contact'
    >
      <Grid container spacing={{ xs: 8, md: 15 }} sx={{ width: '1250px' }}>
        <Grid md={12}>
          <Stack
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              <Typography
                variant='span'
                sx={{
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  color: '#fff',
                  width: '1px',
                  height: '100px',
                  background: 'linear-gradient(#ddd,#036)',
                  paddingRight: '1px',
                  alignSelf: 'center',
                  display: 'block',
                  margin: 'auto',
                }}
              ></Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  color: '#222',
                }}
              >
                Need more information?
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '800',
                  fontSize: '3rem',
                }}
              >
                Contact us
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '620px', textAlign: 'center' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1.3rem', fontWeight: '200' }}
              >
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
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
            justifyContent: 'center',
          }}
        >
          <Item
            sx={{
              textAlign: 'center',
              position: 'relative',
              width: { xs: '100%', md: '420px' },
            }}
          >
            <Box
              component='img'
              src={ContactImage}
              alt='money'
              sx={{ width: '100%' }}
            />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Stack
            spacing={1}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                textAlign: 'center',
              }}
            >
              <Typography
                variant='0'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.2rem',
                }}
              >
                General inquiries
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  fontWeight: '400',
                  display: 'block',
                }}
              >
                Digital Pay Team (
                <a
                  className='external-link'
                  rel='noreferrer'
                  target='_blank'
                  href='mailto:pay.digital@gov.bc.ca'
                >
                  pay.digital@gov.bc.ca
                </a>
                )
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Digital Office, Office of the Chief Information Officer (OCIO)
              </Typography>
            </Item>
          </Stack>
          <Stack
            spacing={1}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                textAlign: 'center',
              }}
            >
              <Typography
                variant='0'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.2rem',
                }}
              >
                Feedback
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                We greatly appreciate{' '}
                <a
                  href='https://submit.digital.gov.bc.ca/app/form/submit?f=660f232c-9344-40c9-8981-bba26b1533d6'
                  rel='noreferrer'
                  target='_blank'
                  className='external-link'
                >
                  your input
                </a>{' '}
                and strive to continuously improve our website based on your
                suggestions.
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
