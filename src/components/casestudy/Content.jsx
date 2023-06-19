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
                BC Registries and Online Services is a branch within the
                Ministry of Citizens’ Services responsible for key databases and
                services that support the registration of corporations,
                societies, manufactured homes, and personal property. The branch
                is also responsible for the transformation of BC OnLine, a
                legacy portal allowing lawyers and corporate clients to access
                data from various government systems. In addition to the
                registries listed above, BC OnLine provided access to registries
                of wills, court filings, and the tax and environmental standing
                of rural land parcels.
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
                The payment modernization project was the result of the
                repatriation of BC OnLine from an outsourced service provider
                back to government. BC OnLine was previously used by lawyers,
                notaries, and other professionals to access government systems.
                Over the years, BC Registries also provided web-based access to
                its core business registries, allowing sole proprietors and
                smaller businesses to file corporate documents without a BC
                OnLine account. With the repatriation of BC OnLine, there was an
                opportunity to rationalize the number of web-based interfaces to
                these systems and to provide a more consistent user experience.
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
                The previous programs only allowed credit card payments but
                didn't have the pre-authorized debit (PAD) option. This could
                cause confusion among users, especially since other programs
                might offer PAD as a payment option. Also, there are people who
                either don't have a credit card or aren't comfortable using
                them, which could limit their ability to use the service.
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
                Automated refunds
              </Typography>
              <Typography
                variant='p'
                sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
              >
                When first using PayBC, there was no automated way to do credit
                card refunds. As a result, the manual refund process could take
                as long as four weeks to complete. With support from PayBC, an
                automated refund system is now in place and refunds are
                available next day.
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
                The modernized platform utilizes various payment channels and
                options available within the government’s payment ecosystem. For
                instance, BC Registries and Online Services use PayBC to process
                online credit card and pre-authorized debit (PAD) payments.
                In-person payments can also be made at Service BC offices, which
                offer the flexibility to pay through PAD or online bill
                payments.
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
                The implementation of standardized payment methods across all
                registries provides a consistent service experience for all
                users, especially for corporate clients. The following groups
                can benefit from the services offered by BC Registries:
              </Typography>
              <ul className='bullet-list'>
                <li sx={{ display: 'listItem' }}>
                  <Typography
                    variant='p'
                    sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
                  >
                    Lawyers, notaries, and other legal professionals acting on
                    behalf of corporations
                  </Typography>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <Typography
                    variant='p'
                    sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
                  >
                    Accountants acting on behalf of corporations
                  </Typography>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <Typography
                    variant='p'
                    sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
                  >
                    Small business owners representing their corporations or
                    acting as sole-proprietors
                  </Typography>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <Typography
                    variant='p'
                    sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
                  >
                    Non-profit societies
                  </Typography>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <Typography
                    variant='p'
                    sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
                  >
                    Owners of manufactured homes
                  </Typography>
                </li>
                <li sx={{ display: 'listItem' }}>
                  <Typography
                    variant='p'
                    sx={{ color: '#666', lineHeight: '1.85', fontSize: '1rem' }}
                  >
                    Individuals seeking to register or clear liens on private
                    property
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}

export default Content;
