'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DropdownIcon from '../Icons/DropdownIcon';

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
            Neque ullamcorper mattis leo netus integer etiam quis. Non odio
            pellentesque massa pretium facilisis nulla. Sit pharetra porttitor
            nulla id.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SupportAccordion;
