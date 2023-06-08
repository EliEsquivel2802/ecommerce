import Nav from "../../components/nav/Nav"
import Header from "./Header"
import service from "./service"
import { FaArrowRight } from "react-icons/fa"
import Footer from "./Footer"

const Home = () => {
  return (<>
    <Nav />
    <Header />
    <section className="homePage">
      {
        service.map((category, index) => <section className="homePage__category" key={index}>
                                  <div className="homePage__category-header">
                                    <h2 className="homePage__category-header-title">{category.title}</h2>
                                    <a href="#">Ver todo <FaArrowRight className="icon" /></a>
                                  </div>
                                  <div className="homePage__category-grid">
                                    {
                                      category.products.map((product, index) => {
                                        return window.innerWidth <= 991 && index >= 4
                                        ? null
                                        : <div className="homePage__category-grid--card" key={index}>
                                            <div>
                                              <img src={product.image} />
                                            </div>
                                            <div>
                                              <p className="homePage__category-grid--card-name">{product.name}</p>
                                              <p className="homePage__category-grid--card-price">${product.price}</p>
                                              <a className="homePage__category-grid--card-button" href="#">Ver producto</a>
                                            </div>
                                          </div>
                                      } 
                                      )
                                    }
                                  </div>
                                </section>)
      }
    </section>
    <Footer />
  </>)
}

export default Home