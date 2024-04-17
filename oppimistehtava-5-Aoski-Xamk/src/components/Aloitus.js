import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import kuva from './pilkki_kuva.jpg';

const useStyles = makeStyles({
    otsikko : {fontSize: 22, textAlign: "center", marginTop: 10},

    kappale : {fontSize: 14}

});

function Aloitus(){

    const tyylit = useStyles();

    return(
        <Container>
            <Typography className={tyylit.otsikko}>Tervetuloa Laajalammen pilkkikilpailuun</Typography>

            <img alt="kuva" style={{marginLeft: 200}} src={kuva}></img>

            <Typography className={tyylit.kappale}>Kesällä kalastusta voidaan harrastaa pilkkiongintavälineillä veneestä. Pilkkiminen kuten ongintakin ovat jokamiehenoikeuteen rinnastettavia yleiskalastusoikeuksia, joiden harjoittamiseen kalastuslaissa säädetyllä tavalla ei tarvitse lupaa (poiketen esimerkiksi virvelöinnistä ja verkkokalastuksesta). Suomessa kalastuslaki määrittelee pilkkimisen olevan kalastusta siimaan kiinnitetyllä pystysuunnassa liikuteltavalla pilkillä, siimaa kädessä pitäen tai lyhyehköä heittokalastukseen soveltumatonta vapaa käyttäen.</Typography>


        </Container>
    );
}

export default Aloitus;