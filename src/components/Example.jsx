import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '../../src/components/Item';

function Example() {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        background: '#f8f8f8',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '7rem 0' },
      }}
      name='pre'
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
        >
          <Stack
            spacing={1}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
            direction='row'
          >
            <Item
              sx={{ boxShadow: 'none', maxWidth: '520px', textAlign: 'left' }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '800',
                  fontSize: '2rem',
                  marginBottom: '1rem',
                }}
              >
                Consider user experience in service delivery
              </Typography>

              <Typography
                variant='p'
                sx={{ color: '#666', fontSize: '1.1rem', fontWeight: '200' }}
              >
                BC government has many different ways to send or receive
                payments. Before deciding on the payment options for your
                stakeholders, take a moment to consider how payment fits into
                their broader government experience.
              </Typography>
            </Item>
          </Stack>
        </Grid>
        <Grid md={6}>
          <Stack direction='row'>
            <Item
              sx={{
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                textAlign: 'left',
                position: 'relative',
                margin: 'auto',
                padding: '2.5rem',
                maxWidth: '500px',
              }}
            >
              <Typography sx={{ lineHeight: '1.9' }}>
                <ManageSearchTwoToneIcon
                  sx={{
                    display: 'block',
                    fontSize: '2rem',
                    color: '#036',
                    marginLeft: '-0.25rem',
                  }}
                />
                Have you ever tried to pay a fine or fee for a government
                service online, only to find that the payment options are
                inconsistent or confusing? It's not uncommon for citizens to
                encounter this issue when interacting with government agencies
                online. In some cases, certain fines or fees can be paid through
                an online portal, while others require payment by mail or
                in-person. This can leave citizens frustrated and unsure about
                why there's a difference in payment options.
              </Typography>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Example;
