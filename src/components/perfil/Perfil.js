import React from 'react';

import './Perfil.css';
import Avatar from '@material-ui/core/Avatar';
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Container } from 'react-layout-components';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

export default function Perfil (){

	const useStyles = makeStyles((theme) => ({
		root: {
			width: '100%',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			flexBasis: '33.33%',
			flexShrink: 0,
		},
		secondaryHeading: {
			fontSize: theme.typography.pxToRem(15),
			color: theme.palette.text.secondary,
		},
	}));
	const useStyless = makeStyles((theme) => ({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		small: {
			width: theme.spacing(3),
			height: theme.spacing(3),
		},
		medium: {
			width: theme.spacing(5),
			height: theme.spacing(5),
		},
		large: {
			width: theme.spacing(14),
			height: theme.spacing(14),
		},
	}));
	const classess = useStyless();
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleLogout = () => {
		localStorage.clear();
	};
	return (
			<Accordion >
				<Grid direction={"column"} justify={"center"} alignItems={"center"} container spacing={2}>
				<AccordionDetails  className="imagenacordion">
					<Typography align={"center"} >
						<h4> Nombre </h4>
						<h6> Sergio A Nuñez M </h6>
						<br/>
						<Grid direction={"column"} justify={"center"} alignItems={"center"} container spacing={2}>
							<Avatar className={classess.large}></Avatar>
						</Grid>
						<br/>
						<h4> Correo </h4>
						<h6> c.hecho.28@hotmail.com </h6>
						<h4> Puntos </h4>
						<h6> 0250 </h6>
						<h3> INFORMACIÓN </h3>
						<h4>Tel</h4>
						<h6>310 5726007 </h6>
						<h4> Dirección </h4>
						<h6> Cra 36A # 63C - 70 </h6>
					</Typography>
				</AccordionDetails>
					<Button
						onClick={handleLogout}
						variant="contained"
						fullWidth
						color="primary"
						startIcon={<ExitToAppIcon />}
					>
						<Typography variant="h9">
							Logout
						</Typography>
					</Button>
				</Grid>
			</Accordion>
	);
}

