import IconoConTexto from "../atomos/IconoConTexto"
import Imagen from "../atomos/Imagen"
import styles from "./CartaMascota.module.css"

const CartaMascota = ( {url, nombreMascotas}) => {
  return (
    <div className={styles.cartaMascota}>
        <Imagen url = {url} />
        <IconoConTexto nombreMascota = {nombreMascotas}/>
    </div>
  )
}

export default CartaMascota