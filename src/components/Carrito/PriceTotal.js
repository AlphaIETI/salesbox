import React from 'react';
import "./PriceTotal.css";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Divider} from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';


export default function PriceTotal(){

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 20,
            marginBottom: 12,
        },
        pos: {
            marginBottom: 10,
            marginTop:10,
        },

    });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom  >
                    TOTAL DEL CARRITO
                </Typography>
                <Typography variant="h5" component="h2" color="textSecondary" >
                    Subtotal
                </Typography>
                <Divider/>
                <Typography className={classes.pos} color="textSecondary">
                    Envío
                </Typography>
                <Divider/>
                <CardContent>
                    <Typography className={classes.pos} variant="h5" component="p">
                        Total
                    </Typography>
                </CardContent>

                <Divider/>
                <Typography variant="body2" component="p">
                    <Button fullWidth='True' size="large" color="primary" variant="contained">
                        PAGAR
                        <PaymentIcon/>
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}