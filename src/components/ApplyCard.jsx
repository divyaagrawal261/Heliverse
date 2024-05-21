import React from "react";

function ApplyCard(props)
{
    return(
      <div className="w-full p-6 border-2 rounded-[20px] applyCard">
        <div className="flex flex-col gap-4">
            <h1 className="lg:text-[25px] sora">Apply On {props.tag}</h1>
            <p className="outfit text-lg leading-[30px]">{props.text}</p>
            <img src={props.img} alt="image" />
        </div>
      </div>
    )
}

export default ApplyCard;