import React from 'react'
import CartaMascota from '../moleculas/CartaMascota'
import styles from "./ListaMascotas.module.css"
import ROCKY from "../../images/ROCKY.jpg"
import SPARTAN from "../../images/SPARTAN.jpg"
import MIGUEL from "../../images/MIGUEL.jpg"

const ListaMascotas = () => {
  return (
    <div className={styles.contenedorCartas}>
        <h2 className={styles.titulo}>MASCOTAS</h2>
        <CartaMascota url = {ROCKY} nombreMascotas = "ROCKY" />
        <CartaMascota url = {SPARTAN} nombreMascotas = "SPARTAN" />
        <CartaMascota url = {MIGUEL} nombreMascotas = "MIGUEL" />
    </div>
  )
}

export default ListaMascotas