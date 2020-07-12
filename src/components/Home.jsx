import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


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
    const history = useHistory();

    const getForecast =()=>{
        history.push("/forecast");
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    };
    const classes = useStyles();
    return (
        <Grid container={true} className={classes.root} justify="space-around" spacing={2} alignItems="center" direction={"column"}>
            {/* <Grid container  sm={12} md={10} lg={10} justify="center"> */}
            <Typography variant="h6" noWrap>
                Choose your city
          </Typography>

            <FormControl className={classes.selectFormControl}>
                {/* <InputLabel id="demo-simple-select-label">Choose your city</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Bangalore</MenuItem>
                    <MenuItem value={20}>Gurgaon</MenuItem>
                    <MenuItem value={30}>London</MenuItem>
                    <MenuItem value={30}>Newyork</MenuItem>
                </Select>
            </FormControl>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="unit" name="unit" defaultValue="celcius">
                    <FormControlLabel value="celcius" control={<Radio color="primary" />} label="Celcius" />
                    <FormControlLabel value="fahrenheit" control={<Radio color="primary" />} label="Fahrenheit" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" onClick={getForecast}>
                Get Forecast
            </Button>
        </Grid>
    );
}

export default Home;