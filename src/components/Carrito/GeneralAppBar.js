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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar  position="fixed">
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Salesbox
                    </Typography>
                    <Link to="/Home">
                        <IconButton >
                            <HomeOutlinedIcon fontSize="large" />
                        </IconButton>
                    </Link>
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
                </Toolbar>
            </AppBar>
        </div>
    );
}