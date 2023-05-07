import React, { useEffect, useState } from 'react'

/**
* @author
* @function Timer
**/

export const Timer = (props) => {
     // state variable
     const [time, setTime] = useState(new Date())
     const[name,setName]=useState('jp')

     useEffect(()=>{
        setInterval(()=>{
          setTime(new   Date())
        },1000)
        setName("ram")
     })

    

    return (
        <>
            <div>Timer</div>
            <div>{name}</div>
            <div>{time.toLocaleTimeString()}</div>
        </>
    )

}