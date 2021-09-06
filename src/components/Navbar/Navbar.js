import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Tabs,Tab, IconButton, ListItem, SwipeableDrawer, ListItemText, Divider, ListItemIcon } from '@material-ui/core';

import { ShoppingCartOutlined } from '@material-ui/icons';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuIcon from '@material-ui/icons/Menu';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import HighQualityIcon from '@material-ui/icons/HighQuality';

import { Container, Wrapper, Left, Title, Center, Right, MenuItem, Burger} from './styles'



const theme = createTheme({
    palette: {
                primary: {
                    main: '#936a53',
                },
                secondary: {
                    main: '#000',
                },
            },
});

function Navbar() {
    const [value, setValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e,value) => {
        setValue(value);
    };
    const handleDrawerOpen = () => {
        setIsOpen(true);
    };
    
    const handleDrawerClose = (event) => {
        if (event && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setIsOpen(false)
    };

    const list = [
        { id: 0, text: "Home", route: "/", icon: <HomeIcon/>},
        { id: 1, text: "About", route: "/about",icon: <InfoIcon/>},
        { id: 2, text: "Products", route: "/product", icon: <HighQualityIcon/>}
    ];
    return (
        <ThemeProvider theme={theme}>
        <Container>
            <Wrapper>
                <Left>
                    <Title>Nav<span style={{color: '#936a53'}}>Bar</span></Title>
                </Left>
                <Center>
                    <Tabs indicatorColor="primary" value={value} onChange={handleChange}>
                        {list.map((item,index) => {
                            const {id,text,route} = item;
                            return(
                                <Tab value={id} component={Link} to={route} label={text}/>
                            )
                        })}
                    </Tabs>
                </Center>
                <Right>
                    <MenuItem>
                        <IconButton component={Link} to="/auth">
                            <PersonAddIcon/>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton component={Link} to="/cart">
                            <Badge badgeContent={1}color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </IconButton>
                    </MenuItem>
                    <Burger>
                        <IconButton onClick={handleDrawerOpen} aria-label="open drawer" > 
                               <MenuIcon />
                        </IconButton>
                    </Burger>    
                </Right>
            </Wrapper>
            <SwipeableDrawer anchor='right' open={isOpen} onClose={handleDrawerClose}  swipeAreaWidth={50} >
                                    <IconButton onClick={handleDrawerClose} style={{color: '#936a53'}}>
                                        <ChevronRightIcon />
                                    </IconButton>
                                    <Divider/>
                                    {list.map((item,index) => {
                                        const {id,text,route,icon} = item;
                                        return (
                                            <ListItem button key={id} component={Link} to={route} onClick={handleDrawerClose}>
                                                {icon && <ListItemIcon style={{color: '#936a53'}}>{icon}</ListItemIcon>}
                                                <ListItemText primary={text}/>
                                            </ListItem>
                                        )
                                    })}

            </SwipeableDrawer>
        </Container>
        </ThemeProvider>
    );
};

export default Navbar;
