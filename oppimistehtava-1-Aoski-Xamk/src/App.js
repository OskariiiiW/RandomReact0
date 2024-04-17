import './App.css';
import {useState} from 'react';

function App() {
  const [indeksi, setIndeksi] = useState("");
  const [paino, setPaino] = useState("aaa");
  const [pituus, setPituus] = useState("bbb");
  const laskeIndeksi = () => {setIndeksi(`${((paino / (pituus * pituus))*10000).toFixed(2)}`);}
  return (
    <div className="App">
      <input type="text" placeholder="Paino" onChange={(e) => {setPaino(e.target.value)}}/>
      <br></br>
      <input type="text" placeholder="Pituus" onChange={(e) => {setPituus(e.target.value)}}/>
      <br></br>
      <button onClick={laskeIndeksi}>Laske</button>

      {(indeksi < 15 && indeksi > 0)
      ? <div className="laatikkoA3">
            {indeksi} sairaalloinen alipaino
        </div>
      : null}

       {(indeksi < 18  && indeksi > 15)
      ? <div className="laatikkoA2">
            {indeksi} merkittävä alipaino
        </div>
      : null}

       {(indeksi < 19  && indeksi > 18)
      ? <div className="laatikkoA1">
            {indeksi} lievä alipaino
        </div>
      : null}

        {(indeksi < 25 && indeksi > 19)
      ? <div className="laatikko">
            {indeksi} normipaino
        </div>
      : null}

       {(indeksi < 30 && indeksi > 25)
      ? <div className="laatikkoY1">
            {indeksi} lievä ylipaino
        </div>
      : null}

       {(indeksi < 35 && indeksi > 30)
      ? <div className="laatikkoY2">
            {indeksi} merkittävä ylipaino
        </div>
      : null}

       {(indeksi < 40 && indeksi > 35)
      ? <div className="laatikkoY3">
            {indeksi} vaikea ylipaino
        </div>
      : null}

       {(indeksi > 40)
      ? <div className="laatikkoY4">
            {indeksi} sairaalloinen ylipaino
        </div>
      : null}
    </div>
  );
}

export default App;
