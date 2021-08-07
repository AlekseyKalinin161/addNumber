
import './App.css';
import InputNumber from "./inputNumber";
import {useState} from "react";
import CardInfo from "./cardInfo/cardInfo";

function App() {
    const [innerValue, setInnerValue] = useState([5,7,8,9])
    const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <CardInfo innerValue={innerValue}
                inputValue={inputValue} setInputValue={setInputValue} />
      <InputNumber inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
}

export default App;
