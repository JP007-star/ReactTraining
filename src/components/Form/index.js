import React, { useState } from 'react'

/**
* @author
* @function Form
**/

export const Form = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      
      const handleInputChange=(event)=>{
          const {name ,value}=event.target
          setFormData({...formData,[name] :value})
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
      //  alert(JSON.stringify(formData));
        // Perform validation and submit data to the server
        console.log(formData);
      };
  return(
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      required
    />


    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      required
    ></textarea>

    <button type="submit">Submit</button>
  </form>
   )

 }