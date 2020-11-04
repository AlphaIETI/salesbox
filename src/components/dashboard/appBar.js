import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccordionComponent from './accordion';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import Perfil from '../perfil/Perfil';
import Avatar from "@material-ui/core/Avatar";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import AddProd from './addProd';
import AddPromotion from '../promotion/addPromotion';

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
    },
    drawerHeader: {
        backgroundColor: '#E5E7E7',
    },
}));

export default function AppBarComponent(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
        if(props.funStateDrawer !== undefined){
            props.funStateDrawer(true);
        }
    };
    const handleDrawerClose = () => {
        setOpen(false);
        if(props.funStateDrawer !== undefined){
            props.funStateDrawer(false);
        }
    };
    const handleDrawer2 = () => {
        setOpen2(true);
    };
    return (
        <div>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
            {props.flagProducts ?
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                :
                null
            }
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Salesbox
            </Typography>
            {!localStorage.getItem('isAdmin') ?
            <div>
                <Link to="/Home">
                    <IconButton >
                        <HomeOutlinedIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            :
            null
            }
            {localStorage.getItem('isLoggedIn') && !localStorage.getItem('isAdmin') && true ?
                <div>
                    <Link to="/Favorites">
                        <IconButton >
                            <FavoriteBorderOutlinedIcon fontSize="large" />
                        </IconButton>
                    </Link>
                    <Link to="/ShopCar">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={5} color="secondary">
                                <ShoppingCartOutlinedIcon fontSize="large"/>
                            </Badge>
                        </IconButton> 
                    </Link>
                    <Link to="/EstadoPedido">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={2} color="secondary">
                                <AssignmentOutlinedIcon fontSize="large"/>
                            </Badge>
                        </IconButton> 
                    </Link>
                    <Link to="/Coupons">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={2} color="secondary">
                                <ConfirmationNumberOutlinedIcon fontSize="large"/>
                            </Badge>
                        </IconButton> 
                    </Link>
                </div>
                :
                null
            }
            {localStorage.getItem('isAdmin') ?
                <Link to="/EstadoPedido">
                    <IconButton aria-label="cart">
                        <Badge badgeContent={2} color="secondary">
                            <AssignmentOutlinedIcon fontSize="large"/>
                        </Badge>
                    </IconButton>
                </Link>
                :
                null
            }
            {localStorage.getItem('isAdmin') ?
                <AddProd editProducts={props.editProducts}/>
                :
                null
            }
            {localStorage.getItem('isAdmin') ?
                <AddPromotion cantPromo={props.cantPromo}/>
                :
                null
            }
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
            {localStorage.getItem('isLoggedIn') ? 
                <Perfil/>
                :
                <Route>
                    <Redirect to='/Login'>
                    </Redirect>
                </Route>
            }

        </Drawer>
        {props.flagProducts ? 
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
                <AccordionComponent funFilMarca={props.funFilMarca} funDelFilMarca={props.funDelFilMarca} view={props.view} isComp={props.isComp} isLog={props.isLog} products={props.products} funFilColor={props.funFilColor} funDelFilColor={props.funDelFilColor} funMinMaxPrice={props.funMinMaxPrice} minMaxPrice={props.minMaxPrice} flagPrice={props.flagPrice}/>
            </Drawer>
            :
            null
        }
        </div>
    );
}