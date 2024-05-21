import React from "react";

function Footer()
{
return(
    <div className="gradient w-screen flex justify-center">
        <div className="maxWidth w-full flex pt-2">
            <div className="w-1/2 p-2">
                <p className="text-base outfit">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
            </div>
            <div className="w-1/2 flex justify-end gap-2 p-2">
                <span>Documentation</span>
                <span>Support</span>
            </div>
        </div>
    </div> 
)
}

export default Footer;