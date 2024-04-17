import { Button, Typography } from "@material-ui/core";
import {Link, useHistory, useParams} from 'react-router-dom';


function PoistaLintu(props) {

    const history = useHistory();
    const {id} = useParams();


    const poistaLintu = () => {

      let linnutApu = props.linnut.filter((lintu) => { //poisto??
        return(lintu.id !== id);
      });

        props.setLinnut([...linnutApu]);
        history.push("/");
      }

    return(
        <>

        <Typography>Haluatko varmasti poistaa linnunhavainnon "{props.linnut.filter((lintu) => {
          return (lintu.id === id);})[0].nimi}"?
        </Typography>

        <Button
        variant="contained" 
        color="primary" 
        fullWidth 
        size="large"
        style={{marginTop:10}}
        onClick={poistaLintu}
        >Poista lintuhavainto
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
      </>
    );

}

export default PoistaLintu;