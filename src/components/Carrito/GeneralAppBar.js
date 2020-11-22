import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import logo from '../../logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    },
    toolbar:{
        backgroundColor: '#272C2A'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    colorIcons:{
        color: '#8A9592'

    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar  position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    <Link to="/Home" className={classes.colorSalesBox}>
                    <img src={logo} alt="logo" style={{ height: '80px', position: 'relative', top: '0px'}} />
                    </Link>
                    </Typography>
                    <Link to="/Home">
                        <IconButton >
                            <HomeOutlinedIcon fontSize="large"  className={classes.colorIcons}/>
                        </IconButton>
                    </Link>
                    <Link to="/Favorites">
                        <IconButton >
                            <FavoriteBorderOutlinedIcon fontSize="large"  className={classes.colorIcons}/>
                        </IconButton>
                    </Link>
                    <Link to="/ShopCar">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={5} color="secondary">
                                <ShoppingCartOutlinedIcon fontSize="large"  className={classes.colorIcons}/>
                            </Badge>
                        </IconButton> 
                    </Link>
                    <Link to="/EstadoPedido">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={2} color="secondary">
                                <AssignmentOutlinedIcon fontSize="large"  className={classes.colorIcons}/>
                            </Badge>
                        </IconButton> 
                    </Link>
                    <Link to="/Coupons">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={2} color="secondary">
                                <ConfirmationNumberOutlinedIcon fontSize="large"  className={classes.colorIcons}/>
                            </Badge>
                        </IconButton> 
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}