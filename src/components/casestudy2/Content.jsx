import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

function Content() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '7rem 0', background: '#fff' },
      }}
    >
      <Box sx={{ maxWidth: '1200px' }}>
        <Stack spacing={12}>
          <Grid container spacing={{ xs: 8, md: 0 }} sx={{ width: '1200px' }}>
            <Grid md={4} xs={12}>
              <Typography
                variant='h2'
                sx={{
                  color: '#222',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}
              >
                Background
              </Typography>
            </Grid>
            <Grid md={8}>
              <Typography
                variant='p'
                sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
              >
                Corporate Services for the Natural Resource Ministries (CSNR) is
                an integrated, shared-services organization within the public
                service that provides corporate services to over 7,000 clients
                in the Natural Resource (NR) ministries, including Agriculture,
                Food and Fisheries. CSNR provides a single point of contact
                service to help citizens learn about and apply for licences,
                permits, registrations and other authorizations required to
                utilize the Province’s natural resources.
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  color: '#222',
                  lineHeight: '1.85',
                  fontSize: '1rem',
                  margin: '2rem 0 0.5rem 0',
                }}
              >
                Motivation for Change
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
              >
                In 2010, the Natural Resources Sector implemented an e-licensing
                solution that integrated licensing and revenue collection,
                replacing the previous system of using the Government Agent
                Revenue Management System (GARMS) for in-person payments and
                separate systems for licensing and permitting information. This
                eliminated the need for counter agents to navigate between
                multiple systems, streamlining the process of issuing licenses
                and collecting payments. E-licensing now serves as both a
                sub-ledger for accounting and the system of record for various
                licensing and permitting applications.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 8, md: 0 }} sx={{ width: '1200px' }}>
            <Grid md={4} xs={12}>
              <Typography
                variant='h2'
                sx={{
                  color: '#222',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}
              >
                Challenges
              </Typography>
            </Grid>
            <Grid md={8}>
              <Typography
                variant='h5'
                sx={{
                  color: '#222',
                  lineHeight: '1.85',
                  fontSize: '1rem',
                  margin: '0 0 0.5rem 0',
                }}
              >
                Payment options
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
              >
                Over the years, and based on feedback from citizens and
                stakeholders, the Natural Resource Sector (NRS) has added
                various payment options for licensing programs. Previously,
                citizens had to visit a government office or a service delivery
                partner to purchase hunting or angling licenses. In addition to
                retaining these in-person options, NRS has also introduced
                online credit card payments and telephone-based payments.
                Angling and hunting licenses are annual, one-time purchases,
                whereas water licensing serves both commercial and residential
                audiences with ongoing bills. To accommodate this, NRS has
                introduced online bill payment options for residents and
                businesses, especially electronic funds transfer (EFT) for
                businesses, to facilitate convenient and efficient payment
                processing for this service.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 8, md: 0 }} sx={{ width: '1200px' }}>
            <Grid md={4}>
              <Typography
                variant='h2'
                sx={{
                  color: '#222',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}
              >
                Solutions
              </Typography>
            </Grid>
            <Grid md={8}>
              <Typography
                variant='p'
                sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
              >
                E-licensing has experienced significant growth, driven by user
                feedback and continuous improvements. The implementation of
                E-licensing has resulted in increased convenience for citizens,
                as it offers multiple payment options and supports various
                technical features. This not only benefits citizens, but also
                government employees, as it reduces human error, minimizes time
                spent searching through paper documents, and improves reporting
                capabilities. The overall E-licensing provides enhanced
                efficiency in managing licensing programs. The success of
                E-licensing can be attributed to its user-centric approach,
                incorporating feedback from stakeholders and prioritizing ease
                of use to meet the needs of both citizens and government
                employees.
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  color: '#222',
                  lineHeight: '1.85',
                  fontSize: '1rem',
                  margin: '2rem 0 0.5rem 0',
                }}
              >
                Benefits
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
              >
                Citizens can now conveniently purchase angling and hunting
                licenses from the comfort of their homes outside of core hours,
                or via telephone at the lakeshore. For water licensing, the
                transition to bank payments has proven to be much more
                convenient for consumers, eliminating the need to visit a
                government office or send cheques by mail. For those who still
                prefer to send cheques, NRS has implemented QR codes and the BC
                Mail Plus’ Digital Mailroom service to ensure proper coding and
                digital depositing of paper cheques without the need to visit
                the bank, resulting in reduced errors and overhead costs.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}

export default Content;
