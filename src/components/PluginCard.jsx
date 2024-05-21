import React from "react";

function PluginCard(props)
{
    return(
      <div className="w-full w-1/3 p-6 border-2 rounded-[20px] applyCard m-[10px]">
        <div className="flex flex-col gap-4">
            <div className="w-full h-50">
                <div className="-ml-10 h-full w-full">
                    <img src={props.src} alt="Image" />
                </div>
            </div>
            <div>
                <h2 className="text-[25px] font-medium sora py-1">{props.title}</h2>
            </div>
            <div>
                <p className="text-lg outfit">{props.desc}</p>
            </div>
        </div>
      </div>
    )
}

export default PluginCard;