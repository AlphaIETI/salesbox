import React, { useEffect }  from 'react';
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
import Button from '@material-ui/core/Button';
import Color from 'color';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import Promotions from '../promotion/promotions'
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
    title: "Tommy",
    width: "30%",
  },
  {
    url: "https://www.cclaveronica.com/wp-content/uploads/2016/08/logo-bershka.jpg",
    title: "Bershka",
    width: "30%",
  },
  {
    url: "https://www.roundabouthomeless.org/wp-content/uploads/2020/01/HM-Share-Image.jpg",
    title: "H&M",
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
  content: {
    backgroundColor: '#D4E9EA',
      flex: '1 0 auto',
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
    actionArea:{
      borderRadius: 16,
      transition: '0.2s',
      '&:hover':{
        transform:'scale(1.1)',
      },
    card:({color}) => ({
      minWidth: 256,
      borderRadius: 16,
      boxShadow: 'none',
      '&:hover':{
        boxShadow: `0 6px 12px 0 ${Color(color)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
        },
    }),
    content: ({ color }) => {
      return {
        backgroundColor: color,
        padding: '1rem 1.5rem 1.5rem',
      };
    },
      title: {
        fontFamily: 'Keania One',
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
      },
      subtitle: {
        fontFamily: 'Montserrat',
        color: '#fff',
        opacity: 0.87,
        marginTop: '2rem',
        fontWeight: 500,
        fontSize: 14,
      },
  }}));

  const CustomCard = ({classes, image,title,subtitle}) => {
    const mediaStyles=useFourThreeCardMediaStyles();
    return (
      <CardActionArea className={classes.actionArea}>
        <Card className={classes.card}>
          <CardMedia classes={mediaStyles} image={image}/>
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={'h2'}>
              {title}
            </Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  };


const useGridStyles=makeStyles(({breakpoints}) =>  ({
    root:{
      [breakpoints.up('md')]:{
        justifyContent:'center',
      },
    },
  }));

export default function ButtonBases() {
  const classes = useStyles();
  const arrowStyles = useArrowDarkButtonStyles();
  const BACKENDAPI = 'https://salesbox-alpha-backend.herokuapp.com/';
  const redirect = (td)=>{
    localStorage.setItem('nameEntity', td);
    window.location='/Dashboard'
  };
  const handleViewAll = () => {
    localStorage.setItem('nameEntity', "#");
    window.location='/Dashboard'
  };
  const gridStyles = useGridStyles();
  const styles= useStyles({color: '#ff0000'})

  //Promotions
  const [cantPromo,setCantPromo] = React.useState(0);
  const handleCantPromo = (cant) => {
    setCantPromo(cantPromo + cant);
  }
  const[promotions, setPromotions] = React.useState([]);
  useEffect (() => {
      fetch(BACKENDAPI+'api/promotions', {
          method: 'GET'
      }).then(response => response.json())
          .then(data => {
              console.log(data)
              data.map(pr => {
                  setPromotions(data);
              })
              setCantPromo(data.length);
          }).catch(error => {
              console.log(error)
          });
      },[cantPromo]);

  //Home images

  const[brands,setBrands]=React.useState([]);
  useEffect(() => {
    fetch(BACKENDAPI+'api/entities', {
      method: 'GET'
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        data.map(pr => {
          setBrands(data);
        })
      }).catch(error => {
        console.log(error)
      });
  }, []);
  

  return (
    <div className={classes.root}>
      <AppBarComponent cantPromo={handleCantPromo}/>
        <Container maxWidth="lg">
        {brands.map((brand) => (
              <ButtonBase
                  focusRipple
                  key={brand.name}
                  className={classes.image}
                  onClick={() => redirect(brand.name)}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                      width: "30%",
                  }}
                  >
                  <span
                      className={classes.imageSrc}
                      style={{
                      backgroundImage: `url(${brand.image})`,
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
              <br></br><br></br><br></br>
              {!localStorage.getItem('isAdmin') ?
              <div>
              <Button
                  onClick={handleViewAll}
                  variant="contained"
                  color="primary"
                >
                  <Typography variant="body2">
                    Ver todos los productos
                  </Typography>
              </Button>
              </div>
              :
              null
              }
              <br></br><br></br><br></br>
              <Promotions promotions={promotions}/>
        </Container>
    </div>
  );
}