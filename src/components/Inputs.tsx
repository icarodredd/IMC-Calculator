import { useState } from "react";
import Result from "./Result";

function Inputs() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(event.target.value));
  };

  const handleChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(event.target.value));
  };

  const HandleCalculate = () =>
    setResult(Math.round(weight / (height * height)));

  return (
    <div>
      <div className="flex justify-center mb-4">
        <label className="text-white mr-2">Weight (kg):</label>
        <input onChange={handleChangeWeight} type="text" id="weight" />
      </div>
      <div className="flex justify-center">
        <label className="text-white mr-2">Height (cm):</label>
        <input
          placeholder='with "."'
          onChange={handleChangeHeight}
          type="text"
          id="height"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={HandleCalculate}
          className="p-2 rounded bg-white text-black"
        >
          Calculate
        </button>
      </div>

      <Result result={result} />
    </div>
  );
}

export default Inputs;
