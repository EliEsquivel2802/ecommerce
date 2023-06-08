import { Link } from "react-router-dom"
import Nav from "../../../components/nav/Nav"
import Footer from "../../../pages/home/Footer"
import service from "./data"

const EditProduct = () => {
  return (
    <>
        <Nav />
        <section className="EditProduct">
            <section className="EditProduct__header">
                <h1>Todos los produtos</h1>
                <Link to="/create-product">Agregar producto</Link>
            </section>
            <section className="EditProduct__grid">
                {
                    service.map((product, index) => <div className="EditProduct__grid-card" key={index}>
                        <div>
                            <img src={product.image} />
                        </div>
                        <div>
                            <p className="EditProduct__grid-card--name">{product.name}</p>
                            <p className="EditProduct__grid-card--price">{product.price}</p>
                            <p className="EditProduct__grid-card--id">#1111111</p>
                        </div>
                    </div>)
                }
            </section>
        </section>
        <Footer />
    </>
  )
}

export default EditProduct