import { Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme } ) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1Aff2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: '#222',
  boxShadow: 'none',
}));

export default Item;