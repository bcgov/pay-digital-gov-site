import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Acknowledgment() {
  return (
    <Box
      sx={{
        background: '#036',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '2rem 1rem', md: '7rem 0' },
      }}
    >
      <Box sx={{ maxWidth: '1200px' }}>
        <Stack>
          <Typography
            variant='h2'
            sx={{
              color: '#fff',
              marginBottom: '1rem',
              fontSize: '1.75rem',
              fontWeight: '600',
            }}
          >
            Acknowledgment
          </Typography>
          <Typography variant='p' sx={{ color: '#fff' }}>
            The B.C. Public Service acknowledges the territories of First
            Nations around B.C. and is grateful to carry out our work on these
            lands. We acknowledge the rights, interests, priorities, and
            concerns of all Indigenous Peoples - First Nations, Métis, and Inuit
            - respecting and acknowledging their distinct cultures, histories,
            rights, laws, and governments.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Acknowledgment;
