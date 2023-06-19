import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: '2rem 0rem' }}>
          <Typography sx={{ color: '#666', lineHeight: '1.65' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabContent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#ddd' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs'
          textColor='primary'
          indicatorColor='secondary'
          sx={{ justifyContent: 'space-around' }}
        >
          <Tab
            label='Bill payment'
            {...a11yProps(0)}
            sx={{ textTransform: 'capitalize' }}
          />
          <Tab
            label='Pre-authorized debit (PAD)'
            {...a11yProps(1)}
            sx={{ textTransform: 'capitalize' }}
          />
          <Tab
            label='Interac E-transfer'
            {...a11yProps(2)}
            sx={{ textTransform: 'capitalize' }}
          />
          <Tab
            label='Direct deposit'
            {...a11yProps(3)}
            sx={{ textTransform: 'capitalize' }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          variant='span'
          sx={{
            color: '#222',
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: '0.95rem',
            display: 'block',
          }}
        >
          Bill payment
        </Typography>
        Most banks and financial institutions offer bill payment services for
        their clients. Bill payment services can generally be accessed through
        online banking, an automated teller machine (ATM), or telephone banking.
        Your program area will work with Banking and Cash Management branch’s{' '}
        <a
          className='external-link'
          rel='noreferrer'
          target='_blank'
          href='mailto:BankingRelations@gov.bc.ca'
        >
          banking relations team
        </a>{' '}
        to set up a payee name. This will be used by your clients to indicate
        that they are making a payment to your program. Invoices must be account
        based to use this service to ensure that the client’s payment is applied
        to the correct accounts receivable entry.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          variant='span'
          sx={{
            color: '#222',
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: '0.95rem',
            display: 'block',
          }}
        >
          Pre-authorized debit (PAD)
        </Typography>
        Pre-authorized debits allow your program to collect payments
        electronically by pulling funds directly from a client’s bank account.
        This payment method is best suited for recurring transactions from a
        large client base, such as monthly or annual fees. Your program area
        will work with Banking and Cash Management branch’s{' '}
        <a
          className='external-link'
          rel='noreferrer'
          target='_blank'
          href='mailto:bcmsupport@gov.bc.ca'
        >
          payment and client services team
        </a>{' '}
        to create a PAD agreement. This agreement will be used by your client to
        supply bank account information and will include applicable payment
        terms and conditions.
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          variant='span'
          sx={{
            color: '#222',
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: '0.95rem',
            display: 'block',
          }}
        >
          Interac E-transfer
        </Typography>
        This is a bulk payment method for outbound payments. It is similar to
        direct deposit, but does not require that your program area collect and
        use client bank account information. Instead, your clients receive an
        email or text message with instructions for depositing the funds in
        their bank account. Please contact Banking and Cash Management branch’s{' '}
        <a
          className='external-link'
          rel='noreferrer'
          target='_blank'
          href='mailto:BankingRelations@gov.bc.ca'
        >
          banking relations team
        </a>{' '}
        for more information.
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography
          variant='span'
          sx={{
            color: '#222',
            marginBottom: '0.5rem',
            fontWeight: '600',
            fontSize: '0.95rem',
            display: 'block',
          }}
        >
          Direct deposit
        </Typography>
        Direct deposit, also known as outgoing electronic funds transfer (EFT),
        is a way for your program area to send funds directly to your client’s
        bank account. It is similar to pre-authorized debit in that it requires
        your program area to collect and use your client’s bank account details
        to ensure that the payment is routed correctly. Your program area will
        work with Banking and Cash Management branch’s{' '}
        <a
          className='external-link'
          rel='noreferrer'
          target='_blank'
          href='mailto:fintrsps@gov.bc.ca'
        >
          payment and client services team
        </a>{' '}
        to create a direct deposit form. This form, along with a void cheque,
        will be used by your client to supply bank account information.
      </TabPanel>
    </Box>
  );
}
export default TabContent;
