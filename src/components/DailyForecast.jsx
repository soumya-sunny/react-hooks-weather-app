import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Day from './Day'
// import classes from '*.module.css';

// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        marginTop: '65px'
    }
}));


function DailyForecast() {
    const classes = useStyles();
    return (
        <Grid container={true} className={classes.root} justify="center" spacing={2}>
            <Grid container  sm={12} md={10} lg={10} justify="center">
                <Typography variant="h6" noWrap>
                    5 day Forecast
          </Typography>
            </Grid>
            <Grid container  sm={12} md={10} lg={10} justify="center"   direction="row">
                <Grid sm={2} md={2} lg={2}>
                    <Day />
                </Grid>
                <Grid sm={2} md={2} lg={2}>
                    <Day />
                </Grid>
                <Grid sm={2} md={2} lg={2}>
                    <Day />
                </Grid>
                <Grid sm={2} md={2} lg={2}>
                    <Day />
                </Grid>
                <Grid sm={2} md={2} lg={2}>
                    <Day />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DailyForecast;