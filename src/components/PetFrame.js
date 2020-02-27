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
         <div className='img'>
            <a href="https://github.com/FACN8/PetHub/blob/master/README.md"><img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
            </a>

         </div>
         <br></br>

      </div>
   )
}

export default PetFrame;