import React from 'react';


const PetFrame = props => {
   return (
      <div>
         <div className="loop"></div>
         <div className="PetFarme-inner">
         </div>

         <div className="name">
            <h1>
               {props.userData.name || props.userData.login}
            </h1>
         </div>
         <div className='img-user'>
            <img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
         </div>
         <br></br>

      </div>
   )
}

export default PetFrame;