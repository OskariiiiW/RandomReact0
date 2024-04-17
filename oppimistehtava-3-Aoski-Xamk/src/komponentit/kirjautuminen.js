import {useState} from 'react';

function Kirjautuminen(props){

    const [nimi, setNimi] = useState("0");
    const [salasana, setSalasana] = useState("0");
    const [tunnukset, setTunnukset] = useState("");

    const login = () => {
        setTunnukset(`${(nimi + salasana)}`);  //Olisi varmaan pystynyt tekemaan paremmallakin tavalla                                    //paa asia on, etta se toimii
    }

    const lisaaAlennus = () => {
        props.lisaaLoginState();
    }

    const kirjauduUlos = () => {
        setNimi("tuntematon");
        setSalasana("sotilas"); //estaa kirjautumisen takaisin heti uloskirjauduttua ilman oikeita kayttajatunnuksia
        setTunnukset("tuntematon sotilas");
        props.poistaLoginState();
    }

    return(
        (tunnukset === "testitesti") //Ennen arsyttanut, kuinka se yhdistaa, eika laste yhteen. 
                                     //Kerrankin hyodyllinen.                                
        ? <div className="kirjautuminen">
            {lisaaAlennus()}
            
            <p>Olet kirjautunut sisään tunnuksella: {nimi}</p>

            <button className="nappi-kirjauduUlos"
            onClick={() =>{
                kirjauduUlos();
            }}>Kirjaudu ulos</button>
        </div>

        : <div className="kirjautuminen">

            <p>Kirjautuminen</p>
            <input type="text" placeholder="Käyttäjätunnus..." onChange={(e) => {
                setNimi(e.target.value);
            }}></input>


            <input type="text" placeholder="Salasana..." onChange={(e) => {
                setSalasana(e.target.value);
            }}></input>

            <button className="nappi-kirjaudu"
            onClick={() =>{
                login();
            }}>Kirjaudu</button>
        </div>

    );
}

export default Kirjautuminen;