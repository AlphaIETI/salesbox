import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from '@material-ui/icons/Favorite';

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
                    <Link to="/Home">
                        <IconButton >
                            <HomeIcon fontSize="large" />
                        </IconButton>
                    </Link>
                    <Link to="/Favorites">
                        <IconButton >
                            <FavoriteIcon fontSize="large" />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}