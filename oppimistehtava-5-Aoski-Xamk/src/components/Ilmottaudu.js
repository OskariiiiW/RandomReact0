import {Button, Container, TextField, Typography} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Ilmottaudu(props){

    const [nimi, setNimi] = useState("");
    const [sukunimi, setSukunimi] = useState("");
    const [kunta, setKunta] = useState("");
    const [numero, setNumero] = useState("");
    const [posti, setPosti] = useState("");
    const [ika, setIka] = useState("0");//nolla arvo poistaa semi pitkan errorin, ei vaikuta toimivuuteen (ehka)

    const [nimiTieto, setNimiTieto] = useState("aa");
    const [sukunimiTieto, setSukunimiTieto] = useState("aa"); //errorin nayttamiseen, en tieda parempaa tapaa
    const [numeroTieto, setNumeroTieto] = useState("11");
    const [postiTieto, setPostiTieto] = useState("aa");
    const [error, setError] = useState(false);         //sain esimerkista
    const [helperText, setHelperText] = useState('');  //sain esimerkista
    const history = useHistory();

    const handleChange = (event) => {
        setIka(event.target.value);
      };

    const tietoApu = () => {
        setNimiTieto(nimi);
        setSukunimiTieto(sukunimi);

        if(numero.length > 1){    //kaytin apuna errorin nayttamiseen 
            setNumeroTieto(numero);
            setPostiTieto(numero);  //en keksinyt parempaa tapaa saada "error" mode pois, jos toisessa on arvo
        }
        else if(posti.length > 1){
            setPostiTieto(posti);
            setNumeroTieto(posti);
        }
        else{
            setNumeroTieto(numero);
            setPostiTieto(posti);
        }


        if (ika.length < 3){
            setHelperText("Valitse jokin ikäryhmä") ;  //kaytin apuna errorin nayttamiseen radio -elementissa
            setError(true);
        }
    }


      const tarkistaTiedot = () => {      //ei kerrottu puh tai sPostin pituudesta
        tietoApu();
          if(nimi.length > 1 && sukunimi.length > 1 && ika.length > 1 && (posti || numero)){ 
            //props.lisaaNimiT();  en saanut toimimaan - aiheuttaa errorin
            history.replace({
                pathname: "/kiitos",
                state: ika  //netissa oli jotain tamantyyppista, mutta en saa toimimaan
            })
          }
      }

      console.log(ika);

    return(
        (props.tyyli === "kiitos")
        ?<Container style={{marginTop: 20}}>    {/*kaytin if, jotta saisin tietoja kiitos -sivulle */}
            <Typography>Nimi: {nimi}</Typography>
            <Typography>Sukunimi: {sukunimi}</Typography>
            <Typography>Kunta: {kunta}</Typography>
            <Typography>Puhelinnumero: {numero}</Typography>
            <Typography>Sähköposti: {posti}</Typography>
            <Typography>Ikä: {ika} vuotta</Typography>
            <Typography style={{marginTop:20, fontSize:20}}>Ilmoituksesi on vastaanotettu. Kiitos</Typography>
        </Container>

        : <Container>

                <div style={{float:"left", marginRight:150}}>

                <TextField style={{marginRight:10}}
                id="standard-basic" 
                label="Nimi..." 
                error={nimiTieto.length < 2}
                helperText={nimiTieto.length < 2 ? 'Nimi puuttuu!' : ' '}
                onChange={(e) => {setNimi(e.target.value)}}> {/*pakollinen */}
                </TextField>

                <TextField  
                id="standard-basic" 
                label="Sukunimi..." 
                error={sukunimiTieto.length < 2}
                helperText={sukunimiTieto.length < 2 ? 'Sukunimi puuttuu!' : ' '}
                onChange={(e) => {setSukunimi(e.target.value)}}>  {/*pakollinen */}
                </TextField>

                </div>          {/*divit auttaa jarjestamaan eri elementteja */}

                <div style={{float:"left"}}>

                <TextField style={{marginRight:10}}
                id="standard-basic" 
                label="Paikkakunta..." 
                onChange={(e) => {setKunta(e.target.value)}}> 
                </TextField>

                <TextField style={{marginRight:10}}
                id="standard-basic" 
                label="Puh. nro..." 
                error={numeroTieto.length < 2}
                helperText={numeroTieto.length < 2 ? 'Puhelinnumero puuttuu!' : ' '}
                onChange={(e) => {setNumero(e.target.value)}}> {/*pakollinen jos ei posti */}
                </TextField>

                <TextField style={{width:230}}  
                id="standard-basic" 
                label="Sähköposti..." 
                error={postiTieto.length < 2}
                helperText={postiTieto.length < 2 ? 'Sähköpostiosoite puuttuu!' : ' '}
                onChange={(e) => {setPosti(e.target.value)}}>  {/*pakollinen  jos ei puh*/}
                </TextField>

                </div>

                <FormControl style={{float:"left", marginRight: 100, marginTop: 60}} error={error}>
                    <FormLabel>Ikäsarja</FormLabel>
                    <RadioGroup value={ika} onChange={handleChange}>
                        <FormControlLabel value="alle 15" control={<Radio />} label="alle 15 vuotiaat"/>
                        <FormControlLabel value="15-19" control={<Radio />} label="15 - 19 vuotiaat"/>
                        <FormControlLabel value="20-39" control={<Radio />} label="20 - 39 vuotiaat"/>
                        <FormControlLabel value="40-59" control={<Radio />} label="40 - 59 vuotiaat"/>
                        <FormControlLabel value="60-69" control={<Radio />} label="60 - 69 vuotiaat"/>
                        <FormControlLabel value="70-79" control={<Radio />} label="70 - 79 vuotiaat"/>
                        <FormControlLabel value="yli 80" control={<Radio />} label="yli 80 vuotiaat"/>
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>

                    <Button 
                    style={{float:"left", marginRight:400, marginTop:30}}
                    variant="contained" 
                    color="primary"
                    onClick={tarkistaTiedot}>
                        Lähetä ilmoittautuminen
                    </Button>
                </FormControl>

        </Container>
    );
}

export default Ilmottaudu;