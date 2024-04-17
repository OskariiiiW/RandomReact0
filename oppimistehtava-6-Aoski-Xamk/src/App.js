import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {differenceInMinutes} from 'date-fns';
import Liikuntalista from "./components/Liikuntalista";
import Uusiliikunta from "./components/Uusiliikunta";


function App() {

  const [aika, setAika] = useState(266); //en keksinyt tapaa laskea esimerkkien tulokset mukaan kaavalla
  const [aikaMinuutti, setAikaMinuutti] = useState(0);
  const [aikaTunti, setAikaTunti] = useState(0);
  const [liikuntaMaara, setLiikuntaMaara] = useState(-1);

  const [liikunnat, setLiikunnat] = useState([
    {
      nimi : "Jalkapallo",
      aikaAlku : new Date('2014-08-18T19:00'),
      aikaLoppu : new Date('2014-08-18T21:11'),
      kokoAika : differenceInMinutes(new Date('2014-08-18T21:11'), new Date('2014-08-18T19:00'))
    },
    {
      nimi : "Juoksulenkki",
      aikaAlku : new Date('2017-02-25T12:45'),
      aikaLoppu : new Date('2017-02-25T15:00'),
      kokoAika : differenceInMinutes(new Date('2017-02-25T15:00'), new Date('2017-02-25T12:45'))
    }
    ]);

    const laske = () => {
      let minuutit = aika + (liikuntaMaara + 1);//sekunnit varmaan hairitsee tuloksia, aina minuutin myohassa
      let tunti = minuutit / 60;                //toFixed ei toiminut
      let tunnit = tunti.toFixed(0);            //tama on vain nopea ratkaisu, en tieda pitkan ajan vaikutuksia
      let yliminuutit = minuutit - tunnit * 60;
                                           
      setAikaMinuutti(yliminuutit);
      setAikaTunti(tunnit);                          
    }                                              
    console.log(liikuntaMaara);

    useEffect(() => {
      laske();
    }, [liikunnat]);  

  return (

  <Router>

      <Typography style={{fontSize:30, textAlign: "center"}}>Liikuntapäiväkirja</Typography>

    <Route path="/" exact>
      <Liikuntalista 
        liikunnat={liikunnat} 
        setLiikunnat={setLiikunnat} 
        aikaMinuutti={aikaMinuutti} 
        aikaTunti={aikaTunti}
        />
    </Route>

    <Route path="/uusi">
      <Uusiliikunta liikunnat={liikunnat} setLiikunnat={setLiikunnat} setLiikuntaMaara={setLiikuntaMaara}/>
    </Route>

  </Router>

  );
}

export default App;
