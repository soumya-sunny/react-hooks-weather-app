import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home';
import HourlyForecast from './components/HourlyForecast';
import Forecast from './components/Forecast/Forecast';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forecast" component={Forecast} />
            <Route exact path="/hourly-forecast" component={HourlyForecast} />
        </Switch>
    </App> )

export default Routes