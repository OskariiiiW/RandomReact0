import { AppBar, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ListIcon from '@material-ui/icons/List';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Navigointi() {

    const [naytaValikko, setNaytaValikko] = useState(false);

    return(
        <CssBaseline>

        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={() => {setNaytaValikko(true)}}>
                    <MenuIcon/>
                </IconButton>

                <Drawer open={naytaValikko} onClose={() => {setNaytaValikko(false)}}>
                    <List style={{width: 220, marginTop: 50}} onClick={() => {setNaytaValikko(false)}}>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Aloitus"/>
                        </ListItem>

                        <ListItem button component={Link} to="/Saannot">
                            <ListItemIcon>
                                <ListIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Säännot"/>
                        </ListItem>

                        <ListItem button component={Link} to="/Ilmottaudu">
                            <ListItemIcon>
                                <GroupAddIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Ilmottaudu"/>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>

        </CssBaseline>
    );
}

export default Navigointi;