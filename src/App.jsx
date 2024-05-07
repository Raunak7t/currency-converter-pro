import { useState } from "react";
import { InputBox } from "./components/";
import useCurrencyData from "./hooks/useCurrencyData";

function App() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  let [currencyValues, currencyNames] = useCurrencyData(from);

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyValues[to]);
  };

  return (
    <>
      <form
        className="rounded-xl p-5 backdrop-blur bg-slate-200 bg-opacity-10 border hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-blue-300 hover:shadow-2xl hover:shadow-blue-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBox
          label="From"
          amount={amount}
          changeAmount={(value) => {
            setAmount(value);
          }}
          currency={from}
          changeCurrency={(currency) => {
            setFrom(currency);
          }}
          currencyNames={currencyNames}
        />
        <div className="text-center mb-2">
          <button
            type="button"
            className="rounded-lg px-3 py-1 bg-gradient-to-l from-[#568bee] to-[#d43ed4] border-slate-900 border-2 absolute -translate-x-1/2 -translate-y-1/2 z-10"
            onClick={swap}
          >
            SWAP
          </button>
        </div>
        <InputBox
          label="To"
          amount={convertedAmount}
          disabled
          currency={to}
          changeCurrency={(currency) => {
            setTo(currency);
          }}
          currencyNames={currencyNames}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#4b84ee] to-[#b82db8] w-full rounded-lg py-3 font-bold text-2xl mt-3"
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  );
}

export default App;
