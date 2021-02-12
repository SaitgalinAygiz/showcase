import {useEffect, useState, useCallback} from "react";
import axios from 'axios';
const https = require('https');

export default url => {
    const baseUrl = 'https://krapipl.imumk.ru:8443/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }, [])

    useEffect(() => {
        const requestOptions = {
            ...options,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        }

        if (!isLoading) {
            return
        }

        axios(baseUrl + url, requestOptions, )
            .then(res => {
                console.log('success', res)
                setIsLoading(false)
                setResponse(res.data)
            })
            .catch(error => {
                console.log('error', error)
                setIsLoading(false)
                setError(error)
            })
    }, [isLoading, options, url])

    return [{isLoading, response, error}, doFetch]
}
