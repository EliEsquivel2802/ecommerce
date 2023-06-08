import ImageHeader from './banner-image.png'

const Header = () => {
  return (
    <header className="main-header" style={{backgroundImage: `url(${ImageHeader})`}}>
        <div className='main-header-ajust'>
            <h2>Febrero Promocional</h2>
            <p>Productos selecionados con 33% de descuento</p>
            <a href='#'>Ver Consolas</a>
        </div>
    </header>
  )
}

export default Header