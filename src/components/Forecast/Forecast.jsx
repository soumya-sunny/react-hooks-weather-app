import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Day from '../Day/Day'
import { useSelector } from 'react-redux';
// import classes from '*.module.css';

// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        marginTop: '65px'
    }
}));


function DailyForecast() {

    const forecasts = useSelector(state => state?.forecasts||[])

    const getFormattedDate = (i) => {
        const today = new Date();
        const nextday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
        const options = { day: 'numeric',weekday: 'short' };
        return nextday.toLocaleDateString("en-US", options)
    }

    const classes = useStyles();
    return (
        <Grid container={true} className={classes.root} justify="center" spacing={2}>
            <Grid container justify="center">
                <Typography sm={12} md={10} lg={10} variant="h6" noWrap>
                    5 day Forecast
          </Typography>
            </Grid>
            <Grid container sm={12} md={10} lg={10} justify="center" direction="row">
                {forecasts.map((forecast, i) => {
                    const formattedDate = getFormattedDate(i); return (<Grid item sm={2} md={2} lg={2} data-testid="forecast-container">
                        <Day data={forecast.main} date={formattedDate} />
                    </Grid>)
                })}

            </Grid>
        </Grid>
    );
}

export default DailyForecast;