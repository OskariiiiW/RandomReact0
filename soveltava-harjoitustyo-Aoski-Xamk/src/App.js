import {Typography } from '@material-ui/core';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Etusivu from "./components/Etusivu";
import Lisaa from "./components/Lisaa";
import Lista from "./components/Lista";
import Muokkaa from './components/Muokkaa';
import Poista from './components/Poista';
import Valikko from './components/Valikko';


function App() {

  const [kokonais, setKokonais] = useState(0);
  const [tiedot, setTiedot] = useState([]);
  const [Data, setData] = useState([]);
  const haeTiedot = async () => {

    try{
      const yhteys = await fetch("https://xamkbit.herokuapp.com/saatilanne/mikkeli");
      const data = await yhteys.json();

      setData({...Data,
        lampotila : data.main["temp"],
        virhe : "" });
    }
    catch(e) {
      setData({...Data, 
        virhe : "Ei yhteyttä palvelimeen. Yritä uudelleen hetken kuluttua." });
    }
  }

  const tallennaTiedot = () => {
    localStorage.setItem("lista", JSON.stringify(tiedot));
  }

  const avaaLista = () => {
    if(localStorage.getItem("lista")) {
      setTiedot(JSON.parse(localStorage.getItem("lista"))); //oletusarvot katoaa taman takia
    }                                                            
    else {
      setTiedot([]); 
    }
  }

  useEffect(() => {
    haeTiedot();
    avaaLista();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    tallennaTiedot();
    //eslint-disable-next-line
  }, [tiedot]);

  return (
    <>

    {(Data.virhe)

      ? <Typography color="error">{Data.virhe}</Typography>

      : <Router>

          <Valikko/>

          <Route path="/" exact>
            <Etusivu/>
          </Route>

          <Route path="/lista">
            <Lista tiedot={tiedot} 
            setTiedot={setTiedot} 
            data={Data} 
            setData={setData}
            kokonais={kokonais} 
            setKokonais={setKokonais}/>
          </Route>

          <Route path="/lisaa">
            <Lisaa tiedot={tiedot} 
            setTiedot={setTiedot} 
            data={Data} 
            setData={setData}
            kokonais={kokonais} 
            setKokonais={setKokonais} />
          </Route>

          <Route path="/muokkaa/:id">
            <Muokkaa tiedot={tiedot} 
            setTiedot={setTiedot} 
            data={Data} 
            setData={setData}
            kokonais={kokonais} 
            setKokonais={setKokonais}/>
          </Route>

          <Route path="/poista/:id">
            <Poista tiedot={tiedot} 
            setTiedot={setTiedot}
            kokonais={kokonais} 
            setKokonais={setKokonais}/>
          </Route>
          
        </Router>
    }
    </>
  );
}

export default App;
