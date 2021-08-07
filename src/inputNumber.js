import React from "react";

function InputNumber({inputValue, setInputValue}) {

    function getValue(event){
        setInputValue(event.target.value);
    }

    return (
        <div>
                <input type='number' onChange={getValue} value={inputValue}/>
        </div>
    );
}

export default InputNumber;
