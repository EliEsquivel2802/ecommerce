import { Link } from 'react-router-dom';
import Logo from '../../assets/components/nav/Logo_clase.png'
import { FaSistrix } from "react-icons/fa";

const Nav = () => {

  const URL = window.location.pathname

  return (
    <div className="main-nav">
        <div className='main-nav__content-img-search'>
          <div className="main-nav__img-content">
              <Link to='/'>
                <img src={Logo} />
              </Link>
          </div>
          <div className='main-nav__content-img-search-content'>
            <FaSistrix className='main-nav__content-img-search-content--icon' />
            <input type="search" placeholder='¿Qué deseas buscar?' />
          </div>
        </div>
        <div className='main-nav__button'>
            {
              URL === '/'
              && <Link to='login'>
                <button className='button' style={{border : 'solid 1px #007be5', color: '#007be5', backgroundColor: '#fff'}}>
                      Login
                  </button>
              </Link>
            }
            <FaSistrix className='main-nav__button--icon' />
        </div>
    </div>
  )
}

export default Nav