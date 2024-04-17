import { Button, TextField } from "@material-ui/core";
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {fi} from 'date-fns/locale';
import {v4 as uuid} from 'uuid';


function UusiLintu(props) {

    const [uusiLintuNimi, setUusiLintuNimi] = useState();
    const [uusiPaikka, setUusiPaikka] = useState();

    const history = useHistory();

    const lisaaLintu = () => {
        let lintuApu = {
          id : uuid(),
          nimi : uusiLintuNimi,
          paikka : uusiPaikka,
          aika : new Date(),
        }
        props.setLinnut([...props.linnut, lintuApu]);
        history.push("/");
      }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>

        <TextField 
        style={{marginBottom:10}}
        variant="outlined"
        fullWidth
            placeholder="Lintu...."
            onChange={(e) => {
                setUusiLintuNimi(e.target.value); 
            }}
        />

        <TextField 
        style={{marginBottom:10}}
        variant="outlined"
        fullWidth
            placeholder="Paikka..."
            onChange={(e) => {
                setUusiPaikka(e.target.value); 
            }}
        />

        <Button
        variant="contained" 
        color="primary" 
        fullWidth 
        size="large"
        style={{marginTop:10}}
        onClick={lisaaLintu}
        >Tallenna
        </Button>

        <Button
        component={Link}
        to="/"
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

export default UusiLintu;