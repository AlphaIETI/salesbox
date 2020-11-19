import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import GeneralAppBar from '../Carrito/GeneralAppBar';
import CouponsInfo from "./CouponsInfo";




const useStyles = makeStyles((theme) => ({
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
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Coupons() {
  const classes = useStyles();
  const[coupons,setCoupons] = React.useState([]);
  useEffect(() => {
    fetch('https://salesbox-alpha-backend.herokuapp.com/api/coupons', {
      method: 'GET'
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        data.map(pr => {
          setCoupons(data);
        })
      }).catch(error => {
        console.log(error)
      });
  }, []);
  return (

    <div>
      <main>
        <GeneralAppBar ></GeneralAppBar>
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={1} className={classes.actionSpacer}> 
            {coupons.map(c => (
              <Grid xs={12} sm={6} md={4} lg={4} xl={2} item>
                <Card className={classes.root}>
                  <CardActionArea>

                    <CardMedia
                      className={classes.media}
                      image={c.image}
                      title="Contemplative Reptile"
                      
                    />
                    
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="h2">
                        Coupon
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {c.percentage}
                      </Typography>
                      <Typography variant="subtitle" color="textSecondary">
                        {c.endDate}
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