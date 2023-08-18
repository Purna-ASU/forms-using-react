// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     comments: "",
//     isFriendly: true,
//     employment: "",
//     favColor: ""
//   })

//   function handleChange(event) {
//     const {name, value, type, checked} = event.target
//     setFormData(prevFormData => {
//       return{
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     console.log(formData)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type='text' placeholder='FirstName' onChange={handleChange} name='firstName' value={formData.firstName}></input>
//       <input type='text' placeholder='LastName' onChange={handleChange} name='lastName' value={formData.lastName}></input>
//       <input type='email' placeholder='Email' onChange={handleChange} name='email' value={formData.email}></input>
//       <textarea placeholder='Comments' onChange={handleChange} name='comments' value={formData.comments}/>
//       <input type='checkbox' onChange={handleChange} name='isFriendly' id='isFriendly' checked={formData.isFriendly} />
//       <label htmlFor='isFriendly'>is Friendly?</label>
//       <br />
//       <fieldset>
//         <legend>Current Employment Status</legend>
//         <input type='radio' id='unemployed' onChange={handleChange} name='employment' value="unemployed"/>
//         <label htmlFor='unemployed'>Unemployed</label>
//         <br/>
//         <input type='radio' id='part-time' onChange={handleChange} name='employment' value="part-time"/>
//         <label htmlFor='part-time'>Part Time</label>
//         <br/>
//         <input type='radio' id='full-time' onChange={handleChange} name='employment' value="full-time"/>
//         <label htmlFor='full-time'>Full Time</label>
//         <br/>
//       </fieldset>
//       <label htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select id="favColor" onChange={handleChange} name='favColor' value={formData.favColor}>
//                 <option value="">-- Choose --</option>
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//             <br />
//             <br />
//       <button>Submit</button>
//     </form>
//   )
// }

// export default App

import React from "react"
import './App.css'
import { useState } from 'react'

function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      okayToEmail: true
    })

    function handleChange(event) {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      if(formData.password === formData.passwordConfirm) {
          console.log("Successfully signed up")
      } else {
          console.log("Passwords do not match")
          return
      }
      
      if(formData.joinedNewsletter) {
          console.log("Thanks for signing up for our newsletter!")
      }
  }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    onChange={handleChange}
                    className="form--input"
                    name="email"
                    value={formData.email}
                    
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    className="form--input"
                    name="password"
                    value={formData.password}
                    
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    onChange={handleChange}
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="okayToEmail"
                        checked={formData.okayToEmail}
                        
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default App