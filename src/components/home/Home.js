import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AppBarComponent from '../dashboard/appBar';
import Search from './Search';
import './menu.css';
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
        width: 500,
        height: 450,
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
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {tileData.map((tile)=>(
                    <GridListTile key={tile.img} cols={tile.featured ? 2:1} rows ={tile.featured ? 2:1}>
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

class Home extends React.Component{

    render(){
        return (
            
            <div className = "container">
                <AppBarComponent />
                <br/><br/>
                <div className = "subcontainer">
                    
                    <div className = "logo">
                        {this.props.title}
                        
                    </div>
                    <div className = "search">
                        <Search >
                        </Search>
                    </div>
                    
                </div>
                
            </div>
        );

        }
    }


export default Home;