import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import Lintulista from './components/Lintulista';
import UusiLintu from './components/UusiLintu';
import PoistaLintu from './components/PoistaLintu';
import MuokkaaLintu from './components/MuokkaaLintu';

function App() {

  const [linnut, setLinnut] = useState([
    { 
      id : uuid(),
      nimi : "Kurki",
      paikka : "Prisman roskis",
      aika : new Date('2014-08-18T19:00')
    },
    { 
      id : uuid(),
      nimi : "lokki",
      paikka : "Mikkelin satama",
      aika : new Date('2017-03-22T12:04')
    }
  ]);

    const peilikuva = linnut.reverse() //netin ihmeellinen maailma auttoi loytamaan, ja kerrankin se viela toimii

    const tallennaTiedot = () => {
      localStorage.setItem("lintulista", JSON.stringify(peilikuva));
    }

    const avaaLintuLista = () => {
      if(localStorage.getItem("lintulista")) {
        setLinnut(JSON.parse(localStorage.getItem("lintulista"))); //en tajua kokonaan mita tama tekee
      }                                                            //mutta oletustiedot ei toimi sen kanssa
      else {
        setLinnut([]);
      }
    }

    useEffect(() => {
      avaaLintuLista();
    }, []);

    useEffect(() => {
      tallennaTiedot();
    }, [linnut]);
 
    console.log(linnut);

  return (
    <Router>

      <Route path="/" exact>
        <Lintulista linnut={linnut}/>
      </Route>

      <Route path="/uusi">
        <UusiLintu linnut={linnut} setLinnut={setLinnut}/>
      </Route>

      <Route path="/poista/:id">
        <PoistaLintu linnut={linnut} setLinnut={setLinnut}/>
      </Route>

      <Route path="/muokkaa/:id">
        <MuokkaaLintu linnut={linnut} setLinnut={setLinnut}/>
      </Route>

    </Router>
  );
}

export default App;
