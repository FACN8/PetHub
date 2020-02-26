import React from 'react';


const PetFrame =props =>{
    return(
    <div>
         <div className="loop"></div>
       <div className ="PetFarme-inner">
       </div>
       <img alt='avatar-img' src={props.userData.avatar_url} />
        {/* <img src="https://www.tynker.com/projects/screenshot/58a47dc8949b56e02b8b48a9/pekmon-mlg-eat-donritos-and-mtn-dew.png" /> */}
        
     
         {/* <div className="buttons">
         <div className="button button--a">
             foot
         </div>
         <div className="button button--b">
             pet
         </div>
         <div className="button button--c">
             hit
         </div>
       </div>  */}
    </div> 
    )
}

export default PetFrame ;