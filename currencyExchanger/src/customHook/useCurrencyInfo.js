import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log(result)
        setData(result[currency] || {});
      } catch (error) {
        console.error("Failed to fetch currency data:", error.message);
        setData({}); // Reset data on failure
      }
    };

    fetchData();
  }, [currency ]); // Include `date` in dependencies for safety

  return data;
}

export default useCurrencyInfo;
