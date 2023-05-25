'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DropdownIcon from '../Icons/DropdownIcon';
import Link from 'next/link';

function SupportAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is Zesha?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Zesha is a platform that empowers content creators to earn from
            creating content they love, and viewers alike make from engaging
            with the content they love. We are building a more inclusive web
            where everyone benefits - from the creator to the viewer to the
            platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How does Zesha work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Zesha works in different ways for content creators and viewers.
          </Typography>
          <br />

          <Typography>
            If you&apos;re a content viewer, Zesha provides a browser extension (and
            in the future, a mobile app) that allows you to earn rewards when
            you engage with ads on videos from content creators. These rewards
            can be redeemed for gift cards, exclusive offers, charity donations,
            or even withdrawn directly as <Link href="https://coinmarketcap.com/currencies/theta-fuel/" target={'_blank'} className='underline text-[#046ed1]'>TFUEL.</Link>
          </Typography>
          <br />

          <Typography>
            The extension recommends videos based on your interests and
            frequency preferences. You can choose to watch either in full mode,
            which opens the video on a new page, or in distraction-free mode,
            which overlays the video player in a floating window. At the same
            time, you can continue your work in other tabs of your browser.
          </Typography>
          <br />

          <Typography>
            With Zesha, you can also support your favorite content creators
            through tips, subscriptions, and premium content.{' '}
          </Typography>
          <br />

          <Typography>
            If you&apos;re a content creators, see the{' '}
            <Link href="/creators" className='underline text-[#046ed1]'>
              Creators section
            </Link>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>How do I start earning on Zesha?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a viewer, download the Chrome extension and follow the
            installation instructions. Then create a Zesha account and set your
            interests and preferences. Based on these interests and preferences,
            we&apos;ll send you a recommended list of videos a few times during the
            day.
          </Typography>
          <br />
          <Typography>
            Whenever you watch an ad within each video, you&apos;ll get paid an
            amount of TFUEL. Your TFUEL rewards keep increasing with the more
            videos and ads you watch.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SupportAccordion;
