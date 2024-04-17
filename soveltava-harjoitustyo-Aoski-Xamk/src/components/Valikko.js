import { AppBar, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Valikko() {

    const [naytaValikko, setNaytaValikko] = useState(false);

    return(
        <CssBaseline>

        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={() => {setNaytaValikko(true)}}>
                    <MenuIcon/>
                </IconButton>

                <Drawer open={naytaValikko} onClose={() => {setNaytaValikko(false)}}>
                    <List style={{width: 220, marginTop: 60}} onClick={() => {setNaytaValikko(false)}}>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Etusivu"/>
                        </ListItem>

                        <ListItem button component={Link} to="/lista">
                            <ListItemIcon>
                                <DehazeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Lista"/>
                        </ListItem>

                        <ListItem button component={Link} to="/lisaa">
                            <ListItemIcon>
                                <AddCircleOutlineIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Lisää"/>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>

        </CssBaseline>
    );
}

export default Valikko;