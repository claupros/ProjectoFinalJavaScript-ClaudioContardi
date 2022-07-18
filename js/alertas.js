
//!--------------------------👇ALERTA bienvenida------------------------/
setTimeout(() => {
     Swal.fire({
          background: "#D7E1EC",
          title: "¡¡Bienvenido!!",
          color: "whith",
          text: "El banco digital con mas de 700 oficinas a nuestra disposicion para 🫵",
          width: '30%',
          customClass: {
               popup: 'popup-class',
          },
          imageUrl: 'img/fondo3.png',
          imageWidth: '100%',
          imageAlt: 'imagen banco',
     }, 5000)
});
