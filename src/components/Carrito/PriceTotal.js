import React from 'react';
import "./PriceTotal.css";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
        pos2: {
            marginBottom: 10,
            marginTop:25,
        },

    });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom  >
                    <label>TOTAL DEL CARRITO</label>
                </Typography>
                <div className='division'>
                    <div className="leftColumn">
                        <Typography className={classes.pos2} variant="h5" component="h2" color="textSecondary" >
                            <label>Subtotal</label>
                        </Typography>
                    </div>
                    <div className="rightColumn">
                        <Typography className={classes.pos} color="textSecondary">
                            <label>$30.000</label>
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div className='division'>
                    <div className="leftColumn">
                        <Typography className={classes.pos} color="textSecondary" >
                            <label>Envío</label>
                        </Typography>
                    </div>
                    <div className="rightColumn">
                        <Typography className={classes.pos} color="textSecondary">
                            <label>$7.000</label>
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <div className='division'>
                    <div className="leftColumn">
                        <Typography className={classes.pos} variant="h5" component="p" >
                            <label>Total</label>
                        </Typography>
                    </div>
                    <div className="rightColumn">
                        <Typography className={classes.pos} variant="h5" component="p" >
                            <label>$37.000</label>
                        </Typography>
                    </div>
                </div>
                <Divider/>
                <Typography variant="body2" component="p">
                    <Button size="large" color="primary" variant="contained">
                        <label>PAGAR</label>
                        <PaymentIcon/>
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}