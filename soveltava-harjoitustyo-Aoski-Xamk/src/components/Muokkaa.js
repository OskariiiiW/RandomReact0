import { Button, Typography } from "@material-ui/core";
import {Link, useHistory, useParams} from 'react-router-dom';
import { useState} from 'react';

function Muokkaa(props) {

    const history = useHistory();
    const {id} = useParams();
    const [nappiTeksti, setNappiTeksti] = useState("Tallenna");
    const [laskuApu, setLaskuApu] = useState(0);
    const [idTieto, setIdTieto] = useState(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].id);
    const [uusiPaino, setUusiPaino] = useState(Number(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].paino));
    const [uusiVesi, setUusiVesi] = useState(Number(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].vesi));
    const [pvm, setPvm] = useState(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].paiva);
    //paivamaara on koodissa, koska muuten tulee erroria. Tarkoituksena ei ole mahdollista muuttaa paivaa.

    const muokkaaVesi = () => {
        let tiedotApu = props.tiedot.filter((tieto) => {
            return(tieto.id !== id);
          });

        if(props.data.lampotila < 15){
            let VesiApu = {
                id : idTieto,
                paino : uusiPaino,
                vesi : uusiVesi,
                paiva : pvm,
                tarve : (uusiPaino / uusiVesi),
                suositus : ((uusiPaino / 30) - uusiVesi)
            }
            props.setTiedot([...tiedotApu, VesiApu]);
            props.setKokonais(props.kokonais + laskuApu);
            setLaskuApu(0);
            history.push("/lista"); 
        }
        else{
            let VesiApu = {
                id : idTieto,
                paino : uusiPaino,
                vesi : uusiVesi,
                paiva : pvm,
                tarve : ((uusiPaino / uusiVesi) * (1 + (props.data.lampotila / 100))),
                suositus : (((uusiPaino / 30) * (1 + (props.data.lampotila / 100))) - uusiVesi)
            }
            props.setTiedot([VesiApu]);

            history.push("/lista");    
        }
    }

    const lisaaLitra = () => {
        let vesiApu = uusiVesi + 1;
        setUusiVesi(vesiApu);
        setNappiTeksti("Tallenna");

        let laskuri = laskuApu + 1;
        setLaskuApu(laskuri);
    }

    
    const vahennaLitra = () => {
        let vesiApu = uusiVesi - 1;
        let laskuri = laskuApu - 1; //mahdollistaa vahennusten lisauksen kokonaislaskuun

        if(vesiApu >= 0){
            setUusiVesi(vesiApu);
            setNappiTeksti("Tallenna");
        }
        else{
            setUusiVesi(0); //poistaa desimaalit ja arvo voi siten olla nolla
            setNappiTeksti("Veden määrä ei voi olla negatiivinen");
        }

        setLaskuApu(laskuri);
        if (vesiApu <= 0){
            setLaskuApu(0 - Number(props.tiedot.filter((tieto) => { return (tieto.id === id);})[0].vesi));
        }
    }
console.log(laskuApu);
    return(
      <>

        <Typography style={{fontSize:20, textAlign:"center", marginTop:20, marginBottom:10}} 
        fullWidth
        >{uusiVesi} litraa
        </Typography>

        <Button
        variant="contained" 
        color="default"
        size="large"
        style={{marginTop:10, width:"50%"}}
        onClick={lisaaLitra}
        >Lisää litra
        </Button>

        <Button
        variant="contained" 
        color="default" 
        size="large"
        style={{marginTop:10, width:"50%"}}
        onClick={vahennaLitra}
        >Vähennä litra
        </Button>

        <Button
        component={Link}
        to="/lista"
        variant="contained" 
        color="primary"
        fullWidth
        size="large"
        style={{marginTop:10}}
        onClick={muokkaaVesi}
        >{nappiTeksti}
        </Button>

        <Button
        component={Link}
        to="/lista"
        variant="contained" 
        color="secondary"
        fullWidth
        size="large"
        style={{marginTop:10}}
        >Peruuta
        </Button>

      </>
    );

}

export default Muokkaa;