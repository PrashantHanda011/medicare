import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:'600'}}>How to contact with Customer Service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
      <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:'600'}}>App installation failed, how to update system information?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:'600'}}>Website reponse taking time, how to improve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className='acc'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:'600'}}>How do I create a account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
