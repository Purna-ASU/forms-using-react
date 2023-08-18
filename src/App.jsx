import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: ""
  })
  console.log(formData)
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <form>
      <input type='text' placeholder='FirstName' onChange={handleChange} name='firstName' value={formData.firstName}></input>
      <input type='text' placeholder='LastName' onChange={handleChange} name='lastName' value={formData.lastName}></input>
      <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formData.email}></input>
      <textarea placeholder='Comments' onChange={handleChange} name='comments' value={formData.comments}/>
      <input type='checkbox' onChange={handleChange} name='isFriendly' id='isFriendly' checked={formData.isFriendly} />
      <label htmlFor='isFriendly'>is Friendly?</label>
      <br />
      <fieldset>
        <legend>Current Employment Status</legend>
        <input type='radio' id='unemployed' onChange={handleChange} name='employment' value="unemployed"/>
        <label htmlFor='unemployed'>Unemployed</label>
        <br/>
        <input type='radio' id='part-time' onChange={handleChange} name='employment' value="part-time"/>
        <label htmlFor='part-time'>Part Time</label>
        <br/>
        <input type='radio' id='full-time' onChange={handleChange} name='employment' value="full-time"/>
        <label htmlFor='full-time'>Full Time</label>
        <br/>
      </fieldset>
    </form>
  )
}

export default App
