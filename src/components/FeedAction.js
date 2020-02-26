import React from "react"


const FeedAction = ({setHunger}) =>{
const feed = ()=>{
    setHunger(hunger=>{
    let newHunger = hunger + 5;
    if(newHunger>100)
      return 100;
        
    return newHunger;
    })
}
    return (
        <div onClick={feed} className="button button--a">
        Feed
        </div>
    );
}

export default FeedAction;