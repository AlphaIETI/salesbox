import React from 'react';
import axios from 'axios';
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
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import IconButton from '@material-ui/core/IconButton';

export default function NewPromotion(props) {
    const [openForm, setOpenForm] = React.useState(false);
    const [fileInputState, setFileInputState] = React.useState('');
    const [previewSource, setPreviewSource] = React.useState();
    const [file, setFile]= React.useState();
    const [urlImg, setUrlImg] = React.useState("");
    const [typeProd, setTypeProd] = React.useState("");

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
        if(document.getElementById("descripcion").value !== "" && document.getElementById("descuento").value !== "" && document.getElementById("date").value !== "" && urlImg !== ""){
            let promotion = {id:"frontEnd",brand:"Nike",endDate:document.getElementById("date").value,discount:document.getElementById("descuento").value,image:urlImg,description:document.getElementById("descripcion").value}
            addPromotionDB(promotion);
            setPreviewSource();
            setUrlImg("");
            setOpenForm(false);
        } else {
            alert("No se completaron todos los datos del Producto.")
        }
    }

    const addPromotionDB = (promotion) => {
        fetch('https://salesbox-alpha-backend.herokuapp.com/api/promotions' , { 
            method:'POST',
            headers:{
              'Content-Type': 'application/json ',
              'Accept': 'application/json',
            },
            body:JSON.stringify(promotion)
          }).then(function(response) {
                if(response.ok){
                    response.json().then(function(res) {
                        console.log(res);
                    })
                    props.cantPromo(1);
                }else{
                    console.log('Respuesta de red OK pero respuesta HTTP no OK');
                }
            }).catch(function(error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
            });
    }

    const handleChangeTypeProd = (e) => {
        setTypeProd(e.target.value);
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
                <NoteAddOutlinedIcon fontSize="large" />
            </IconButton>
            <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Agregar Promoción Nueva</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Complete los datos de la promoción.
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

                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Fecha fin de la Promoción"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                        
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