import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container} from '@material-ui/core';
import GeneralAppBar from '../Carrito/GeneralAppBar';
import CouponsInfo from "./CouponsInfo";




const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    display: 'flex',
  },
  media: {
    height: 140,
  },
  actionSpacer: {
    display: 'flex',
    justifyContent: 'space-around',
},
container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
},
}));

export default function Coupons() {
  const classes = useStyles();
  const cupones=[{descripcion:" 40% en Adidas Original", duracion:"Válido hasta 05/10/2020", imagen:"https://tentulogo.com/wp-content/uploads/Adidas-CABECERA-POST-BLOG.jpg"},
                 {descripcion:" 20% en toda la tienda Nike ",duracion:"Válido hasta 15/09/2020", imagen:"https://mediaservice.retailmenot.com/ws/mediagroup/BTHHXRBH2FALVJJX77IGLD6A6M?width=300&height=150"},
                 {descripcion:" 50% en Calzado para mujer", duracion:"Válido solo por hoy", imagen:"https://mediaservice.retailmenot.com/ws/mediagroup/XSC6QDC7RFG4ZLTJM2MBKVK6JI?width=300&height=150"},
                 {descripcion:" 10% en Adidas Original", duracion:"Válido hasta 28/10/2020", imagen:"https://www.floridapc.co/images/florida/almacenes/tennis/tennis-florida-parque-comercial.jpg"},
                 {descripcion:" 2x1 en toda la tienda ", duracion:"Válido hasta 09/12/2020", imagen:"https://www.bndt.cl/images/work/work18_americanino/work18_americanino04.jpg"},
                 {descripcion:" 80% en prendas masculinas", duracion:"Válido hasta agotar existencias", imagen:"https://1000marcas.net/wp-content/uploads/2020/01/Tommy-Hilfiger-simbolo.jpg"},
                 {descripcion:" 20% en joyeria", duracion:"Válido hasta 21/10/2020", imagen:"https://i.ytimg.com/vi/9pbJwVLlPrM/hqdefault.jpg"},
                 {descripcion:" 10% en vestidos de baño ", duracion:"Válido hasta 25/10/2020", imagen:"https://1000marcas.net/wp-content/uploads/2020/01/Bershka-emblema.jpg"},
                 {descripcion:" 15% en abrigos y chaquetas", duracion:"Válido hasta media noche", imagen:"https://cityplazacc.com/wp-content/uploads/2020/01/NAF-NAF.jpg"},
                ];

  return (
    
  <div>
  <main>
  <GeneralAppBar ></GeneralAppBar>
  <Container maxWidth="md" className={classes.container}>
  <Grid container spacing={1} className={classes.actionSpacer}>
    {cupones.map(c=>(
      <Grid xs={12} sm={6} md={4} lg={4} xl={2} item>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={c.imagen}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h2">
            Coupon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {c.descripcion}
          </Typography>
          <Typography variant="subtitle" color="textSecondary">
           {c.duracion}
          </Typography>
          <CouponsInfo></CouponsInfo>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>
    ))}
  </Grid>
  </Container>
  </main>
  </div>
  );
}