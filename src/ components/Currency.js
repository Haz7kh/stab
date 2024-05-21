import React, { useEffect, useState } from "react";
import axios from "axios";

const Currency = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://openexchangerates.org/api/latest.json?app_id=f962e155348446e986e05e6dd0a93bb3"
        );
        const ratesData = response.data.rates;
        const sekRate = ratesData.SEK;
        const ratesAgainstSEK = {
          SEK: 1,
          USD: (ratesData.USD / sekRate).toFixed(4),
          EUR: (ratesData.EUR / sekRate).toFixed(4),
          QAR: (ratesData.QAR / sekRate).toFixed(4),
          GBP: (ratesData.GBP / sekRate).toFixed(4),
          INR: (ratesData.INR / sekRate).toFixed(4),
        };
        setRates(ratesAgainstSEK);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the exchange rates", error);
        setError("Error fetching the exchange rates");
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="overflow-hidden bg-blue-500 text-white py-2">
      <div className="whitespace-nowrap animate-scroll container mx-auto flex justify-around">
        <p className="px-4">SEK: {rates.SEK}</p>
        <p className="px-4">USD: {rates.USD}</p>
        <p className="px-4">EUR: {rates.EUR}</p>
        <p className="px-4">QAR: {rates.QAR}</p>
        <p className="px-4">GBP: {rates.GBP}</p>
        <p className="px-4">INR: {rates.INR}</p>
      </div>
    </div>
  );
};

export default Currency;
