import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import  './day.css';

const Day = ({data, date}) => {
  const {temp_min, temp_max}= data;
    return (<Paper className="wrapper">
        <Typography variant="h5" noWrap>
            {date}
          </Typography>
        <Typography variant="h6" noWrap>
            {temp_max}&deg;
          </Typography>
        <Typography variant="span" noWrap>
            {temp_min}&deg;
          </Typography>
    </Paper>);
}

export default Day;