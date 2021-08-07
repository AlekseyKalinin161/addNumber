import React, {useState} from "react";
import {Button} from "@material-ui/core";

function InputNumber({inputValue, setInputValue}) {



    function getValue(event){
        setInputValue(event.target.value);
    }



    return (
        <div>
            <form>
                <input type='number' onChange={getValue} value={inputValue}/>

            </form>
        </div>
    );
}

export default InputNumber;
