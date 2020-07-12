import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { Container } from './styles';

const Day = () => {
    return (<Paper>
        <Typography variant="h5" noWrap>
            Today
          </Typography>
        <Typography variant="h6" noWrap>
            28&deg;C
          </Typography>
        <Typography variant="span" noWrap>
            21&deg;C
          </Typography>
    </Paper>);
}

export default Day;