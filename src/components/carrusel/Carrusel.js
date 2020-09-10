import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    content: {
        flex: '1 0 auto',
        
    },
    alinear:{
        alignItems: 'right',
        marginRight: 10,
       
    },
    root3: {
        marginTop: 20,
        width: 300,
        marginRight: 10,
      
      },
      root2: {
        marginTop: 20,
        width: 400,
      },

}));

export default function Carrusel() {
    const classes = useStyles();
    return (
        <div >
        <div className={classes.root2} >
            <Container  className={classes.root2} >
                <Carousel className={classes.root3}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tennis.vteximg.com.br/arquivos/ids/1121245-1048-1600/tshirt-para-mujer-tennis-gris.jpg?v=637340939150070000"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tennis.vteximg.com.br/arquivos/ids/1121246-1048-1600/tshirt-para-mujer-tennis-gris.jpg?v=637340939168930000"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tennis.vteximg.com.br/arquivos/ids/1121247-1048-1600/tshirt-para-mujer-tennis-gris.jpg?v=637340939178770000"
                            alt="Third slide"
                        />

                    </Carousel.Item>    
                </Carousel>
                <br></br>
                <Card className={classes.alinear}>
                    <CardContent className={classes.content}>  
                        <Typography variant="h5" color="textSecondary">
                            Tshirt para mujer tennis, fondo entero con estampado 
                        </Typography>
                        <Typography variant="subtitle2">
                            Ref: TSH-ENT-0002836
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" color="error">
                            $ 39.900
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
        
    </div>
    );
}
