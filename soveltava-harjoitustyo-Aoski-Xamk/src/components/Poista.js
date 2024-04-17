import { Button, Typography } from "@material-ui/core";
import {Link, useHistory, useParams} from 'react-router-dom';
import {format} from 'date-fns';


function Poista(props) {

    const history = useHistory();
    const {id} = useParams();


    const poistaTieto = () => {

      let tiedotApu = props.tiedot.filter((tieto) => {
        return(tieto.id !== id);
      });

        props.setTiedot([...tiedotApu]);

        if (Number(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].vesi) <= 0) {
          props.setKokonais(props.kokonais + Number(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].vesi))
        }
        else{
          props.setKokonais(props.kokonais - Number(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].vesi))
        }
        
        history.push("/lista");
      }

    return(
        <>

        <Typography style={{padding:40, textAlign:"center", fontSize:20}}
        >Haluatko varmasti poistaa {format(props.tiedot.filter((tieto) => {
          return (tieto.id === id);
          })[0].paiva, "d.M.y")} vedenjuonnin?
        </Typography>

        <Button
        variant="contained" 
        color="primary" 
        fullWidth 
        size="large"
        style={{marginTop:10}}
        onClick={poistaTieto}
        >Poista
        </Button>

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
      </>
    );

}

export default Poista;