import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState(null); // Initialize as null for better state handling
    const [error, setError] = useState(null); // Track any fetch errors
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        if (!baseCurrency) return; // Prevent unnecessary API calls

        const fetchCurrencyInfo = async () => {
            setLoading(true); // Start loading
            setError(null); // Clear any previous error
            try {
                const response = await fetch(
                    `https://api.exchangerate-api.com/v4/latest/${baseCurrency.toLowerCase()}`
                );
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${baseCurrency}`);
                }
                const result = await response.json();
                setData(result.rates); // Set rates as data
            } catch (err) {
                setError(err.message); // Handle errors
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchCurrencyInfo();
    }, [baseCurrency]);

    return { data, error, loading };
}

export default useCurrencyInfo;
