import React from "react"
import axiosGet from "../utils/axiosGet"


const StartFrame = ({ setUserData }, ...props) => {
  const [errState, setErrState] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const apiUrl = `https://api.github.com/users/${username}?access_token=${process.env.REACT_APP_GITHUB_TOKEN}`
    axiosGet(apiUrl)
      .then(data => {
        setUserData(data.data)
        setErrState(false)
      })
      .catch(err => {
        setErrState(err);
      });

  }
  return (

    <div>
      <div className="loop"> </div>
      <div className='input-form-container'>
        <div className='start'>PetHub</div>
        <br></br>
        <form onSubmit={handleSubmit} >
          <label htmlFor='username'>
          <input data-testid='username' id="name-input" placeholder="GitHub Username" autoComplete="off" name='username' type='text' />
          </label>
          <button id='submit-btn' type='submit' value='Submit'>
            ➜
    </button>
        </form>
        {errState && <span className='err-msg'>Error .. try again</span>}
        <div className='img'>
          <a href="https://github.com/FACN8/PetHub/blob/master/README.md"><img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
          </a>

        </div>
      </div>
    </div>

  )
}

export default StartFrame;
