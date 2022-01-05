// https://api.coinpaprika.com/v1/tickers
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCoins(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>{isLoading ? "Loading..." : null}</h1>
      <ul>
        {coins.map((coin) => {
          return <li key={coin.id}>{coin.name}</li>;
        })}
      </ul>
    </div>
  );
}

// TODO : select 태그 이용하여 환전 구현해보기

export default App;
