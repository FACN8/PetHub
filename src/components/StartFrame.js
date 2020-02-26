import React from "react"
import axiosGet from "../utils/axiosGet"
import "./StartFrame.css"


const StartFrame = ({setUserData},...props) =>{
    const [errState,setErrState] = React.useState(false);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const username = event.target.username.value;
        const apiUrl = `https://api.github.com/users/${username}?access_token=${process.env.REACT_APP_GITHUB_TOKEN}`
        axiosGet(apiUrl)
        .then(data => {
            setUserData(data.data)
            setErrState(false)
        })
        .catch(err=> {
            setErrState(err);
        });
        
        }
  return (
    <div className='input-form-container'>
      <div className='start'>PetHub</div>
      <br></br>
    <form onSubmit={handleSubmit} >
    <label htmlFor='username'>
    <input name='username' type='text' />
    </label>
    <button  id='submit-btn' type='submit' value='Submit'>
    ➜
    </button>
    </form>
    {errState && <span className='err-msg'>Error .. try again</span>}
    <div className='img'>
       <img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
    </div>
    </div>
  )
}

export default StartFrame;
