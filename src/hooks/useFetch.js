import { useState, useEffect, useCallback } from "react";
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {API_FAILURE, API_SUCCESS} from '../redux/actionTypes'

const useFetch = ({ method, url, data = null, config = null }) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
    const dispatch = useDispatch();
    const fetchData =useCallback( async () => {
      axios[method](url, JSON.parse(config), JSON.parse(data))
        .then(res => {
        //   setResponse(res.data);
        dispatch ({type:API_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch ({type:API_FAILURE, payload:err})
        //   setError(err);
        })
        // .finally(() => {
        //   setIsLoading(false);
        // });
    },[ method, url, data, config]);

  return fetchData;
};

export default useFetch;


//https://itnext.io/create-custom-fetch-hook-for-multiple-axios-instances-661a73701f73