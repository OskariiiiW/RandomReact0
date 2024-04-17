import {useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import {Link, useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {fi} from 'date-fns/locale';


function Lisaa(props) {

    const history = useHistory();
    const [paino, setPaino] = useState(0);
    const [vesiMaara, setVesiMaara] = useState(-1);
    const [paiva, setPaiva] = useState(new Date());
    const [painoError, setPainoError] = useState(1);
    const [vesiError, setVesiError] = useState(1);

    const lisaaTiedot = () => {

    if(paino <= 0 || vesiMaara < 0){
        setPainoError(paino);
        setVesiError(vesiMaara);
    }
    else{                              //lisaa tarpeeseen lisaa lampimalla saalla
        if(props.data.lampotila < 15){  //toimii vaan kesalla :(
            let tietoApu = {
                id : uuid(),
                paino : paino,
                vesi : vesiMaara,
                paiva : paiva.getTime(),
                tarve : (paino / vesiMaara),
                suositus : ((paino / 30) - vesiMaara)
            }
            props.setTiedot([...props.tiedot, tietoApu]);
            history.push("/lista")
        }
        else{
            let tietoApu = {
                id : uuid(),
                paino : paino,
                vesi : vesiMaara,
                paiva : paiva.getTime(), //aika varma, etta laskukaavassa tuli jotain virheita, aivot ihan solmussa
                tarve : ((paino / vesiMaara) * (1 + (props.data.lampotila / 100))),
                suositus : (((paino / 30) * (1 + (props.data.lampotila / 100))) - vesiMaara)
            }
            props.setTiedot([...props.tiedot, tietoApu]);
            history.push("/lista")
        }
        props.setKokonais(props.kokonais + Number(vesiMaara));
    }
    }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>


        <TextField placeholder="Paino (kg)..."
        style={{marginBottom:20, marginTop:20, margin:10}}
        variant="outlined"
        fullWidth
        error={painoError <= 0}
        helperText={painoError <= 0 ? 'Paino ei voi olla negatiivinen tai nolla' : ' '}
        onChange = {(e) => {
            setPaino(e.target.value);
            }}
        ></TextField>


        <TextField placeholder="Juotu vesi litroina..."
        style={{marginBottom:20, margin:10}}
        variant="outlined"
        fullWidth
        error={vesiError < 0}
        helperText={vesiError < 0 ? 'Veden määrä ei voi olla negatiivinen tai arvo puuttuu' : ' '}
        onChange = {(e) => {
            setVesiMaara(e.target.value);
            }}
        ></TextField>


        <Button
        fullWidth
        variant="contained"
        color="primary"
        fullWidth 
        size="large"
        onClick={lisaaTiedot}
        >Lisää listaan</Button>

        <Button
        component={Link}
        to="/lista"
        variant="contained" 
        color="default" 
        fullWidth 
        size="large"
        style={{marginTop:10}}
        >Peruuta
        </Button>

        </MuiPickersUtilsProvider>
    );
}

export default Lisaa;