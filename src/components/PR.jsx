import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '../../src/components/Item';
import PRImage from '../images/pr.png';

function PR() {
  return (
    <Box
      sx={{
        background: '#fff',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '6rem 0' },
      }}
      name='pre'
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
              <Typography
                variant='p'
                sx={{
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  background: '#036',
                  borderRadius: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'inline-flex',
                }}
              >
                2
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
                Step 2
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
                Prerequisites for payments
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'center' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1.3rem', fontWeight: '200' }}
              >
                Once you’ve determined that your program has the legal authority
                to send or receive payments, the next step is to make sure that
                the accounting and banking preconditions have been met.
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
              width: { xs: '100%', md: '420px' },
              height: { xs: '240px', md: '320px ' },
            }}
          >
            <Box
              src={PRImage}
              alt='money'
              component='img'
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
                Corporate Accounting Services
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                The Ministry of Finance's Corporate Accounting Services (CAS)
                branch manages the government's Corporate Financial System
                (CFS). Each program must have an entry in the Chart of Accounts
                (COA) to track debits and credits.
              </Typography>
            </Item>
          </Stack>
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
                Banking Services
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                To open a bank account, you need the account coding for your
                program. The Ministry of Finance's Banking and Cash Management
                (BCM) branch manages bank accounts. To collect payments you’ll
                need a bank account and sign-off by your Deputy Minister or CFO
                using Form{' '}
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='external-link idir'
                  href='http://gww.fin.gov.bc.ca/gws/pt/bcm/forms/0126FILL.pdf'
                >
                  FIN126
                </a>
                . To send payments, a bank account is not required. Please
                contact your ministry financial branch for additional details.
                They can either provide you with the necessary information or
                help you navigate the accounting and banking processes.
              </Typography>
            </Item>
          </Stack>
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
                Financial Systems and Controls
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'left' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                <a
                  href='https://www2.gov.bc.ca/gov/content?id=CCD1102326E34D729DAC619DA12176DB'
                  rel='noreferrer'
                  target='_blank'
                  className='external-link'
                >
                  CPPM Policy Chapter 13: Financial Systems and Controls
                </a>{' '}
                is designed to ensure that financial systems in the government
                comply with generally accepted accounting principles, standards,
                and legal regulatory requirements.
              </Typography>
              <Typography
                variant='p'
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  fontWeight: '200',
                  display: 'block',
                  marginTop: '1rem',
                }}
              >
                As part of the process of financial operations, several
                assessments are required. It is essential that these assessments are initiated
                during the system development process and completed within the
                required timeframe.
              </Typography>
              <ul className='bullet-list'>
                <li sx={{ display: 'listItem' }}>
                  <a
                    href='https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/financial-systems-and-controls#:~:text=Financial%20Risk%20and%20Controls%20Review%20(FRCR)%20%E2%80%93%20assesses%20and%20documents,to%20prevent%20and%20reduce%20the'
                    rel='noreferrer'
                    target='_blank'
                    className='external-link'
                  >
                    <Typography
                      variant='p'
                      sx={{
                        lineHeight: '1.85',
                        fontSize: '1rem',
                      }}
                    >
                      Financial Risk and Controls Review (FRCR)
                    </Typography>
                  </a>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <a
                    href='https://www2.gov.bc.ca/gov/content?id=7175C19B66564EA3A343AB8B668BEFC2'
                    rel='noreferrer'
                    target='_blank'
                    className='external-link'
                  >
                    <Typography
                      variant='p'
                      sx={{
                        lineHeight: '1.85',
                        fontSize: '1rem',
                      }}
                    >
                      Security Threat and Risk Assessment (STRA)
                    </Typography>
                  </a>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <a
                    href='https://www2.gov.bc.ca/gov/content?id=CFA561FF833D42B68FDD9A818ECAFFBE'
                    rel='noreferrer'
                    target='_blank'
                    className='external-link'
                  >
                    <Typography
                      variant='p'
                      sx={{
                        lineHeight: '1.85',
                        fontSize: '1rem',
                      }}
                    >
                      Privacy Impact Assessment (PIA)
                    </Typography>
                  </a>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <a
                    href='http://gww.fin.gov.bc.ca/gws/pt/bcm/bankPCI.stm'
                    rel='noreferrer'
                    target='_blank'
                    className='external-link idir'
                  >
                    <Typography
                      variant='p'
                      sx={{
                        lineHeight: '1.85',
                        fontSize: '1rem',
                      }}
                    >
                      Payment Card Industry Data Security (PCI-DSA)
                    </Typography>
                  </a>
                </li>
              </ul>
              <Typography
                variant='p'
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  fontWeight: '200',
                  marginTop: '1rem',
                }}
              >
                To ensure these assessments are completed efficiently and
                effectively, we suggest engaging your ministry's finance team,
                including those with procurement expertise, in the early stages
                of development.
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PR;
