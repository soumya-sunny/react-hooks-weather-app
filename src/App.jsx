import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/Home/Home'
import Header from './components/Header/Header';


function App(props) {
  return (
    <> <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {props.children}
      </Container>
    </>
  );
}

export default App;
