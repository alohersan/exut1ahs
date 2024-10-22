import React, {useState} from 'react';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia, Dialog,
    DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'


const Noticia = ({avatar,titulo,fecha,imageurl,noticia,numlike,desavatar,desimage}) => {

    const [like,setLike]=useState(false);//comienza deshabilitado
    //Cambiar el estado del like
    const handleClickLike=()=>{
        setLike(!like)
    };

    //Dialogo modal
    const [open, setOpen] = useState(false);

    //Cerrar el dialogo
    const handleClose = () => {
        setOpen(false);
    };



    return(
        <>
            <Card style={{maxWidth:600, margin:'1em auto'}}>
                <CardHeader
                    avatar={<Avatar alt={desavatar} src={avatar} />}
                    title={titulo}
                    subheader={fecha}
                />
                <CardMedia
                    component={'img'}
                    height="194"
                    image={imageurl}
                    alt={desimage}
                    style={{ objectFit: 'cover' }}
                />
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '1em' }}>
                        {noticia}
                    </Typography>


                    <Grid container justifyContent="flex-start" alignItems="center" style={{ marginTop: '1em' }}>
                        <Typography >{numlike}</Typography>
                        <IconButton onClick={handleClickLike} aria-label="me gusta">
                            {like ? <FavoriteIcon color="blue" /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <ShareIcon disabled={like}/>
                    </Grid>
                </CardContent>

                {/* Dialogo modal */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Compartir"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            ¿A que plataforma quieres compartir?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            <WhatsAppIcon/>
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                           <TelegramIcon/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </>
    );

};
export default Noticia;