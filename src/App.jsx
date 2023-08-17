import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })
  console.log(formData)
  function handleChange(event) {
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form>
      <input type='text' placeholder='FirstName' onChange={handleChange} name='firstName'></input>
      <input type='text' placeholder='LastName' onChange={handleChange} name='lastName'></input>
    </form>
  )
}

export default App
