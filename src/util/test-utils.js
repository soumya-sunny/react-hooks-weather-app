import React from 'React';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../redux/reducers";


const ReduxWrapper = ({children, state={}}) => {
    const store = createStore(rootReducer,state);
  
    return (
      <Provider store={store}> 
       {children}
      </Provider>
    )
  }
export {ReduxWrapper}