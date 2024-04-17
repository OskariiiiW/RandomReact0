import {Link} from 'react-router-dom';
import { Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { format} from 'date-fns';

function Liikuntalista(props){

    return(
        <>

        <Button
        style={{marginTop: 10}}
        component={Link}
        to="/uusi"
        variant="contained"
        color="primary"
        fullWidth
        >Lisää uusi tehtävä</Button>


        <List>
            {props.liikunnat.map((liikunta, idx) => {
                return (
                <ListItem key={idx}>
                    <ListItemText 
                    primary={liikunta.nimi}
                    secondary={format(liikunta.aikaAlku, "d.M.y HH:mm -") +  format(liikunta.aikaLoppu, " HH:mm")}
                    />
                </ListItem> 
                )
            })}
        </List>

        <Typography style={{marginLeft:10}}
        >Liikunnan yhteismäärä: {props.aikaTunti} tuntia, {props.aikaMinuutti} minuuttia.
        </Typography>

        </>
    );
}

export default Liikuntalista;