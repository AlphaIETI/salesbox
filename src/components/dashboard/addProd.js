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
import InputAdornment from '@material-ui/core/InputAdornment';
import { OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

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
    const [typeProd, setTypeProd] = React.useState("");
    const [colorProd, setColorProd] = React.useState("");

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
        //console.log(document.getElementById("descripcion").value);
        //console.log(document.getElementById("precio").value);
        //console.log(document.getElementById("descuento").value);
        //console.log(typeProd);
        //console.log(colorProd);
        //console.log(document.getElementById("tallaProducto").value);
        //console.log(urlImg);

        if(typeProd === "Tenis"){
            if(document.getElementById("descripcion").value !== "" && document.getElementById("precio").value !== "" && document.getElementById("descuento").value !== "" && colorProd !== "" && document.getElementById("tallaProducto").value !== "" && urlImg !== ""){
                const pr = {marca:"Nike",desc:document.getElementById("descripcion").value,precio:document.getElementById("precio").value,descuento:document.getElementById("descuento").value,color:colorProd,talla:document.getElementById("tallaProducto").value,img:urlImg};
                props.editProducts(pr);
                setPreviewSource();
                setTypeProd("");
                setColorProd("");
                setUrlImg("");
                setOpenForm(false);
            } else {
                alert("No se completaron todos los datos del Producto.")
            }
        } else {
            alert("No se selecciono el tipo del producto 'Solo funciona el tipo TENIS'")
        }
    }

    const handleChangeTypeProd = (e) => {
        setTypeProd(e.target.value);
    }

    const handleChangeColorProd = (e) => {
        setColorProd(e.target.value);
    }

    const handleClickOpen = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setPreviewSource();
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
                        id="descripcion"
                        label="Descripción"
                        variant="outlined"
                        type="text"
                        inputProps={{
                            maxLength: 50,
                          }}
                        fullWidth
                    />
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="precio">Precio</InputLabel>
                        <OutlinedInput
                            required
                            fullWidth
                            id="precio"
                            type="number"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="descuento"
                        label=" % de descuento"
                        variant="outlined"
                        type="number"
                        InputProps={{ inputProps: { max: 100, min: 0 } }}
                        fullWidth
                    />
                    <InputLabel id="demo-mutiple-name-label">Tipo</InputLabel>
                    <Select
                        required
                        id="tipoProducto"
                        labelId="demo-mutiple-name-label"
                        margin="dense"
                        displayEmpty
                        variant="outlined"
                        onChange={handleChangeTypeProd}
                        fullWidth
                    >
                        <MenuItem value="Tenis">Tenis</MenuItem>
                        <MenuItem value="Camisas">Camisas</MenuItem>
                        <MenuItem value="Accesorios">Accesorios</MenuItem>
                    </Select>

                    {typeProd === "Tenis" ? 
                        <div>
                            <InputLabel id="demo-mutiple-name-label-color">Color</InputLabel>
                            <Select
                                required
                                id="productoColor"
                                labelId="demo-mutiple-name-label-color"
                                margin="dense"
                                displayEmpty
                                variant="outlined"
                                onChange={handleChangeColorProd}
                                fullWidth
                            >
                                <MenuItem value="Negro">Negro</MenuItem>
                                <MenuItem value="Blanco">Blanco</MenuItem>
                                <MenuItem value="Rojo">Rojo</MenuItem>
                                <MenuItem value="Azul">Azul</MenuItem>
                                <MenuItem value="Gris">Gris</MenuItem>
                                <MenuItem value="Verde">Verde</MenuItem>
                            </Select>
                            <TextField
                                required
                                autoFocus
                                margin="dense"
                                id="tallaProducto"
                                label="Talla"
                                variant="outlined"
                                type="number"
                                fullWidth
                            />
                        </div>
                        :
                        null
                    }

                    <div>
                        <input 
                            required
                            type="file" 
                            name="image" 
                            onChange={handleFileImg} 
                            value={fileInputState} 
                        />
                        {previewSource && (
                            <div>
                                <img src={previewSource} alt="chosen" style={{height: '300px'}}/>
                                <Button onClick={handleSubmit} color="primary">
                                    Subir Imagen
                                </Button>
                            </div>
                        )}
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancelar
                    </Button>
                    <Button onClick={handleAddProd} color="primary">
                    Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}