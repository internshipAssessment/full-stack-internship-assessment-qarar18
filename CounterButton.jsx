import React, { useState } from "react";

let counter=0;
function incButton()
{
    return counter++;
}
function decbutton(){
    return counter--;
    if (counter < 0)
    {
       prompt("Not Possible");
       counter == 0;
    }
}

function CounterButton()
{
    return (
        <div className="main_div">
            <div className="inc_button">
            <button onClick={incButton}>Counter Click To increment</button>
            </div>
            <br />
            <div className="dec_button">
            <button onClick={decbutton}>Counter Click to decement</button>
</div>
        </div>
    )
}


function button()
{
    let [initial_nm, updated_state] = useState(0);

    return (
        <div className="main_div1">
            <div className="inc1_button">
            <button onClick={updated_state=useState()+=1}>Counter Click To increment</button>
            <div className="dec1_button">
                <button onClick={updated_state()-=1}>Counter Click To decrement</button>
            </div>

            </div>

        </div>



    )




}
