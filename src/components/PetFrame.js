import React from 'react';


const PetFrame =props =>{
    return(
    <div className="PetFrame">
         <div class="loop"></div>
       <div className ="PetFarme-inner">
           hiii
       </div>
        {/* src={props.userData.avatar}  */}
        <img src="https://www.tynker.com/projects/screenshot/58a47dc8949b56e02b8b48a9/pekmon-mlg-eat-donritos-and-mtn-dew.png" />
        
     
         <div className="buttons">
         <div className="button button--a">
             foot
         </div>
         <div className="button button--b">
             pet
         </div>
         <div className="button button--c">
             hit
         </div>
       </div> 
        </div> 
    )
}

export default PetFrame ;