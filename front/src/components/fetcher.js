import React, { useEffect, useState } from 'react';

export const Fetcher = () => {
    const url = "http://localhost:3003/api/"
    const[initialState, setIntialState] = useState([])


    useEffect(() => {
        fetch(url,{
        method: 'GET',
        credentials: 'same-origin',
    }).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setIntialState(jsonResponse))
    },[])

    //console.log(initialState)
    return (<div>Number of page refrech {initialState.pageCount}
    </div>)
}


