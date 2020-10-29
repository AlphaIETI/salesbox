import React, { useEffect } from 'react';
import clsx from 'clsx';
import './font.css';
import { Link } from 'react-router-dom';
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
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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
        backgroundColor: '#a9d7ee',
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

export default function Dashboard(props) {
    
    const classes = useStyles();
    const [openDrawer,serOpenDrawer] = React.useState(false);
    const[products, setProducts] = React.useState([]);

    const [cantPr, setCantPr] = React.useState(0);
    const editProducts = (pr) => {
        setCantPr(cantPr + pr);
    }

    useEffect (() => {
        fetch('https://salesbox-alpha-backend.herokuapp.com/products', {
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                data.map(pr => {
                    setProducts(data);
                })
            }).catch(error => {
                console.log(error)
            });
        },[cantPr]);

    
    const [filMarca,setFilMarca] = React.useState([]);

    const [view, setView] = React.useState(localStorage.getItem('nameEntity'));

    const handleChangeFilMarca = (ans) => {
        setFilMarca(filMarca.concat(ans));
    }

    const handleChangeDeleteFilMarca = (ans) => {
        setFilMarca(filMarca.filter(item => item !== ans));
    }

    const handleChangeStateDrawer = (ans) => {
        serOpenDrawer(ans);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarComponent funStateDrawer={handleChangeStateDrawer} funFilMarca={handleChangeFilMarca} funDelFilMarca={handleChangeDeleteFilMarca} view={view} editProducts={editProducts}/>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: openDrawer,
                })}
            >
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Typography
                        className="descProd6"
                        variant="h3"
                        component="h2"
                        align="center"
                    >
                        {view !== undefined && view !== "#" ? view: ""}
                    </Typography>
                    <Grid container spacing={2} className={classes.actionSpacer}>
                        {products.map(pr => { 
                            return ((view === "#" && (filMarca.includes(pr.brand) || filMarca.length === 0)) || view === pr.brand ) || (localStorage.getItem('isAdmin') && pr.brand === view) ?
                                <Grid key={products.indexOf(pr)} xs={12} sm={6} md={4} lg={4} xl={2} item>
                                    <Card>
                                        <div>
                                            <Link to="/Carrusel">
                                                <CardMedia
                                                    image={pr.image}
                                                    className={classes.media}
                                                >
                                                    <span className='porDescuento'>
                                                        - {pr.discount} %
                                                    </span>
                                                </CardMedia>
                                            </Link>
                                        </div>
                                        <CardContent className={classes.title}>
                                            {view === "#" ? 
                                                <div className="nombreMarca">
                                                    <h3>{pr.brand}</h3> 
                                                </div>
                                                :
                                                null
                                            }
                                            <div className="descriptionText">
                                                {pr.description}
                                            </div>
                                            <div className="centerText" >
                                                <span className="precioTotal" >
                                                    ${pr.price - (pr.price * (pr.discount/100))}
                                                </span>
                                                <span className="precioOrigi">
                                                    ${pr.price}
                                                </span>                                                                                                        
                                            </div>
                                        </CardContent>
                                        <CardActions
                                            classes={{ spacing: classes.actionSpacer }}
                                        >
                                            {localStorage.getItem('isAdmin') ? 
                                                <div>
                                                <Link to={{ pathname: '/Carrusel', state: {idProduct: '12s'} }}>
                                                    <Button color="secondary" >
                                                        Edit  <EditOutlinedIcon fontSize="small"/> 
                                                    </Button>
                                                </Link>
                                                </div>
                                                :
                                                <div>
                                                <Button color="secondary" >
                                                    {pr.id}  <AddShoppingCartOutlinedIcon fontSize="small"/> 
                                                </Button>
                                                </div>
                                            }
                                        </CardActions>
                                    </Card>
                                </Grid>
                                :
                                null
                        })}
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
