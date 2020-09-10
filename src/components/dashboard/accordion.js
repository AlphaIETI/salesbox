import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const useStyles = makeStyles((theme) => ({
    root1: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    general:{
        backgroundColor:'#E5E7E7',
    },
    accordion:{
        backgroundColor:'#E5E7E7',
    }
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      color: '#42a5f5',
      right: -3,
      top: 20,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  function valuetext(valuePrice) {
    return `${valuePrice}°C`;
  }

export default function AccordionComponent(props) {
    const classes = useStyles();
    const [brands, setBrands] = React.useState([{name:"Tennis",cantProducts:"58"},
                                                {name:"Naf Naf",cantProducts:"24"},
                                                {name:"Nike",cantProducts:"154"},
                                                {name:"Adidas",cantProducts:"231"},
                                                {name:"Americanino",cantProducts:"75"},
                                                {name:"Zara",cantProducts:"12"},
                                                {name:"Tommy",cantProducts:"54"},
                                                {name:"H&M",cantProducts:"73"},
                                                {name:"Bershka",cantProducts:"17"},
                                                ]);
    const [categories, setCategories] = React.useState([{nameCategory:"Camisetas",items:["Color","Talla","Mangas"]},
                                        {nameCategory:"Camisas",items:["Color","Talla","Mangas"]},
                                        {nameCategory:"Chaquetas",items:["Color","Talla","Estilo"]},
                                        {nameCategory:"Pantalones",items:["Color","Talla","Estilo"]},
                                        {nameCategory:"Calzado",items:["Color","Talla","Tipo"]},
                                        {nameCategory:"Accesorios",items:["Color","Estilo"]}]);
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState("panel1");
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [view, setView] = React.useState(props.view);
    const [value, setValue] = React.useState(4);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, newExpanded) => {
        setExpanded2(newExpanded ? panel : false);
    };
    const handleChange3 = (panel) => (event, newExpanded) => {
        setExpanded3(newExpanded ? panel : false);
    };
    const handleChange4 = (panel) => (event, newExpanded) => {
        setExpanded4(newExpanded ? panel : false);
    };
    const handleChange5 = (panel) => (event, newExpanded) => {
        setExpanded5(newExpanded ? panel : false);
    };
    const handleChange6 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    const [stateCheckBox, setStateCheckBox] = React.useState([]);

    const handleChangeCheckBox = (event) => {
        if(!stateCheckBox.includes(event.target.name)){
            if(props.funFilMarca !== undefined){
                setStateCheckBox(stateCheckBox.concat(event.target.name));
                props.funFilMarca(event.target.name);
            }
        }else{
            if(props.funDelFilMarca !== undefined){
                setStateCheckBox(stateCheckBox.filter(item => item !== event.target.name));
                props.funDelFilMarca(event.target.name);
            }
        }
    };

    const [valuePrice, setValuePrice] = React.useState([0, 500000]);

    const handleChangeValuePrice = (event, newValue) => {
        setValuePrice(newValue);
    };
    return (
        <div className={classes.general}>
            <Divider />
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography color="primary">Categorias</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                        {categories.map(category => (
                            <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>{category.nameCategory}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {category.items.map((text, index) => (
                                        <ListItem button key={text}>
                                        <ListItemIcon>{text === "Color" ? <ColorLensIcon /> : null}</ListItemIcon>
                                        <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            <Divider />
            {view === "#" ? 
                <Accordion square expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')} className={classes.accordion}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography color="primary">Marcas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={classes.root1}>
                            {brands.map(brand => (
                                <div>
                                <StyledBadge badgeContent={brand.cantProducts} color="default">
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                color="primary"
                                                onChange={handleChangeCheckBox}
                                                name={brand.name}
                                            />}
                                        label={brand.name}
                                    />
                                </StyledBadge>
                                </div>    
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            :
            null
            }
            <Divider />
                <Accordion square expanded={expanded3 === 'panel1'} onChange={handleChange3('panel1')} className={classes.accordion}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography color="primary">Precios</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Slider
                            value={valuePrice}
                            onChange={handleChangeValuePrice}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />
                    </AccordionDetails>
                </Accordion>
            <Divider />
            {!localStorage.getItem('isAdmin') ?
            <div>  
                <Accordion square expanded={expanded4 === 'panel1'} onChange={handleChange4('panel1')} className={classes.accordion}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography color="primary">Redime Tus Cupones</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControlLabel
                            control={
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange6}
                                name="checkedB"
                                color="primary"
                            />
                            }
                        />
                    </AccordionDetails>
                </Accordion> 
            <Divider />
                <Accordion square expanded={expanded5 === 'panel1'} onChange={handleChange5('panel1')} className={classes.accordion}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography color="primary">Favoritos</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                        <Box borderColor="transparent">
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            :
            null
            }                        
        </div>
    );
}