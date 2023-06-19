import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import PolicyImage from '../images/policy.png';
import Item from './Item';

function Policy() {
  return (
    <Box
      sx={{
        background: '#fff',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '6rem 0' },
      }}
      name='policy'
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
                  background: 'linear-gradient(#ddd,#F8D165)',
                  paddingRight: '1px',
                  alignSelf: 'center',
                  display: 'block',
                  margin: 'auto',
                }}
              ></Typography>
              <Typography
                variant='p'
                sx={{
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  background: '#F8D165',
                  borderRadius: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'inline-flex',
                }}
              >
                1
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
                  fontSize: '1.25rem',
                  color: '#222',
                }}
              >
                Step 1
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
                Policy considerations
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'center' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1.3rem', fontWeight: '200' }}
              >
                Before you do anything else, make sure that your plans for
                payment are legal!
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
          order={{ xs: 2, md: 1 }}
        >
          <Item
            sx={{
              textAlign: 'center',
              position: 'relative',
              width: { xs: '100%', md: '440px' },
              height: { xs: '240px', md: '260px' },
            }}
          >
            <Box
              component='img'
              src={PolicyImage}
              alt='money'
              sx={{ width: '100%' }}
            />
          </Item>
        </Grid>
        <Grid xs={12} md={6} order={{ xs: 2, md: 1 }}>
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
                Is your program allowed to <i>collect</i> payments?
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Incoming payments to government are referred to as fees or
                fines. All fee and fine proposals must be{' '}
                <a
                  href='http://gww.fin.gov.bc.ca/gws/tbs/fpeb/fee_fine.stm'
                  rel='noreferrer'
                  target='_blank'
                  className='external-link idir'
                >
                  reviewed and approved by Treasury Board
                </a>{' '}
                prior to implementation. In addition to Treasury Board approval,
                there must be a legal authority to charge a fee/fine. This legal
                authority can be through an act, regulation, ministerial order,
                or a Minister of Finance directive.
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
                Is your program allowed to <i>send</i> payments?
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Your ministry has a certain degree of latitude when it comes to
                outbound payments. If you are looking to create a new program
                with the express purpose of paying a benefit, for example, you
                should consult with your Chief Financial Officer and the
                appropriate policy team within your ministry. Outbound payments
                require{' '}
                <a
                  href='https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/expense-management'
                  rel='noreferrer'
                  target='_blank'
                  className='external-link'
                >
                  approval of the appropriate expense authorities
                </a>
                .
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Policy;
