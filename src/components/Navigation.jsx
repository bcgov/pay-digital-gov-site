import { NavLink } from '../data';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import BcGovLogo from '../images/BCID_H_rgb_pos.png';
import Widget from './Widget';

function Navigation() {
  const [scroll, setScroll] = useState(null);
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScroll(scrollY > lastScrollY ? 'down' : 'up');

      if (scrollY > 500) {
        setWidget('on');
      } else {
        setWidget('off');
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll]);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    if (isActive) {
      setAnchorElNav(null);
    }
    setIsActive(!isActive);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsActive(false);
  };

  return (
    <Box name='nav'>
      <AppBar
        position='fixed'
        sx={{
          background: scroll === 'down' ? '#fff' : '#fff',
          borderBottom: scroll === 'down' ? 'none' : '1px solid #eee',
          boxShadow:
            scroll === 'down' ? 'rgb(0 0 0 / 12%) 0px 1px 10px 0px' : 'none',
          padding: { xs: '0.25rem 1rem', md: '0.125rem 0' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            width: { xs: '100%', md: '1250px' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link
              href='/'
              className={isActive ? 'home-link animation' : 'home-link'}
              activeClass='active'
              to='main'
              spy={true}
              smooth={true}
              duration={100}
              delay={0}
            >
              <Box
                src={BcGovLogo}
                width={182}
                component='img'
                alt='BC Gov Logo'
                className='logo'
              />
              <Divider
                orientation='vertical'
                variant='middle'
                sx={{
                  borderWidth: '1px',
                  height: '30px',
                  marginLeft: '0.25rem',
                  borderColor: '#036',
                }}
              />
              <Typography
                sx={{
                  fontSize: '1.05rem',
                  fontWeight: '400',
                  marginLeft: '1rem',
                  letterSpacing: '0.025rem',
                  color: '#444',
                }}
              >
                Digital Government Payments
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '35px',
              height: '35px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className='nav-icon-wrapper'
          >
            <IconButton
              size='large'
              aria-label='mobiel nav'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              className={isActive ? 'animation' : null}
              sx={{ color: '#222', padding: '0.25rem 0rem' }}
            >
              <Box className='bar-wrap'>
                <Typography variant='span' className='bar'></Typography>
                <Typography variant='span' className='bar'></Typography>
                <Typography variant='span' className='bar'></Typography>
              </Box>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NavLink.map((link) => (
                <MenuItem
                  key={link.name}
                  sx={{
                    justifyContent: 'center',
                    minWidth: '100px',
                    margin: '1.75rem 0',
                  }}
                >
                  <Link
                    key={link.id}
                    activeClass='active'
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={100}
                    delay={0}
                    onClick={handleCloseNavMenu}
                    className='nav-link'
                  >
                    <Typography
                      component='span'
                      className='menu'
                      sx={{ fontSize: '1.25rem' }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: 'flex-end',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {NavLink.map((link) => (
              <Link
                key={link.id}
                activeClass='active'
                to={link.path}
                spy={true}
                smooth={true}
                offset={-72}
                duration={100}
                delay={0}
                className='nav-link'
              >
                <Typography
                  component='span'
                  className='menu'
                  sx={{ fontSize: '0.9rem', marginLeft: '1.75rem' }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {widget === 'on' ? <Widget /> : ''}
    </Box>
  );
}

export default Navigation;
