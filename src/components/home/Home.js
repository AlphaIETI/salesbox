import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import AppBarComponent from '../dashboard/appBar';
import { Link ,Redirect,Router,Route} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const images = [
  {
    url: "https://www.centrocomercialfundadores.com/wp-content/uploads/2017/09/TENNIS.jpg",
    title: "Tennis",
    width: "30%",
  },
  {
    url: "https://creditoacr.com/wp-content/uploads/2019/10/naf-naf-Logo.jpg",
    title: "Naf Naf",
    width: "30%",
  },
  {
    url: "https://www.centrocomercialfundadores.com/wp-content/uploads/2017/08/americanino.jpg",
    title: "Americanino",
    width: "30%",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg",
    title: "Nike",
    width: "30%",
  },
  {
    url: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
    title: "Adidas",
    width: "30%",
  },
  {
    url: "https://brandemia.org/sites/default/files/zara_nuevo_logo.jpg",
    title: "Zara",
    width: "30%",
  },
  {
    url: "https://www.sibaritissimo.com/wp-content/uploads/2010/06/Tommy-Hilfiger-Logo.jpg",
    title: "Tommy Hilfiger",
    width: "30%",
  },
  {
    url: "https://www.cclaveronica.com/wp-content/uploads/2016/08/logo-bershka.jpg",
    title: "Bershka",
    width: "30%",
  },
  {
    url: "https://www.roundabouthomeless.org/wp-content/uploads/2020/01/HM-Share-Image.jpg",
    title: "Bershka",
    width: "30%",
  },
  

  
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    top: '50px',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      width: '50% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(17)}px ${theme.spacing(22.5)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
   root2: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
  }));

export default function ButtonBases() {
  const classes = useStyles();
  const arrowStyles = useArrowDarkButtonStyles();
  const redirect = ()=>{window.location='/Dashboard'}
  return (
    <div className={classes.root}>
      <AppBarComponent />
        <Container maxWidth="lg">
        {images.map((image) => (
              <ButtonBase
                  focusRipple
                  key={image.title}
                  className={classes.image}
                  onClick={redirect}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                      width: image.width,
                  }}
                  >
                  <span
                      className={classes.imageSrc}
                      style={{
                      backgroundImage: `url(${image.url})`,
                      }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                      <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes.imageTitle}
                      >
                      </Typography>
                  </span>
              </ButtonBase>
        ))}
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <Grid xs={10} sm={2} md={4} lg={6} xl={2} item>
                  <Card className={classes.root}>
                      <div className={classes.details}>
                          <CardContent className={classes.content}>
                              <Typography component="h5" variant="h5" color="error" >
                                  SOLO X POCAS HORAS
                              </Typography>
                              <Typography variant="subtitle1" color="textSecondary">
                                  Ropa al 30% DCTO
                              </Typography>
                              <Typography variant="subtitle2" color="textSecondary">
                                  Referencias seleccionadas
                              </Typography>
                          </CardContent>
                      </div>
                      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>       
                      <CardMedia
                          className={classes.cover}
                          image="https://www.gef.com.co/wcsstore/CrystalCo_CAT_AS/2020/GEF/ES-CO/Imagenes/Mujeres/DEPORTIVO/Ooya_Protect_Fem/566x715/Chaqueta-Mujer-Ooya-Protect-Fem-Gris-Medio-37740-Frente-Gef.jpg"
                          title="Ropa"
                      />
                  </Card>
                  <br></br>
                  <Card className={classes.root}>
                      <div className={classes.details}>
                          <CardContent className={classes.content}>
                              <Typography component="h5" variant="h5" color="error">
                                  2 X 99.000
                              </Typography>
                              <Typography variant="subtitle1" color="textSecondary">
                                  ZAPATOS 
                              </Typography>
                              <Typography variant="subtitle2" color="textSecondary">
                                  Referencias seleccionadas
                              </Typography>
                          </CardContent>
                      </div>
                      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>       
                      <CardMedia
                          className={classes.cover}
                          image="https://arturocalle.vteximg.com.br/arquivos/ids/229935-800-1065/HOMBRE-ZAPATOS-10081812-MIEL_2.jpg?v=637045243901730000"
                          title="Ropa"
                      />
                  </Card>
              </Grid>
        </Container>
    </div>
  );
}
