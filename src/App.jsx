import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor" onChange={handleChange} name='favColor' value={formData.favColor}>
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
      <button>Submit</button>
    </form>
  )
}

export default App
