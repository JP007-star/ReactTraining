import React, { useEffect, useState } from 'react'

/**
* @author
* @function Timer
**/

export const Timer = (props) => {

    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const timer=setInterval(()=>{
          setTime(new Date());
        },1000)
    },[])

    return (
        <>
            <div>Timer</div>
            <div>{time.toLocaleTimeString()}</div>
        </>
    )

}