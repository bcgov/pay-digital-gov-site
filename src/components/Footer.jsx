import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <>
      <Box
        sx={{
          background: '#036',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: '2rem 1rem', md: '1rem 0' },
          borderTop: '2px solid #F8D165',
        }}
      >
        <Box sx={{ maxWidth: '1200px', width: '100%' }}>
          <Stack direction='row' spacing={4} sx={{ width: '100%' }}>
            <a href='/'>
              <Typography sx={{ color: '#fff' }}>Home</Typography>
            </a>
            <a
              href='https://alpha.gov.bc.ca/gov/content/home/disclaimer'
              rel='noreferrer'
              target='_blank'
            >
              <Typography sx={{ color: '#fff' }}>Disclaimer</Typography>
            </a>
            <a
              href='https://alpha.gov.bc.ca/gov/content/home/privacy'
              rel='noreferrer'
              target='_blank'
            >
              <Typography sx={{ color: '#fff' }}>Privacy</Typography>
            </a>
            <a
              href='https://alpha.gov.bc.ca/gov/content/home/accessible-government'
              rel='noreferrer'
              target='_blank'
            >
              <Typography sx={{ color: '#fff' }}>Accessibility</Typography>
            </a>
            <a
              href='https://alpha.gov.bc.ca/gov/content/home/copyright'
              rel='noreferrer'
              target='_blank'
            >
              <Typography sx={{ color: '#fff' }}>Copyright</Typography>
            </a>
            <a href='mailto:pay.digital@gov.bc.ca'>
              <Typography sx={{ color: '#fff' }}>Contact Us</Typography>
            </a>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
