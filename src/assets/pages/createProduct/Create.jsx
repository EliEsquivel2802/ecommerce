import { Link } from "react-router-dom"
import Nav from "../../../components/nav/Nav"
import Footer from "../../../pages/home/Footer"

const Create = () => {
  return (
    <>
        <Nav />
        <main className="main-login">
            <h2>Agregar nuevo producto</h2>
            <input type="text" placeholder="Url de la imagen" />
            <input type="text" placeholder="Categoría" />
            <input type="text" placeholder="Nombre del producto" />
            <input type="text" placeholder="Precio del producto" />
            <Link to='/edit-product'>Agregar Producto</Link>
        </main>
        <Footer />
    </>
  )
}

export default Create