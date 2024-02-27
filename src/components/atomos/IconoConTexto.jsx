import { FaPencil } from "react-icons/fa6";
import styles from "./IconoConTexto.module.css"

const IconoConTexto = ({nombreMascota}) => {
  return (
    <>
        <div className= {styles.contenedorIT}>
            <label className= {styles.nombreMascota}>{nombreMascota}</label>
            <FaPencil className= {styles.iconoLapiz} />
        </div>
    </>
  )
}

export default IconoConTexto