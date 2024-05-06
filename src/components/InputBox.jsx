import React from "react";

function InputBox({ label, amount, changeAmount, isDisabled = false }) {
  return (
    <div className="p-4 mb-1 rounded-lg bg-slate-900 bg-opacity-90 flex gap-12">
      <div className="flex flex-col gap-5">
        <label
          //   htmlFor={inputId}
          className=" text-lg text-blue-100 text-opacity-80"
        >
          {label}
        </label>
        <input
          type="number"
          className=" bg-transparent focus:outline-none"
          value={amount}
          placeholder="0"
          onChange={(e) => {
            changeAmount && changeAmount(e.target.value);
          }}
          disabled={isDisabled}
        ></input>
      </div>
      <div className="flex flex-col gap-3 items-end">
        <label className=" text-lg text-blue-100 text-opacity-80">
          Currency type
        </label>
        <select className=" bg-slate-900 rounded py-1 px-2 focus:outline-none w-60"></select>
      </div>
    </div>
  );
}

export default InputBox;
