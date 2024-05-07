import axios from "axios";
import { useEffect, useState } from "react";

export default function useCurrencyData(currency) {
  const [currencyValues, setCurrencyValues] = useState({ inr: 0, usd: 1 });
  const [currencyNames, setCurrencyNames] = useState({
    inr: "Indian Rupees",
    usd: "US Dollar",
  });

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
      .then((response) => {
        setCurrencyValues(response.data[currency]);
      });

    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
      )
      .then((response) => {
        setCurrencyNames(response.data);
      });
  }, [currency]);

  return [currencyValues, currencyNames];
}
