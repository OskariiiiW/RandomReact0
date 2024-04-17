import { Button, TextField } from "@material-ui/core";
import {MuiPickersUtilsProvider, DateTimePicker, KeyboardTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { differenceInMinutes, format} from 'date-fns';
import {fi} from 'date-fns/locale';
import { useState } from "react";
import {Link, useHistory} from 'react-router-dom';

function Uusiliikunta(props){

    const [liikunta, setLiikunta] = useState("");
    const [liikuntaNimi, setLiikuntaNimi] = useState("aa"); //kaytan samaa tapaa, kuin viime tehtavan errorin nayttamiseen
    const [pvmAikaAlku, setPvmAikaAlku] = useState(new Date());
    const [pvmAikaLoppu, setPvmAikaLoppu] = useState(new Date());
    const [nappiTeksti, setNappiTeksti] = useState("Lisää")

    const history = useHistory();

    const lisaaLiikunta = () => {
        setLiikuntaNimi(liikunta);
        if(liikunta.length < 2){
        }
        else if(differenceInMinutes(pvmAikaAlku, new Date()) > 0 || differenceInMinutes(pvmAikaLoppu, new Date()) > 0){

            setNappiTeksti("Suorite ei voi olla tulevaisuudessa!");//aika tyhma tapa, mutta en tiennyt minne muualle
        }                                                          //laittaa
        else if(differenceInMinutes(pvmAikaAlku, pvmAikaLoppu) > 0) {
            setNappiTeksti("Aloitus ei voi olla myöhemmin kuin lopetus!");
        }
        else {
            setNappiTeksti("Lisää");
            let liikuntaApu = {
                id : 3,
                nimi : liikunta,
                aikaAlku : pvmAikaAlku,
                aikaLoppu : pvmAikaLoppu,
                kokoAika : differenceInMinutes(new Date(pvmAikaLoppu), new Date(pvmAikaAlku))
            }
            props.setLiikuntaMaara(liikuntaApu.kokoAika);
            props.setLiikunnat([...props.liikunnat, liikuntaApu]);
            history.push("/");
        }
    }

    return(
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>

        <TextField
        variant="outlined"
        placeholder="Urheilu..."
        fullWidth
        error={liikuntaNimi.length < 2}
        helperText={liikuntaNimi.length < 2 ? 'Urheilun nimi puuttuu!' : ' '}
        onChange={(e) => {setLiikunta(e.target.value)}}
        />

        <DateTimePicker 
        style={{marginTop: 20}}
        inputVariant="outlined"
        format="d.M.y HH:mm"
        ampm={false}
        cancelLabel="Peruuta"
        value={pvmAikaAlku}
        onChange={setPvmAikaAlku}
        label="Liikunnan alku"/>

        <DateTimePicker 
        style={{marginTop: 20, float: "right"}}
        inputVariant="outlined"
        format="d.M.y HH:mm"
        ampm={false}
        cancelLabel="Peruuta"
        value={pvmAikaLoppu}
        onChange={setPvmAikaLoppu}
        label="Liikunnan loppu"/>

        <Button
        style={{marginTop:10}}
        variant="contained"
        color="primary"
        fullWidth
        onClick={lisaaLiikunta}
        >{nappiTeksti}
        </Button>

        <Button
        style={{marginTop:10}}
        component={Link}
        to="/"
        variant="contained" 
        color="secondary" 
        fullWidth 
        >Peruuta
        </Button>

    </MuiPickersUtilsProvider>
    );
}

export default Uusiliikunta;
