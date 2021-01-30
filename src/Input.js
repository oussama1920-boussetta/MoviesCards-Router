import React from "react";





export function Input({setMyInput}) {
   

    return (
        <div>
            <input
                type="text"
                placeholder=" Search Film"
                onChange={(e) => setMyInput(e.target.value)}
            />
        </div>
    )
}


