import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data , setData] = useState({})
    useEffect(() => {
        // fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kHzC8hb7TMdPXeJyS9uSJLOFgCExwZ1Ccc1w248A`)
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res))
        },[currency])
        console.log(data);
        return data;
}

export default useCurrencyInfo;