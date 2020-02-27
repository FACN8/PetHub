import React from 'react';


const PetFrame = props => {
   return (
      <div>
         <div className="name">
            <img className="user-img" src={props.userData.avatar_url} />
            <h1>
               {props.userData.name || props.userData.login}
            </h1>
         </div>
         <div className='img-user'>
     
            <a href="https://github.com/FACN8/PetHub/blob/master/README.md">
               <img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
            </a>
     
            <h1 id="emoji" className="emoji">{props.status ? "+" + props.status : props.status}</h1>

         </div>
         <br></br>

      </div>
   )
}

export default PetFrame;