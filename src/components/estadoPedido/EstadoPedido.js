import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {blue} from "@material-ui/core/colors";
import {colors} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import saco from "../../img/saco.jpg";
import "./estadoPedido.css";
import GeneralAppBar from "../Carrito/GeneralAppBar";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //color: theme.palette.text.secondary,
    },
}));

function getSteps() {
    return ['Producto Pagado', 'Producto Despachado', 'Producto entregado','Fin'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Su pago fue realizado exitosamente ';
        case 1:
            return 'El producto fue despachado y llegara pronto';
        case 2:
            return 'El producto se entrego exitosamente';
        default:
            return 'Gracias';
    }
}

export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };



    const handleNext = () => {


        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
        <GeneralAppBar/>
        <br/>
            <br/>
            <Grid direction={"column"} justify={"center"} alignItems={"center"} container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h3> Pedido</h3>
                        <h3> Numero de Pedido </h3>
                        <Grid justify={"center"} alignItems={"center"} item xs={2}>
                            <Paper className={classes.paper}>
                                <img src={saco} className="ima-dino"/>
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.root}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};

                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <div>
                                {activeStep === steps.length ? (
                                    <div >
                                        <Typography align={"center"}  variant="h3" className={classes.instructions}>
                                            Fin
                                        </Typography>
                                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                                            <Button variant= "contained" color="secondary" onClick={handleReset} className={classes.button}>
                                                Reset
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div  >
                                        <Typography align={"center"} variant="h4" color={'white'} className={classes.instructions}>
                                            {getStepContent(activeStep)}

                                        </Typography>
                                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                                            <span >
                                                <Button variant="contained" color="secondary" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Atras
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={handleNext}
                                                    className={classes.button}>

                                                    {activeStep === steps.length - 1 ? 'Fin' : 'Siguiente'}
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}