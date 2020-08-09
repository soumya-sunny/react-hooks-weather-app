
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    
    return (<AppBar>
        <Toolbar>
            {/* className={classes.title} */}
            <Typography variant="h6" noWrap>
            Weather App
          </Typography>
        </Toolbar>
    </AppBar>)
}

export default Header;

