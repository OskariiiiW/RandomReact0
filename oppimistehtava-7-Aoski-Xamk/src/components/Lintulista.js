import {Link} from 'react-router-dom';
import { Button, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import { format} from 'date-fns';


function Lintulista(props) {

    return(
        <>

        <Button component={Link} 
        to="/uusi"
        variant="contained" 
        color="primary" 
        fullWidth 
        size="large"
        >Lisää uusi lintu
        </Button>

        <List>
            {props.linnut.map((lintu, idx) => {
                return (
                <ListItem key={idx}>
                        <ListItemText style={{maxWidth:300}} primary={lintu.nimi}/>
                        <ListItemText style={{maxWidth:300}} primary={lintu.paikka}/>
                        <ListItemText primary={format(lintu.aika, "HH:mm")} secondary={format(lintu.aika, "d.M.y")} />

                    <ListItemIcon>
                        <IconButton component={Link} to={`muokkaa/${lintu.id}`}>
                            <SettingsIcon/>
                        </IconButton>
                    </ListItemIcon>

                    <ListItemIcon>
                        <IconButton component={Link} to={`poista/${lintu.id}`}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemIcon>
                </ListItem> 
                )
            })}
        </List>

        </>


    );
}

export default Lintulista;