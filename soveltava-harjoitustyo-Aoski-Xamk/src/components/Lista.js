import {Badge, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import IsoIcon from '@material-ui/icons/Iso';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';

function Lista(props) {

    return(
        <>

        <Typography style={{textAlign:"center", fontSize:24, marginTop:20, marginBottom:20}}
        >Juodun veden lista</Typography>

        <Typography style={{textAlign:"center", fontSize:15, marginTop:20, marginBottom:20}}
        >Tämänpäiväinen sää: {props.data.lampotila} °C</Typography>

        <Button component={Link} 
        to="/lisaa"
        variant="contained" 
        color="primary" 
        fullWidth 
        size="large"
        >Lisää tämänpäiväinen veden juonti
        </Button>

        <List>
            {props.tiedot.map((tieto, idx) => {
                return (
                <ListItem key={idx}>

                    <ListItemIcon>
                            {(tieto.tarve >= 32.5) //koodi ilmoittaa, jos juot liian vahan
                            ? <Badge badgeContent="!" color="error">
                                <FormatColorResetIcon/>
                                </Badge>

                            : <LocalDrinkIcon/>
                            }
                    </ListItemIcon>
                    
                    {(tieto.tarve >= 32.5)

                    ?   <ListItemText 
                        primary={tieto.vesi + " litraa juotu, " + tieto.suositus.toFixed(1) + " litraa liian vähän"}
                        secondary={format(tieto.paiva, "d.M.y")}
                        />
                        
                    :   <ListItemText 
                        primary={tieto.vesi + " litraa juotu"}
                        secondary={format(tieto.paiva, "d.M.y")}
                        />
                    }

                    <ListItemIcon>
                        <IconButton component={Link} to={`muokkaa/${tieto.id}`}>
                            <IsoIcon/>
                        </IconButton>
                    </ListItemIcon>
                    
                    <ListItemIcon>
                        <IconButton component={Link} to={`poista/${tieto.id}`}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemIcon>
                    
                </ListItem> 
                )
            })}
        </List>

        <Typography style={{textAlign:"center"}}>Yhteensä : {props.kokonais}</Typography>


        </>

    );
}

export default Lista;