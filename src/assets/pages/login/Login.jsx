import { Link } from "react-router-dom"
import Nav from "../../../components/nav/Nav"
import Footer from "../../../pages/home/Footer"

const Login = () => {
  return (
    <>
        <Nav />
        <main className="main-login">
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Escriba su correo eléctronico" />
            <input type="text" placeholder="Escriba su contraseña" />
            <Link to='/edit-product'>Entrar</Link>
        </main>
        <Footer />
    </>
  )
}

export default Login