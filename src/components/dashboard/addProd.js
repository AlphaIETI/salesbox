import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
    add: {
      position: 'relative',
      bottom: '5%',
      left: '47%',
    },
}));

export default function NewTask(props) {
    const classes = useStyles();
    const [openForm, setOpenForm] = React.useState(false);
    const [state, setState] = React.useState('');

    const handleClickOpen = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenForm(false);
    };

    const handleChangeState = (event) => {
        setState(event.target.value);
    };

    const handleAdd = () => {
        props.fun({description:document.getElementById("desc").value,status:state,dueDate:document.getElementById("date").value,responsible:{name:document.getElementById("resp").value}});
        setOpenForm(false);
  };

  return (
    <div>
        <IconButton onClick={handleClickOpen}>
            <QueueOutlinedIcon fontSize="large" />
        </IconButton>
        <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Agregar Producto Nuevo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Complete los datos del producto.
                </DialogContentText>
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="nomb"
                    label="Nombre"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="desc"
                    label="Descripción"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="prec"
                    label="Precio"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                <InputLabel id="demo-mutiple-name-label">Tipo</InputLabel>
                <Select
                    required
                    id="stateForm"
                    labelId="demo-mutiple-name-label"
                    margin="dense"
                    displayEmpty
                    variant="outlined"
                    fullWidth
                >
                    <MenuItem value="In Progress">Tenis</MenuItem>
                    <MenuItem value="Ready">Camisas</MenuItem>
                    <MenuItem value="Completed">Accesorios</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                Add
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}