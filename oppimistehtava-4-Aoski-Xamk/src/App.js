import {Checkbox, FormControl, FormControlLabel, MenuItem, Select, Slider, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';

  const useStyles= makeStyles({
    kokoKentta : {
      float : "left",
      margin : 10  //Nayttaa toimivan vaan siihen diviin, mihin olen laittanut. Ei edes periydy sen sisalla oleviin.
    },
    floatLeft : {
      float : "left"
    }
  })

function App() {

  const [mokki, setMokki] = useState(12);
  const [paiva, setPaiva] = useState(1);
  const [siivous, setSiivous] = useState(false);
  const [hinta, setHinta] = useState();
  const [nimi, setNimi] = useState();
  const [kalenteri, setKalenteri] = useState();
  const [dialogi, setDialogi] = useState(false);

  const handleSliderChange = (event, newPaiva) => { //sain slider esimerkeista
    setPaiva(newPaiva);
  };

  useEffect(() => {
    setHinta(0);
    if (mokki && paiva && siivous) {           //kaavoja hinnan laskemiseen
      setHinta((mokki * paiva) + 100);
    }

    else if (mokki && paiva) {
      setHinta((mokki * paiva));
    }

  }, [mokki, paiva, siivous])


  const teeTilaus = () => {            //dialogi -koodit
    setDialogi(true)
  }
  const suljeTilaus = () => {
    setDialogi(false)
  }


  const tyylit = useStyles();

  return (

    <div className={tyylit.kokoKentta}>

      <div>

      <Typography 
      variant="h3"
      style={{margin : 10, marginBottom : 20 }}
      >Lomamökkivaraus</Typography>

      <Typography style={{margin : 10}} variant="h5">Valitse mökki</Typography>

      <FormControl style={{margin : 10}}>
      <Select 
      value={mokki}
      style={{ width : 400 }}
      className={tyylit.floatLeft}               //mokin valinta
      variant="outlined"
      >
        <MenuItem value={12} onClick={() => {setMokki(12)}}>Pahvilaatikko lätäkössä - 12 € / päivä</MenuItem>
        <MenuItem value={250} onClick={() => {setMokki(250)}}>Luksus mökki saarella - 250 € / päivä</MenuItem>
        <MenuItem value={66} onClick={() => {setMokki(66)}}>Hieman kärsinyt mökki - 66 € / päivä</MenuItem>
        <MenuItem value={99} onClick={() => {setMokki(99)}}>Hirsimökki sähkojen kanssa - 99 € / päivä</MenuItem>

      </Select>
      </FormControl>

      </div> {/*tein pari divia, jotta saisi nopeasti elementit hyvaan jarjestykseen */}

      <div style={{marginTop : 40}}>

      <Typography style={{margin : 10, marginBottom : 40}}>Varauksen kesto vuorokausina</Typography>

      <Slider 
        style={{ width:400, marginLeft: 20 }}
        value={typeof paiva === 'number' ? paiva : 0}
        aria-labelledby="discrete-slider"               //varaus slider
        marks
        min={1}
        max={14}
        valueLabelDisplay="on"
        onChange={handleSliderChange}
      >Varauksen pituus</Slider>

      <FormControlLabel
      style={{ marginLeft : 20 }}
        control={
          <Checkbox
            color="primary"
              onChange={(e) => {setSiivous(e.target.checked)}}/>}   //loppusiivous
            label="Loppusiivouspalvelu"
          />
      </div>
      <div style={{marginBottom: 20}}>

      <TextField id="standard-basic" label="Nimi..." onChange={(e) => {setNimi(e.target.value)}} //nimi-input
      style={{marginRight:10}}/>

      <TextField id="standard-basic" label="Päivämäärä..." onChange={(e) => {setKalenteri(e.target.value)}}/>
 
      </div>
      <Typography style={{marginBottom: 20}}>Loppusumma on {hinta} euroa</Typography>    

      <Button variant="contained" color="primary" onClick={teeTilaus}>Varaa mökki</Button>
      <Dialog
        open={dialogi}
        onClose={suljeTilaus}
      >
        <DialogContent>

          <DialogContentText>
            Tilaajan nimi: {nimi},  Saapumispäivämäärä: {kalenteri},  Loppusumma: {hinta} €
          </DialogContentText>

          <DialogActions>
            <Button onClick={suljeTilaus} color="primary">
              Sulje
            </Button>
          </DialogActions>

        </DialogContent>

        </Dialog> 
    </div>
  );
}

export default App;
