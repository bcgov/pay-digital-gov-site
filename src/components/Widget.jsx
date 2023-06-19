import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

function Widget(props) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Copy');

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (visible && ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [visible]);

  const url = window.location.href;

  const handleToggle = () => {
    setVisible((current) => !current);
    setText('Copy');
  };
  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setTimeout(() => {}, 1000);
    setText('Copied');
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        right: '0px',
        bottom: '0px',
        zIndex: '5',
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingTop: '15px',
        paddingRight: '20px',
        paddingBottom: '15px',
        paddingLeft: '15px',
        alignTtems: 'flex-end',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '0',
          flexShrink: '0',
          height: '110px',
          padding: '0.5rem 0',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '36px;',
          justifyContent: 'space-around',
        }}
      >
        <Link
          href='/'
          to='nav'
          spy={true}
          smooth={true}
          duration={100}
          delay={0}
        >
          <Button
            sx={{
              color: '#fff',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: '0.85',
              minWidth: '54px',
              fontSize: '0.5rem',
              ':hover': {
                bgcolor: 'transparent',
              },
              ':hover > svg': {
                color: '#888',
                borderTopColor: '#888',
              },
            }}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='arrow-up'
              className='arrow-up'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
              width='16px'
            >
              <path
                fill='currentColor'
                d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z'
              ></path>
            </svg>
          </Button>
        </Link>
        <Button
          onClick={handleToggle}
          sx={{
            color: '#fff',
            textAlign: 'center',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '0.85',
            minWidth: '54px',
            fontSize: '0.5rem',
            ':hover': {
              bgcolor: 'transparent',
            },
            ':hover > svg': {
              color: '#888',
            },
          }}
        >
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='link'
            className='link-copy'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
            width='24px'
          >
            <path
              fill='currentColor'
              d='M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z'
            ></path>
          </svg>
        </Button>
      </Stack>
      {visible ? (
        <Box
          sx={{
            minWidth: '250px',
            maxWidth: '300px',
            marginRight: '1rem',
            background: '#fff',
            padding: '0.85rem',
            borderRadius: '0.25rem',
            height: '100%',
            boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px',
            border: '1px solid #eee',
            marginTop: '0rem',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
            }}
          >
            Permanent link to page:
          </Typography>
          <Stack
            direction='row'
            sx={{
              border: '1px solid #ddd',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            }}
            spacing={0.5}
          >
            <input
              type='text'
              aria-label='Share permanent link text'
              onChange={({ target }) => {
                setText(target.value);
              }}
              value={url}
              readOnly
              className='widget-input'
            />
            <Button
              type='button'
              aria-label='Copy to clipboard button'
              onClick={handleClick}
              variant='contained'
              sx={{
                boxShadow: 'none',
                textTransform: 'capitalize',
                background: text === 'Copied' ? '#F8D165' : '#036',
                color: text === 'Copied' ? '#222' : '#fff',
                width: '88px',
                ':hover': {
                  bgcolor: text === 'Copied' ? '#F8D165' : '#036',
                  boxShadow: 'none',
                },
              }}
            >
              {text}
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Widget;
