import {Typography} from '@material-ui/core'
import kuva from './vesi.jpg'

function Etusivu() {
    return(
        <>

        <Typography 
        style={{textAlign:"center", fontSize:20, marginBottom:30, marginTop:10}}
        >Vesi on tärkeää</Typography>

        <Typography style={{margin:10}}
        >Ihminen on noin 62-prosenttisesti vettä, ja jo muutaman prosentin nestehukka heikentää työkykyä merkittävästi. Kahdenkymmenen prosentin vajaus johtaa kuolemaan. Koska vettä poistuu ihmisessä monella tavalla, ihminen tarvitsee elääkseen jatkuvasti merkittäviä määriä vettä. </Typography>

        <img alt="kuva" style={{marginLeft:"10%"}} src={kuva}></img> 
        {/*align="middle" ei toiminut, en keksinyt parempaa tapaa, olisi muuten vasemmalla laidassa */}
        </>
    );
}

export default Etusivu;