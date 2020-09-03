import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

//AppBar
import AppBarComponent from './appBar';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
            Salesbox
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    media: {
        height: 140,
    },
    title: {
        paddingBottom: '0.5em',
    },
    actionSpacer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const ids = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarComponent />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                    >
                        Nombre o logo de la tienda
                    </Typography>
                    <Grid container spacing={2} className={classes.actionSpacer}>
                        {ids.map(id => (
                            <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
                                <Card>
                                    <CardMedia
                                        image={`https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6e60d68e-7aad-4a83-81f9-763ad9d1dbfd/nikecourt-air-max-wildcard-zapatillas-de-tenis-195lsm.jpg`}
                                        className={classes.media}
                                    />
                                    <CardContent className={classes.title}>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            align="center"
                                        >
                                            DescripcionDelProducto{id}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        classes={{ spacing: classes.actionSpacer }}
                                    >
                                        <IconButton color="secondary">
                                            Añadir  <AddShoppingCartIcon /> 
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}