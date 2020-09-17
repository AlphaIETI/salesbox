import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    const [fileInputState, setFileInputState] = React.useState('');
    const [previewSource, setPreviewSource] = React.useState();
    const [file, setFile]= React.useState();
    const [urlImg, setUrlImg] = React.useState("");

    const CLOUDINARY_URL_PREVIEW = 'https://res.cloudinary.com/dja8smkgx/image/upload/v';
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dja8smkgx/image/upload';

    const CLOUDINARY_PRESETS = 'b059hpk6';

    const CLOUDINARY_PRESETS_2 = 'ml_default';

    

    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_PRESETS);
        
        const res = await axios.post(CLOUDINARY_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setUrlImg(CLOUDINARY_URL_PREVIEW+res.data.version+"/"+res.data.public_id+"."+res.data.format);

    };

    const handleFileImg = (e) => {
        const file1 = e.target.files[0];
        setFile(file1);
        const reader = new FileReader();
        reader.readAsDataURL(file1);
        reader.onloadend = () =>{
            setPreviewSource(reader.result);
        }
    };

    const handleAddProd = () => {
        const pr = {marca:"Nike",desc:document.getElementById("desc").value,color:"Negro",talla:"40",img:urlImg};
        props.editProducts(pr);
        setPreviewSource();
        setOpenForm(false);
    }

    const handleClickOpen = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
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

                    <div>
                        <input 
                            type="file" 
                            name="image" 
                            onChange={handleFileImg} 
                            value={fileInputState} 
                        />
                        {previewSource && (
                            <img src={previewSource} alt="chosen" style={{height: '300px'}}/>
                        )}
                        <Button onClick={handleSubmit} color="primary">
                            Upload
                        </Button>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleAddProd} color="primary">
                    Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}