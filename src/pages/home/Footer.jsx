import Logo from '../../assets/components/nav/Logo_clase.png'

const Footer = () => {
  return (
    <div>
        <section style={{background:'#EAF2FD'}}>
            <section className="homePage__form">
                <div className="homePage__form-logo">
                <div className="homePage__form-logo-img">
                    <img src={Logo} />
                </div>
                <div>
                    <ul>
                    <li><a href="#">Quienes somos</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Programa de fidelidad</a></li>
                    <li><a href="#">Nuestras Tiendas</a></li>
                    <li><a href="#">Quiero ser franquiciado</a></li>
                    <li><a href="#">Anúncie aquí</a></li>
                    `
                    </ul>
                </div>
                </div>
                <div className="homePage__form-form">
                <h2>Hable con nosotros</h2>
                <form>
                    <input type="text" placeholder="Nombre" />
                    <textarea placeholder="Escribe tu mensaje"></textarea>
                    <button>Enviar mensaje</button>
                </form>
                </div>
            </section>
        </section>
        <section style={{textAlign: 'center', padding: '15px 30px'}}>
            <p>Desarrollado por Elia Berenice Esquivel Silva.</p>
        </section>
    </div>
  )
}

export default Footer