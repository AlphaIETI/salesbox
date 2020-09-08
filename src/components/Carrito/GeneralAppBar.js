import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

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
                    <Link to="/ShopCar">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon fontSize="large"/>
                            </Badge>
                        </IconButton>
                    </Link>
                    <Link to="/Login">
                        <IconButton >
                            <HomeIcon fontSize="large" />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}