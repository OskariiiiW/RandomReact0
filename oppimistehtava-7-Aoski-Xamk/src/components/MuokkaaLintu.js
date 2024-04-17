import { Button, TextField } from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {Link, useHistory, useParams} from 'react-router-dom';
import { useState} from 'react';
import DateFnsUtils from "@date-io/date-fns";

function MuokkaaLintu(props) {

    const history = useHistory();
    const {id} = useParams();
    const [idTieto, setIdTieto] = useState(props.linnut.filter((lintu) => { return (lintu.id === id);})[0].id);
    const [uusiLintuNimi, setUusiLintuNimi] = useState(props.linnut.filter((lintu) => { return (lintu.id === id);})[0].nimi);
    const [uusiPaikka, setUusiPaikka] = useState(props.linnut.filter((lintu) => { return (lintu.id === id);})[0].paikka);
    const [pvm, setPvm] = useState(props.linnut.filter((lintu) => { return (lintu.id === id);})[0].aika);


    const muokkaaLintuTieto = () => {

      let linnutApu = {
          id : idTieto,
          nimi : uusiLintuNimi,
          paikka : uusiPaikka,
          aika : pvm,
        }
        props.setLinnut([linnutApu]);//mietin miten saisi toimimaan ja yli tunnin jalkeen kokeilin poistaa
        //kolme pistetta ennen linnutApu ja yllatyin kun yhtakkia toimi

        history.push("/");
      }

    return(
      <>

        <TextField 
        style={{marginBottom:10}}
        variant="outlined"
        fullWidth
        value={uusiLintuNimi}
        onChange={(e) => {
          setUusiLintuNimi(e.target.value); 
        }}
        />

        <TextField 
        style={{marginBottom:10}}
        variant="outlined"
        fullWidth
        value={uusiPaikka}
        onChange={(e) => {
          setUusiPaikka(e.target.value); 
        }}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}> {/*en oo varma onko tarpeellinen, mutta ainakin tuli */}
        {/*erroria jossain vaiheessa, ja taman lisaaminen sai toimimaan*/}

        <DateTimePicker 
        style={{marginBottom:10}}
        inputVariant="outlined"
        fullWidth
        fomat="d.M.y HH:mm"
        ampm={false}
        cancelLabel="Peruuta"
        value={pvm}
        onChange={setPvm}/>

        <Button
        variant="contained" 
        color="primary" 
        fullWidth 
        size="large"
        style={{marginTop:10}}
        onClick={muokkaaLintuTieto}
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
      
      </>
    );

}

export default MuokkaaLintu;