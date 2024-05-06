import { useState } from "react";
import { InputBox } from "./components/";

function App() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  console.log(amount);
  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <>
      <form
        className="rounded-xl p-5 backdrop-blur bg-slate-200 bg-opacity-10 border hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-blue-300 hover:shadow-2xl hover:shadow-blue-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBox
          label="From"
          amount={amount}
          changeAmount={(value) => {
            setAmount(value);
          }}
        />
        <div className="text-center mb-2">
          <button
            type="button"
            className="rounded-lg px-3 py-1 bg-blue-600 border-slate-900 border-2 absolute -translate-x-1/2 -translate-y-1/2 z-10"
            onClick={swap}
          >
            SWAP
          </button>
        </div>
        <InputBox label="To" amount={convertedAmount} isDisabled />
        <button
          type="submit"
          className="bg-blue-600 w-full rounded-lg py-2 font-bold mt-3"
          // onClick={convert}
        >
          Convert
          {/* {from.toUpperCase()} to {to.toUpperCase()} */}
        </button>
      </form>
    </>
  );
}

export default App;
