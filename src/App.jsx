import Noticia from './components/Noticia.jsx'
import './App.css'


function App() {
  const noticias=[
    {
      id:0,
      avatar:'/avatar01.png',
      titulo:'Titulo 1',
      fecha:'19 de octubre de 2024',
      imageurl:'/sky.jpg',
      noticia:'Puesta de sol',
      numlike:275,
      desavatar:'Logo con fondo amarillo. Contiene la silueta de un chico moreno con sudadera gris',
      desimage:'Cielo morado donde se ve una puesta de sol'
    },
    {
      id:1,
      avatar:'/avatar02.png',
      titulo:'Titulo 2',
      fecha:'19 de octubre de 2024',
      imageurl:'/sea.jpg',
      noticia:'Puesta de sol desde una playa donde estuve de vacaciones',
      numlike:5,
      desavatar:'Logo con fondo azul. Contiene la silueta de una chica moreno con sudadera roja',
      desimage:'Se ve una puesta de sol desde una playa',
    },
    {
      id:2,
      avatar:'/avatar03.png',
      titulo:'Titulo 3',
      fecha:'19 de octubre de 2024',
      imageurl:'/tux.jpg',
      noticia:'Linux es el mejor sistema operativo',
      numlike:22,
      desavatar:'Logo con el dibujo de Tux, la mascota de Linux, es un pinguino',
      desimage:'Foto con el mensaje I love Tux, aparece la letra I, un corazon y Tux el pinguino sentado',
    },
    {
      id:3,
      avatar:'/avatar01.png',
      titulo:'Titulo 4',
      fecha:'19 de octubre de 2024',
      imageurl:'/mario.jpg',
      noticia:'Super Mario es el mejor personaje de videojuegos',
      numlike:33,
      desavatar:'Logo con fondo blanco. Contiene la cara de Mario, el personaje de Nintendo',
      desimage:'Imagen de fondo rojo, sobre la que aparece una caricatura de Mario saltando'
    }

  ];
  return (
    <>
      {noticias.map(noticia=>(
          <Noticia
          key={noticia.id}
          avatar={noticia.avatar}
          titulo={noticia.titulo}
          fecha={noticia.fecha}
          imageurl={noticia.imageurl}
          noticia={noticia.noticia}
          numlike={noticia.numlike}
          desavatar={noticia.desavatar}
          desimage={noticia.desimage}
          />
          ))}
    </>
  );
}

export default App
