import React from 'react';
import clsx from 'clsx';
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
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,

    content: {
        // https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg
        // https://lh3.googleusercontent.com/proxy/MYi8OgbPoKSA2m-s4qX-GrCXhpSVYnvkYSdemCSRwWJu8FuxOxexRUA89DrxOGYw-iN8S_F9tGJOMIFazEGy3tfmycECOGQy2fJ9a9e7ZckgoJ39UjjNUgu-pxnTYHdefuj8M7048Kc
        //https://grupobmt.com/wp-content/uploads/2014/06/background-pared-1.jpg
        //backgroundImage: `url(${"https://grupobmt.com/wp-content/uploads/2014/06/background-pared-1.jpg"})`,
        backgroundColor: '#D4E9EA',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
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
    const [openDrawer,serOpenDrawer] = React.useState(false);
    const ids = [1,2,3,4,5,6,7,8,9,10];

    const handleChangeStateDrawer = (ans) => {
        serOpenDrawer(ans);
      };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarComponent fun={handleChangeStateDrawer}/>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: openDrawer,
                })}
            >
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