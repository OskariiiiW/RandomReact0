import {useState} from 'react';
import './App.css';

function App() {
  const [nimi, setNimi] = useState();
  const [velka, setVelka] = useState();
  const [nimet, setNimet] = useState(["Marjo", "Jorma"]);
  const [velat, setVelat] = useState([12, 77]);
  const [laskuri, setLaskuri] = useState("89");  //en tiennyt parempaa tapaa saada laskuria toimimaan


  const lisaaTiedot = () => {

    let nimiApu = [...nimet, nimi];
    setNimet(nimiApu);
  
    let valiVaihe = parseInt(velka, 10);  //vaihtaa inputin numeroiksi
    let velkaApu = [...velat, valiVaihe];
    setVelat(velkaApu);

    let laskuri = [...velat, valiVaihe].reduce((a, b) => a + b)   //laskurikaava
    setLaskuri(laskuri);

  }


  const poistaVelka = (indeksi) => {   //poista-napin toimivuus
    var listaNimi = nimet;
    var listaVelka = velat;

    listaNimi.splice(indeksi, 1);
    setNimet(listaNimi);

    listaVelka.splice(indeksi, 1);   //poistaa jaljessa
    setVelat(listaVelka);

  }

    
return (
<div className="header">
  <h1>Velat</h1>
  <div className="content">
    <ul>
      <h3>Nimi</h3>
    {nimet.map ((nimet, indeksi) => {   //nimilista
      return (
        <li
        key={indeksi}
        
        >{nimet}
        </li>
      )
    })}
    </ul>

    <ul>
      <h3>Määrä</h3>
    {velat.map ((velat, indeksi) => {    //velkalista
      return (
        <li
        key={indeksi}
        >{velat} €

          <button
          className="nappi-poista"
          onClick={() => poistaVelka(indeksi)}  //poista-nappi
          >Poista</button>
        </li>
      )
    })}
  </ul>

   <input
   onChange={(e) => {setNimi(e.target.value)}}  //nimi-inputti
   placeholder="Nimi..."
   />

   <input
   className="Oinput"
   onChange={(e) => {setVelka(e.target.value)}}  //velka-inputti
   placeholder="Määrä..."
   />

   <button
   className="nappi-lisaa"   //lisaa-nappi
   onClick={lisaaTiedot}
   >Lisää velka</button>


   <p>Velkasi on {laskuri} €</p>
  </div>
</div>
  );
}

export default App;
