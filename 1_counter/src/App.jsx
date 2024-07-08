import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if(counter>=20) return
    else setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if(counter<=0) return
    else setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react | ahmedIrshad</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Substract value {counter}</button>
      <br />
      <br />
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
