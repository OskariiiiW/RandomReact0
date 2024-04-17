import {Avatar, Button, Typography} from '@material-ui/core';
import { useState } from 'react';

function SaaTiedot(props){

    const [kuvaLahde, setKuvaLahde] = useState();
    const [kuvaLahde2, setKuvaLahde2] = useState();
    const [kuvaLahde3, setKuvaLahde3] = useState();
    const [kuvaLahde4, setKuvaLahde4] = useState();
    const [kuvaLahde5, setKuvaLahde5] = useState();

    const maaritaKuva = () => {
            let lahde ="http://openweathermap.org/img/wn/" + props.Tiedot["icon"] + "@2x.png";
            let lahde2 ="http://openweathermap.org/img/wn/" + props.Tiedot2["icon"]  + "@2x.png";
            let lahde3 ="http://openweathermap.org/img/wn/" + props.Tiedot3["icon"] + "@2x.png";
            let lahde4 ="http://openweathermap.org/img/wn/" + props.Tiedot4["icon"]  + "@2x.png";
            let lahde5 ="http://openweathermap.org/img/wn/" + props.Tiedot5["icon"] + "@2x.png";

            setKuvaLahde(lahde); 
            setKuvaLahde2(lahde2); 
            setKuvaLahde3(lahde3); 
            setKuvaLahde4(lahde4); 
            setKuvaLahde5(lahde5); 
    }

    const siirryEnnusteet = () => {
        props.setSivu("2");
    }

    const siirryTakaisin = () => {
        props.setSivu("1");
    }

    return(
        (props.tyyli==="1")
        ? <>
        <Typography variant="h3" style={{marginBottom:10}}>Päivän sää </Typography>
        <Typography style={{marginBottom:10}}>Kaupunki : {props.Paikka} </Typography>
        <Typography style={{marginBottom:10}}>Lämpö : {props.lampotila["temp"]} °C </Typography>
        <Typography style={{marginBottom:10}}>Säätilan kuvaus : {props.Tiedot["description"]}</Typography>

        <Avatar 
        alt="a" 
        src={kuvaLahde} 
        style={{marginBottom:10}}
        >Kuva 
        </Avatar>

        <Button
        style={{marginTop:20}}
        variant="contained"
        color="secondary"
        fullWidth
        onClick={maaritaKuva}
        >Päivitä kuva
        </Button>

        <Button
        style={{marginTop:20}}
        variant="contained"
        color="primary"
        fullWidth
        onClick={siirryEnnusteet}
        >Seuraavien päivien ennustukset
        </Button>

        </>
//-------------------------------------------Ennusteet----------------------------------------
        : <>
        <Typography variant="h3" style={{marginBottom:10}}>Ennusteet </Typography>
        <Typography style={{marginBottom:20}}>Kaupunki : {props.Paikka2} </Typography>
        <Typography style={{marginBottom:10}}>{props.aika2} </Typography>
        <Typography style={{marginBottom:10}}>Lämpö : {props.lampotila2["temp"]} °C </Typography>
        <Typography style={{marginBottom:10}}>Säätilan kuvaus : {props.Tiedot2["description"]}</Typography>
        <Avatar 
        alt="a" 
        src={kuvaLahde2} 
        style={{marginBottom:30}}
        >Kuva 
        </Avatar>

        <Typography style={{marginBottom:10}}>{props.aika3} </Typography>
        <Typography style={{marginBottom:10}}>Lämpö : {props.lampotila3["temp"]} °C</Typography>
        <Typography style={{marginBottom:10}}>Säätilan kuvaus : {props.Tiedot3["description"]} </Typography>
        <Avatar 
        alt="a" 
        src={kuvaLahde3} 
        style={{marginBottom:30}}
        >Kuva 
        </Avatar>

        <Typography style={{marginBottom:10}}>{props.aika4} </Typography>
        <Typography style={{marginBottom:10}}>Lämpö : {props.lampotila4["temp"]} °C</Typography>
        <Typography style={{marginBottom:10}}>Säätilan kuvaus : {props.Tiedot4["description"]} </Typography>
        <Avatar 
        alt="a" 
        src={kuvaLahde4} 
        style={{marginBottom:30}}
        >Kuva 
        </Avatar>

        <Typography style={{marginBottom:10}}>{props.aika5} </Typography>
        <Typography style={{marginBottom:10}}>Lämpö : {props.lampotila5["temp"]} °C</Typography>
        <Typography style={{marginBottom:10}}>Säätilan kuvaus : {props.Tiedot5["description"]} </Typography>
        <Avatar 
        alt="a" 
        src={kuvaLahde5} 
        style={{marginBottom:30}}
        >Kuva 
        </Avatar>

        <Button
        style={{marginTop:20}}
        variant="contained"
        color="secondary"
        fullWidth
        onClick={maaritaKuva}
        >Päivitä kuvat
        </Button>

        <Button
        style={{marginTop:20}}
        variant="contained"
        color="primary"
        fullWidth
        onClick={siirryTakaisin}
        >Takaisin
        </Button>

        </>
    );
}

export default SaaTiedot;