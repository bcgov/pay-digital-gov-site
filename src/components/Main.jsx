import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-scroll';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '../../src/components/Item';
import MoneyImage from '../images/money.png';

function Main() {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        marginTop: '75px',
        background: '#f8f8f8',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '7rem 0' },
      }}
      name='main'
    >
      <Grid container spacing={{ xs: 8, md: 0 }} sx={{ width: '1250px' }}>
        <Grid
          xs={12}
          md={6}
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
          order={{ xs: 2, md: 1 }}
        >
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
                textAlign: 'center',
              }}
            >
              <Typography variant='h4' sx={{ color: '#036' }}>
                Payments in BC Government
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '600px',
                paddingBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: '800',
                  fontSize: '4rem',
                }}
              >
                Easy. Secure. Fast.
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '500px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1.1rem', fontWeight: '200' }}
              >
                Is your government program looking to collect funds for a
                product or service? Or considering some great new benefit or
                grant that you’d like to pay out? Read on to learn what's
                involved in sending or receiving payments in BC Government.
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {' '}
              <Link
                to='policy'
                spy={true}
                smooth={true}
                offset={-64}
                duration={100}
                delay={0}
              >
                <Button
                  variant='contained'
                  className='animated-button'
                  sx={{
                    color: '#222',
                    background: '#F8D165',
                    boxShadow: 'none',
                    minWidth: '120px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    padding: '1.3rem 1.45rem',
                    textTransform: 'uppercase',
                    borderRadius: '5px',
                    letterSpacing: '0.125rem',
                    marginTop: '1.5rem',
                    lineHeight: '0.75',
                    margin: '2rem 0rem',
                    ':hover': {
                      bgcolor: '#F8D165',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Get started
                </Button>
              </Link>
            </Item>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
          order={{ xs: 2, md: 1 }}
        >
          <Item
            sx={{
              boxShadow: 'none',
              textAlign: 'center',
              position: 'relative',
              margin: 'auto',
              padding: '4rem',
            }}
          >
            <Box
              sx={{ maxWidth: '480px' }}
              component='img'
              src={MoneyImage}
              alt='main-image'
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
