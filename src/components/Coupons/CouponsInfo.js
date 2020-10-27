import React, {useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import IconButton from '@material-ui/core/IconButton';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';



export default function CouponsInfo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyButton=()=>(

  <IconButton>
    <FilterNoneIcon />
  </IconButton>


  )

  

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      <PermDeviceInformationIcon></PermDeviceInformationIcon>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Redime tu cupon ahora !"}</DialogTitle>
        <DialogContent>
         
          <TextField
          disabled
          id="filled-disabled"
          label="Copia este código "
          defaultValue="CXS20"
          variant="filled"
          
        />
                       
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ir ahora 
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
