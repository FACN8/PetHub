import React from "react"
import axiosGet from "../utils/axiosGet"
import "./StartFrame.css"


const StartFrame = ({setUserData},...props) =>{
    const handleSubmit = (event) =>{
        event.preventDefault();
        const username = event.target.username.value;
        const apiUrl = `https://api.github.com/users/${username}?access_token=${process.env.REACT_APP_GITHUB_TOKEN}`
        axiosGet(apiUrl)
        .then(data => setUserData(data))
        }
  return (
    <div className='input-form-container'>
    <form onSubmit={handleSubmit} >
    <label htmlFor='username'>
    <input name='username' type='text' />
    </label>
    <button  id='submit-btn' type='submit' value='Submit'>
    ➜
    </button>
    </form>
    </div>
  )
}

export default StartFrame;