import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [search, setSerach] = useState("");
  const [currency, setCurrency] = useState();

  useEffect(() => {
    axios
      .get("https://openapiv1.coinstats.app/coins", {
        headers: {
          "X-API-KEY": "7X2kpPW9xVg3doM0G0+ppG8gXzxWXTn6sSV/9+Q1bpg=",
        },
      })
      .then((res) => setCurrency(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>crptocrtncy</h2>
      <input
        type="text"
        placeholder="Search...."
        onChange={(e) => setSerach(e.target.value)}
      />
      <div>
        <h1>Rank</h1>
        <h1>Name</h1>
        <h1>price</h1>
        {currency
          .filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase());
          }).map((val) => {
            return (
              <h1>
                <h1>{val.rank}</h1>
                <h1>${val.price.toFixed(2)}</h1>
              </h1>
            )
          })}
      </div>
    </div>
  );
}

export default App;
