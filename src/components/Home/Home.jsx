import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { forecastURL } from "../../util/constants"


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        marginTop: '65px',
        height:'400px'
    },
    selectFormControl:{
        width:'110px'
    }
}));


const Home = () => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('');
    const history = useHistory();

    const getForecastData = useFetch({
        // api: githubApi,
        method: "get",
        url: `${forecastURL}q=${city}&units=${unit}`,
    });

    const getForecast =()=>{
      getForecastData();
        history.push("/forecast");
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    };
    const classes = useStyles();



        // api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7



    return (
        <Grid container={true} className={classes.root} justify="space-around" spacing={2} alignItems="center" direction={"column"}>
            <Typography variant="h6" noWrap>
                Choose your city
          </Typography>

            <FormControl className={classes.selectFormControl} variant='outlined'>
              
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    required
                    onChange={handleChange}
                    inputProps={{ "data-testid": "select-city" }}
                >
                    <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                    <MenuItem value={"Gurgaon"}>Gurgaon</MenuItem>
                    <MenuItem value={"London"}>London</MenuItem>
                    <MenuItem value={"New York"}>New York</MenuItem>
                </Select>
            </FormControl>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="unit" name="unit" defaultValue="" onChange={e=>setUnit(e.target.value)}>
                    <FormControlLabel value="metric" control={<Radio color="primary" /> } label="Celcius" />
                    <FormControlLabel value="imperial" control={<Radio color="primary"/>} label="Fahrenheit" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" onClick={getForecast} disabled={!city || !unit}>
                Get Forecast
            </Button>
        </Grid>
    );
}

export default Home;