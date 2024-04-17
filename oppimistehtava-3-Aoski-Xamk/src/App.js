import './App.css';
import Header from './komponentit/header';
import Content from './komponentit/content';
import Kirjautuminen from './komponentit/kirjautuminen';
import Ostoskori from './komponentit/ostoskori';
import Footer from './komponentit/footer';
import {useState} from 'react';
import Content2 from './komponentit/content2';


function App() {

  const [yhteensa, setYhteensa] = useState(0);
  const [hinta, setHinta] = useState(0);
  const [loginState, setLoginState] = useState(0);  //en keksinyt hyvää nimea suomeksi

  const lisaaYhteissummaan = () => {
    setYhteensa(yhteensa + 1);
  }

  const lisaaHinta = (e) => {
    setHinta(hinta + e);
  }

  const lisaaLoginState = () => {
    setLoginState(1);
  //  setHinta(hinta * 0.8); ei toimi onLoad kanssa
  }
  const poistaLoginState = () => {
    setLoginState(0);
  //  setHinta(hinta * 1.25);  ilman alennusta aiheuttaa hinnan kasvun kirjautuessa sisään ja ulos toistuvasti
  }

return (
  (loginState < 1)

    ?(yhteensa > 0)

      ? <div className="App">
          <Header/>
        <div className="content">
          <Content tyyli="keltainen" lisaaYhteissummaan={lisaaYhteissummaan}
          lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

          <Content tyyli="vihrea" lisaaYhteissummaan={lisaaYhteissummaan}
          lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

          <Content tyyli="punainen" lisaaYhteissummaan={lisaaYhteissummaan}
          lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

          <Content tyyli="cyan" lisaaYhteissummaan={lisaaYhteissummaan}
          lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

          <Content tyyli="harmaa" lisaaYhteissummaan={lisaaYhteissummaan}
          lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

          <Content tyyli="musta" lisaaYhteissummaan={lisaaYhteissummaan}
          lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>
        </div>
        <div>
          <Kirjautuminen lisaaLoginState={lisaaLoginState}
          poistaLoginState={poistaLoginState}></Kirjautuminen>
        </div>
        <div> 
          <Ostoskori tyyli="tuoteMaara">{yhteensa}</Ostoskori>
          <Ostoskori tyyli="tuoteHinta">{hinta}</Ostoskori>
          <Ostoskori tyyli="tuoteNappi"></Ostoskori>
        </div>
          <Footer/>
        </div>

// ----------------------- else if -------------------else if--------------------else if-------------------------

      : <div className="App">
      <Header/>
      <div className="content">
      <Content tyyli="keltainen" lisaaYhteissummaan={lisaaYhteissummaan}
      lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

      <Content tyyli="vihrea" lisaaYhteissummaan={lisaaYhteissummaan}
      lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

      <Content tyyli="punainen" lisaaYhteissummaan={lisaaYhteissummaan}
      lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

      <Content tyyli="cyan" lisaaYhteissummaan={lisaaYhteissummaan}
      lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

      <Content tyyli="harmaa" lisaaYhteissummaan={lisaaYhteissummaan}
      lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>

      <Content tyyli="musta" lisaaYhteissummaan={lisaaYhteissummaan}
      lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content>
      </div>
      <div>
      <Kirjautuminen lisaaLoginState={lisaaLoginState}
      poistaLoginState={poistaLoginState}></Kirjautuminen>
      </div>
      <div> 
      <Ostoskori tyyli="eiTuotteita"/>
      </div>
      <Footer/>
      </div>

//-----kirjaudu-state----------kirjaudu-state-----------kirjaudu-state---------kirjaudu-state------------------
//-----kirjaudu-state----------kirjaudu-state-----------kirjaudu-state---------kirjaudu-state------------------

  : (yhteensa > 0)

    ? <div className="App">
        <Header/>
      <div className="content">
        <Content2 tyyli="keltainen" lisaaYhteissummaan={lisaaYhteissummaan}
        lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

        <Content2 tyyli="vihrea" lisaaYhteissummaan={lisaaYhteissummaan}
        lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

        <Content2 tyyli="punainen" lisaaYhteissummaan={lisaaYhteissummaan}
        lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

        <Content2 tyyli="cyan" lisaaYhteissummaan={lisaaYhteissummaan}
        lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

        <Content2 tyyli="harmaa" lisaaYhteissummaan={lisaaYhteissummaan}
        lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

        <Content2 tyyli="musta" lisaaYhteissummaan={lisaaYhteissummaan}
        lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>
      </div>
      <div>
        <Kirjautuminen lisaaLoginState={lisaaLoginState}
        poistaLoginState={poistaLoginState}></Kirjautuminen>
      </div>
      <div> 
        <Ostoskori tyyli="tuoteMaara">{yhteensa}</Ostoskori>
        <Ostoskori tyyli="tuoteHinta">{hinta}</Ostoskori>
        <Ostoskori tyyli="tuoteNappi"></Ostoskori>
      </div>
        <Footer/>
      </div>

// ----------------------- else if -------------------else if--------------------else if-------------------------

    : <div className="App">
    <Header/>
    <div className="content">
    <Content2 tyyli="keltainen" lisaaYhteissummaan={lisaaYhteissummaan}
    lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

    <Content2 tyyli="vihrea" lisaaYhteissummaan={lisaaYhteissummaan}
    lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

    <Content2 tyyli="punainen" lisaaYhteissummaan={lisaaYhteissummaan}
    lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

    <Content2 tyyli="cyan" lisaaYhteissummaan={lisaaYhteissummaan}
    lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

    <Content2 tyyli="harmaa" lisaaYhteissummaan={lisaaYhteissummaan}
    lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>

    <Content2 tyyli="musta" lisaaYhteissummaan={lisaaYhteissummaan}
    lisaaHinta={lisaaHinta}>Lisää ostoskoriin</Content2>
    </div>
    <div>
    <Kirjautuminen lisaaLoginState={lisaaLoginState}
    poistaLoginState={poistaLoginState}></Kirjautuminen>
    </div>
    <div> 
    <Ostoskori tyyli="eiTuotteita"/>
    </div>
    <Footer/>
    </div>








  );
}

export default App;
