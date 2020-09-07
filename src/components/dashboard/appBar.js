import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccordionComponent from './accordion';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Perfil from '../perfil/Perfil';
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        //backgroundColor: 'primary',
      },
}));

export default function AppBarComponent(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
        if(props.fun !== undefined){
            props.fun(true);
        }
    };
    const handleDrawerClose = () => {
        setOpen(false);
        if(props.fun !== undefined){
            props.fun(false);
        }
    };
    const handleDrawer2 = () => {
        setOpen2(true);
    };
    return (
        <div>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Salesbox
            </Typography>
            <Link to="/ShopCar">
                <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon fontSize="large"/>
                    </Badge>
                </IconButton> 
            </Link>
            <Link to="/Home">
                <IconButton >
                    <HomeIcon fontSize="large" />
                </IconButton>
            </Link>
                <div>
                    <IconButton onClick={handleDrawer2}>
                        <Avatar >
                        </Avatar>
                    </IconButton>
                </div>
            </Toolbar>

        </AppBar>
        <Drawer
            anchor = "right"
            open = {open2}
            onClose={() => setOpen2(false)}>
            <Perfil/>

        </Drawer>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                    Filtros
                </IconButton>
            </div>
            <AccordionComponent />
        </Drawer>
        </div>
    );
}