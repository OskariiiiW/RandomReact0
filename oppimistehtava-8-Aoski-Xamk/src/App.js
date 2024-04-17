import { Container, Typography } from '@material-ui/core';
import {useEffect, useState } from 'react';
import SaaTiedot from './components/SaaTiedot';

function App() {

  const [sivu, setSivu] = useState("1");

  const [data, setData] = useState({
    Paikka : "",
    lampotila : [],
    Tiedot : [],
    virhe : ""
  })
  const [data2, setData2] = useState({
    Paikka : "",
    lampotila : [],
    Tiedot : [],
    aika : ""
  })

  const haeTiedot = async () => {

    try {
      const yhteys = await fetch("https://xamkbit.herokuapp.com/saatilanne/mikkeli");
      const yhteys2 = await fetch("https://xamkbit.herokuapp.com/saaennuste/mikkeli");
      const tiedot = await yhteys.json();
      const tiedot2 = await yhteys2.json();

      let tietoApu = tiedot.weather; //loysin kokeilemalla
      let tietoApu2 = tiedot2.list[6];
      let tietoApu21 = tietoApu2.weather;
      let tietoApu3 = tiedot2.list[10];
      let tietoApu31 = tietoApu3.weather; //en keksinyt parempaa tapaa
      let tietoApu4 = tiedot2.list[14];
      let tietoApu41 = tietoApu4.weather;
      let tietoApu5 = tiedot2.list[18];
      let tietoApu51 = tietoApu5.weather;
      let paikkaApu = tiedot2.city;
  
      setData({...data,
        Paikka : tiedot.name,
        lampotila : tiedot.main,
        Tiedot : tietoApu[0]});

      setData2({...data2,
        Paikka2 : paikkaApu["name"],
        lampotila2 : tietoApu2.main,
        Tiedot2 : tietoApu21[0],
        aika2 : tietoApu2["dt_txt"],

        lampotila3 : tietoApu3.main,
        Tiedot3 : tietoApu31[0],
        aika3 : tietoApu3["dt_txt"],

        lampotila4 : tietoApu4.main,
        Tiedot4 : tietoApu41[0],
        aika4 : tietoApu4["dt_txt"],

        lampotila5 : tietoApu5.main,
        Tiedot5 : tietoApu51[0],
        aika5 : tietoApu5["dt_txt"]
      });
    }

    catch(e) {
      setData({...data, 
        virhe : "Ei yhteyttä palvelimeen. Yritä uudelleen hetken kuluttua."});
    }
  }

  useEffect(() => {
    haeTiedot();
  }, []);

  return (
    <Container>

    {(data.virhe)
      ? <Typography color="error">{data.virhe}</Typography>
      :  (sivu === "1") 
        ? <SaaTiedot tyyli="1"
          Paikka={data.Paikka} 
          lampotila={data.lampotila}

          Tiedot={data.Tiedot}
          Tiedot2={data2.Tiedot2}
          Tiedot3={data2.Tiedot3}
          Tiedot4={data2.Tiedot4}
          Tiedot5={data2.Tiedot5}
          setSivu={setSivu}/>

        : <SaaTiedot
          Paikka2={data2.Paikka2}
          lampotila2={data2.lampotila2}
          Tiedot2={data2.Tiedot2}
          aika2={data2.aika2}

          lampotila3={data2.lampotila3}
          Tiedot3={data2.Tiedot3}
          aika3={data2.aika3}

          lampotila4={data2.lampotila4}
          Tiedot4={data2.Tiedot4}
          aika4={data2.aika4}

          lampotila5={data2.lampotila5}
          Tiedot5={data2.Tiedot5}
          aika5={data2.aika5}

          setSivu={setSivu}/>
    }

    </Container>
  );
}

export default App;
