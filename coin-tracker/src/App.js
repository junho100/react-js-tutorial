// https://api.coinpaprika.com/v1/tickers
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [presentCoinPrice, setPresentCoinPrice] = useState(undefined);

  const onChangePresent = (e) => {
    setPresentCoinPrice(parseFloat(e.target.value));
    setMoney(0);
  };

  const onChangeMoney = (e) => {
    if (e.target.value === "") {
      return setMoney(0);
    }
    setMoney(parseFloat(e.target.value));
  };

  const renderForm = () => {
    if (presentCoinPrice === undefined) {
      return null;
    }

    return (
      <div>
        <input
          value={money === 0 ? null : money}
          onChange={onChangeMoney}
        ></input>
        <input
          disabled
          value={money === 0 ? null : money / presentCoinPrice}
        ></input>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCoins(data.slice(0, 100));
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>{isLoading ? "Loading..." : null}</h1>
      <select onChange={onChangePresent}>
        {[
          <option key="default" defaultValue>
            select coin
          </option>,
          coins.map((coin) => {
            return (
              <option value={coin.quotes.USD.price} key={coin.id}>
                {coin.name}
              </option>
            );
          }),
        ]}
      </select>
      <div>{renderForm()}</div>
    </div>
  );
}

export default App;
