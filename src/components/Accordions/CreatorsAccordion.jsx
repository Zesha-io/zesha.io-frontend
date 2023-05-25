'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DropdownIcon from '../Icons/DropdownIcon';
import Link from 'next/link';

function CreatorsAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do I earn as a creator?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul>
              <li>
                <Typography>Sign up on Zesha</Typography>
              </li>
              <li>
                <Typography>Upload videos</Typography>
              </li>
              <li>
                <Typography>
                  Promote your videos so your followers can watch them on Zesha
                </Typography>
              </li>
              <li>
                <Typography>
                  You&apos;ll automatically get paid in your Zesha wallet.
                </Typography>
              </li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I promote Zesha to my followers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We want to help you earn more. We have a wide range of promotional
            resources, including banners, short videos, and scripts you can use
            to promote Zesha to your fand and followers. To access these
            resources, please message us on Telegram or send us an email at{' '}
            <Link href="malito:creators@zesha.io" className='text-[#046ed1] underline'>creators@zesha.io.</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>How do I redeem my earnings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To access your payout options, go to the{' '}
            <Link href="/individual/payouts" className='underline text-[#046ed1]'>Payouts</Link> link on your Creator Dashboard.
          </Typography>
          <br/>
          <Typography>
            Zesha offers multiple payout options, including gift cards, wallet
            transfers, and charity donations (coming soon!). With Wallet
            Transfer, you can send your TFUEL rewards to another crypto wallet.
            To access gift card payouts, you need at least $5 worth of TFUEL in
            your wallet. Click on the gift card option on the Payouts page, and
            we&apos;ll send the equivalent amount to your registered email. Charity
            donations are coming soon!
          </Typography>
          <br/>

          <Typography>
            We're planning to add more payout options gradually. When exactly it
            will happen depends on things like how many people are using Zesha
            and any technical issues that might come up. Whenever it does
            happen, we'll make sure to let everyone know about it so you don&apos;t
            miss out!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CreatorsAccordion;
