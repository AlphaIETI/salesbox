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

  const AirbnbSlider = withStyles({
    root: {
      color: '#3a8589',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: '#ebebeb 0 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: '#ccc 0 2px 3px 1px',
      },
      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
    },
    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);

  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }

export default function AccordionComponent() {
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
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
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
    return (
        <div>
            <Divider />
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Categorias</Typography>
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
                <Accordion square expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Marcas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={classes.root1}>
                            {brands.map(brand => (
                                <div>
                                <StyledBadge badgeContent={brand.cantProducts} color="default">
                                    <FormControlLabel
                                        control={<Checkbox color="primary"/>}
                                        label={brand.name}
                                    />
                                </StyledBadge>
                                </div>    
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            <Divider />
                <Accordion square expanded={expanded3 === 'panel1'} onChange={handleChange3('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Precios</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={classes.margin} />
                            <AirbnbSlider
                                ThumbComponent={AirbnbThumbComponent}
                                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                defaultValue={[0, 100]}
                            />
                    </AccordionDetails>
                </Accordion>
            <Divider />
                <Accordion square expanded={expanded4 === 'panel1'} onChange={handleChange4('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Redime Tus Cupones</Typography>
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
                <Accordion square expanded={expanded5 === 'panel1'} onChange={handleChange5('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Favoritos</Typography>
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
    );
}