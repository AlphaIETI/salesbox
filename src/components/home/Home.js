import React from 'react';
import { Link } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import "../../App.css";


/*
const useStyles = makeStyles ((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap:'nowrap',
        width: 700,
        height: 700,
        transform: 'translateZ(0)',
    },
    titleBar: {
        background: 
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

export default function Home (){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.GridList} cols={2.5}>
                {tileData.map((tile)=>(
                    <GridListTile key={tile.img}> 
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

*/

const data = [
    {
        src:'https://www.parquelacolina.com/wp-content/uploads/2018/11/tennis-logo.png',
        title: 'Tennis',
    },
    {
        src:'https://www.parquelacolina.com/wp-content/uploads/2018/11/American-eagle.png',
        title: 'American Eagle',
    },
    {
        src:'https://www.parquelacolina.com/wp-content/uploads/2018/11/adidas-logo.png',
        title: 'Adidas',
    },
    {
        src: 'https://www.parquelacolina.com/wp-content/uploads/2018/11/americanino.png',
        title: 'Americanino',
    },
    {
        src: 'https://lh3.googleusercontent.com/proxy/7bByxzB9ArLS5akXMr6stLuEBdy9im7yiWXlF0MRaDktTcteFU7hzUr3TMY5TIfRBBpmAeiJoag3-EApeykoK1mzOtObvAR6P5SG_vXKMXICXuKGIYg',
        title: 'Diesel',
    },
    {
        src: 'https://www.parquelacolina.com/wp-content/uploads/2018/11/naf-naf-logo.png',
        title: 'Naf Naf',
    },
    {
        src: 'https://pngimg.com/uploads/nike/nike_PNG19.png',
        title: 'Nike',
    },
    {
        src: 'https://1000marcas.net/wp-content/uploads/2019/12/Puma-Logo.png',
        title: 'Puma',
    },
    {
        src: 'https://i.ytimg.com/vi/5b3Qv84zfIQ/maxresdefault.jpg',
        title: 'Reebok', 
    },
    {
        src: 'https://1000marcas.net/wp-content/uploads/2020/01/Tommy-Hilfiger-logo.png',
        title: 'Tommy Hilfiger',
    },
    {
        src: 'https://brandemia.org/sites/default/files/zara_nuevo_logo.jpg',
        title: 'Zara',
    },
    
];


function Imagenes(props){
    const {loading = false} = props;
    
    return(
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(11)) : data).map((item,index)=>(
                <Box key={index} width={210} marginRight={0.5}>
                    {item ? (
                        <img style = {{width:200, height:100}} alt={item.title} src={item.src}/>
                    ) : (
                        <Skeleton variant = "rect" width = {210} height={118} />
                    )}

                    {item ? (
                        <Box pr={2}>
                            <Typography gutterBottom variant="body2" >
                             {item.title}
                            </Typography>
                        </Box>
                    ) : (
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

Imagenes.propTypes={
    loading: PropTypes.bool,
};

export default function Home(){
    return (
        <Box overflow="hidden">
            <Imagenes loading/>
            <Imagenes />
        </Box>
    )
}




