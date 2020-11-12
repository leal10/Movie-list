
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Movie (props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Movie Details
            {/* <button onClick={(event) => {props.toggleHandler(event, props.title)}}>Watched</button> */}
            <Button onClick={(event) => {props.toggleHandler(event, props.title)}} color="secondary" variant="outlined" size="small">Watched</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}



// import React from 'react';

// const Movie = (props) => (
//   <div>
//     {props.title}
//     <button onClick={(event) => {props.toggleHandler(event, props.title)}}>Watched</button>
//   </div>
// )
// export default Movie;

