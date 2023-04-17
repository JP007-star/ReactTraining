import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'


/**
* @author
* @function Home
**/

export const Home = () => {



const [time,setTime]=useState(new Date());




  useEffect(()=>{
      const timer=setInterval(()=>{
        setTime(new Date());
      },1000)
  },[])



  return(
    <>
      <Header   name="Ram" style={{color:"red"}}/>
      <center>
      <div>Welcome Home</div>
      <h1>{time.toLocaleTimeString}</h1>
      </center>
      
      <Footer/>
    </>
     
   )

 }