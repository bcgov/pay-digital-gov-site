import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import Item from './Item';
import TabContent from './TabContent';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PayOption() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        background: '#fff',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '6rem 0 2rem 0' },
      }}
      name='pay'
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
                3
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
                Step 3
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
                Payment options
              </Typography>
            </Item>
            <Item
              sx={{ boxShadow: 'none', maxWidth: '800px', textAlign: 'center' }}
            >
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1.3rem', fontWeight: '200' }}
              >
                Consider which payment channels and payment methods are best
                suited for your audience. As you’ll see below, there are several
                internal service providers that can assist you in providing
                flexible payment options.
              </Typography>
            </Item>
          </Stack>
        </Grid>
        <Grid xs={12} md={4} sx={{}} order={{ xs: 2, md: 1 }}>
          <Item
            sx={{
              boxShadow: 'none',
              textAlign: 'left',
            }}
          >
            <Typography
              variant='h2'
              sx={{ fontSize: '1.5rem', fontWeight: '600' }}
            >
              Payment channels
            </Typography>
          </Item>
        </Grid>
        <Grid xs={12} md={8} sx={{}} order={{ xs: 2, md: 1 }}>
          <Stack
            spacing={1}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '0rem',
            }}
          >
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '0rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.05rem',
                }}
              >
                In-person
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                To accept in-person card payments, you'll need a bank account
                and a completed{' '}
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='external-link idir'
                  href='http://gww.fin.gov.bc.ca/gws/pt/bcm/forms/0031FILL.pdf'
                >
                  application for debit/credit card services
                </a>
                . Alternatively, you may wish to consider using one of
                government’s service delivery partners. Organizations like
                ServiceBC, FrontCounter BC, and ICBC offer in-person and
                telephone payment services for specific programs. Provincial
                Courts also accept payments for traffic infractions and legal
                encumbrances. Debit card payments can only be made in-person,
                while online credit card payments can be done online.
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '2rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.05rem',
                }}
              >
                Online
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Government programs are required to use{' '}
                <a
                  className='external-link'
                  rel='noreferrer'
                  target='_blank'
                  href='https://digital.gov.bc.ca/common-components/bc-express-pay'
                >
                  BC Express Pay
                </a>{' '}
                or{' '}
                <a
                  className='external-link'
                  rel='noreferrer'
                  target='_blank'
                  href='https://digital.gov.bc.ca/common-components/paybc'
                >
                  PayBC
                </a>{' '}
                as the designated services for accepting online credit card
                payments. Both offer integration options based on usage. The
                same bank account can be used for both in-person and telephone
                payments.
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '2rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.05rem',
                }}
              >
                Telephone
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Program areas can collect credit card payments by telephone
                using the same POS terminal as in-person payments, by onboarding
                to ServiceBC or FrontCounter BC’s call centre services, or by
                using government's IVR payments platform. For PCI compliance,
                you must use traditional phone infrastructure rather than
                government’s Unified Communications (UC) infrastructure. In some
                cases, the IVR system requires manual confirmation of client
                identity before entering credit card details.
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '2rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.05rem',
                }}
              >
                Mail
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Sending payments by mail is currently the least efficient way
                for program areas to transfer or collect funds. Your program can
                choose to collect cheque payments by mail on its own or by
                taking advantage of the{' '}
                <a
                  className='external-link'
                  rel='noreferrer'
                  target='_blank'
                  href='https://digital.gov.bc.ca/common-components/digital-mailroom-and-document-scanning'
                >
                  Digital Mailroom service
                </a>{' '}
                offered by BC Mail Plus. It is not recommended to accept cash or
                credit card payments through the mail.
              </Typography>
            </Item>
          </Stack>
        </Grid>
        <Grid md={12} order={{ xs: 2, md: 1 }}>
          <Divider sx={{}} />
        </Grid>
        <Grid xs={12} md={4} sx={{}} order={{ xs: 2, md: 1 }}>
          <Item
            sx={{
              boxShadow: 'none',
              textAlign: 'left',
            }}
          >
            <Typography
              variant='h2'
              sx={{ fontSize: '1.5rem', fontWeight: '600' }}
            >
              Payment methods
            </Typography>
          </Item>
        </Grid>
        <Grid xs={12} md={8} sx={{}} order={{ xs: 2, md: 1 }}>
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
                paddingTop: '0rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.05rem',
                }}
              >
                Debit / Credit card
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                To set up debit/credit card services, complete an{' '}
                <a
                  className='external-link idir'
                  rel='noreferrer'
                  target='_blank'
                  href='http://gww.fin.gov.bc.ca/gws/pt/bcm/forms/0031FILL.pdf'
                >
                  application
                </a>
                .
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '2rem',
                paddingBottom: '0.5rem',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '600',
                  fontSize: '1.05rem',
                }}
              >
                Bank (options below)
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1rem', fontWeight: '200' }}
              >
                Similar to online credit card payments, but with some key
                differences, bank payments are the fastest growing payment
                method in Canada. The difference is that bank payments don’t
                involve a credit card processor and instead transfer funds
                between bank accounts, either within the same financial
                institution or by using a third party.
              </Typography>
            </Item>
            <Item
              sx={{
                boxShadow: 'none',
                maxWidth: '950px',
                paddingTop: '1rem',
                paddingBottom: '0.5rem',
              }}
            >
              <TabContent />
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PayOption;
