import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
import Carousel from 'react-bootstrap/Carousel';

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

export default function Dashboard() {
    const classes = useStyles();
    const [openDrawer,serOpenDrawer] = React.useState(false);
    const products = [{marca:"Adidas",desc:"Descripción del producto",color:"Blanco",talla:"40",img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/127dee93a5a64100865eaa4300b2edb1_9366/Tenis_Advantage_Base_Blanco_EE7692_01_standard.jpg"},
                        {marca:"Adidas",desc:"Descripción del producto",color:"Rojo",talla:"40",img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e555117ecfcd47b3b991a97f00d44963_9366/Tenis_Runfalcon_Rojo_F36202_01_standard.jpg"},
                        {marca:"Adidas",desc:"Descripción del producto",color:"Negro",talla:"40",img:"https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2997010.jpg"},
                        {marca:"Nike",desc:"Descripción del producto",color:"Blanco",talla:"40",img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6e60d68e-7aad-4a83-81f9-763ad9d1dbfd/nikecourt-air-max-wildcard-zapatillas-de-tenis-195lsm.jpg"},
                        {marca:"Nike",desc:"Descripción del producto",color:"Rojo",talla:"40",img:"https://static.netshoes.com.mx/produtos/tenis-nike-downshifter-9/48/200-1230-048/200-1230-048_zoom1.jpg"},
                        {marca:"Nike",desc:"Descripción del producto",color:"Azul",talla:"40",img:"https://static.netshoes.com.ar/produtos/zapatillas-nike-nightgaze/29/001-1397-029/001-1397-029_zoom1.jpg?ims=544x"},
                        {marca:"Nike",desc:"Descripción del producto",color:"Azul",talla:"40",img:"https://shoesandmorebdn.com/1906-large_default/nike-air-jordan-1-one-mid-azules.jpg"},
                        {marca:"Tommy",desc:"Descripción del producto",color:"Negro",talla:"40",img:"https://www.gamepals.co/1468-thickbox_default/camiseta-tommy-hilfiger-color-negro.jpg"},
                        {marca:"Tommy",desc:"Descripción del producto",color:"Azul",talla:"40",img:"https://images-na.ssl-images-amazon.com/images/I/91p%2B900rABL._AC_UY500_.jpg"},
                        {marca:"H&M",desc:"Descripción del producto",color:"Blanco",talla:"40",img:"https://i.pinimg.com/originals/84/5d/cf/845dcf73265e82d57f609a65c58955e8.jpg"},
                        {marca:"H&M",desc:"Descripción del producto",color:"Verde",talla:"40",img:"https://lp2.hm.com/hmgoepprod?set=quality[79],source[/4f/d6/4fd6adeba7794c8a83cf10f40db63c25c8481c4f.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/main]"},
                        {marca:"Americanino",desc:"Descripción del producto",color:"Verde",talla:"40",img:"https://dafitistaticco-a.akamaihd.net/p/americanino-0306-72327-1-product.jpg"},
                        {marca:"Americanino",desc:"Descripción del producto",color:"Blanco",talla:"40",img:"https://i.pinimg.com/originals/0c/ca/13/0cca13c81a2d95f61f6d0b932f10db05.jpg"},
                        {marca:"Zara",desc:"Descripción del producto",color:"Negro",talla:"40",img:"https://static.zara.net/photos///2020/V/1/2/p/5085/002/040/2/w/615/5085002040_2_2_1.jpg?ts=1580307759304"},
                        {marca:"Bershka",desc:"Descripción del producto",color:"Blanco",talla:"40",img:"https://aws.glamour.es/prod/designs/v1/assets/666x1000/496022.jpg"},
                        {marca:"NafNaf",desc:"Descripción del producto",color:"Blanco",talla:"40",img:"https://dafitistaticco-a.akamaihd.net/p/naf-naf-7591-87795-1-product.jpg"},
                        {marca:"NafNaf",desc:"Descripción del producto",color:"Negro",talla:"40",img:"https://dafitistaticco-a.akamaihd.net/p/naf-naf-5270-72895-1-product.jpg"},
                        {marca:"Tennis",desc:"Descripción del producto",color:"Rojo",talla:"40",img:"https://tennis.vteximg.com.br/arquivos/ids/736802-275-420/CAM0000753_ROJO-2.jpg?v=636989117405670000"},];

    const [filMarca,setFilMarca] = React.useState([]);
    
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
            <AppBarComponent funStateDrawer={handleChangeStateDrawer} funFilMarca={handleChangeFilMarca} funDelFilMarca={handleChangeDeleteFilMarca}/>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: openDrawer,
                })}
            >
                <div className={classes.appBarSpacer} />
                <Container maxWidth="md" className={classes.container}>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                    >
                        Nombre o logo de la tienda
                    </Typography>
                    <Grid container spacing={2} className={classes.actionSpacer}>
                        {products.map(pr => { 
                            return (filMarca.length === 0 || filMarca.includes(pr.marca)) ?
                                <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
                                    <Card>
                                        <div>
                                            <CardMedia
                                                image={pr.img}
                                                className={classes.media}
                                            >
                                            </CardMedia>
                                        </div>
                                        <CardContent className={classes.title}>
                                            <Typography
                                                variant="h5"
                                                component="h5"
                                                align="center"
                                            >
                                                {pr.marca}
                                                {pr.desc}
                                                {pr.color}
                                                {pr.talla}
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
                                :
                                null
                        })}
                        {/*
                        <div>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6e60d68e-7aad-4a83-81f9-763ad9d1dbfd/nikecourt-air-max-wildcard-zapatillas-de-tenis-195lsm.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://dafitistaticco-a.akamaihd.net/p/naf-naf-5270-72895-1-product.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/84/5d/cf/845dcf73265e82d57f609a65c58955e8.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        </div>
                         */}
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}