import React from "react";
import stars from "../assets/stars.png";   

function RatingCard(props)
{
    return(
        <>
        <div className="flex">
            <img src={props.src}/>
            <div className="flex ml-2 mt-2 flex-col justify-end">
                <img src={stars} className="h-5"/>
                <p className="text-sm mt-5 sora mb-2"><b>4.5</b> Score, 9 Reviews</p>
            </div>
        </div>
        </>
    )
}

export default RatingCard;