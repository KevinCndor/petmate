import styles from "./Imagen.module.css"

const Imagen = ({url}) => {
  return (
    <img src = {url} className= {styles.imagenMascota}/>
  )
}

export default Imagen