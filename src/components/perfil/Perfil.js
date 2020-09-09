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
			width: theme.spacing(15),
			height: theme.spacing(15),
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
	return (
			<Accordion >
				<AccordionDetails  className="imagenacordion">

					<Typography >
						<h3> Nombre: </h3>
						<h3> Sergio A Nuñez M </h3>
						<Avatar className={classess.large}></Avatar>
						<h3> Correo: </h3>
						<h3 > c.hecho.28@hotmail.com </h3>
						<h3> Puntos: </h3>
						<h3> 0250 </h3>
						<h3> INFORMACIÓN </h3>
						<h3>Tel:</h3>
						<h3>310 5726007 </h3>
						<h3> Dirección: </h3>
						<h3> Cra 36A # 63C - 70 </h3>
					</Typography>

				</AccordionDetails>
			</Accordion>
	);
}

