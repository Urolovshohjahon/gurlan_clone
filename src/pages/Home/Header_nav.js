import React, { useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';

function Header_nav() {
  const [style, setStyle] = useState(false);
  const [bg, setBg] = useState('#06456A');
  const menu_style = {
    display: 'flex',
    transform: style ? 'translateX(0px)' : 'translateX(100%)',
    transition: '0.5s',
    width: '100%',
    height: '100%',
    background: bg,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '45px 45px',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
    listStyle:'none'
  };

  const changeMenu = () => {
    setStyle(!style);
  };
  window.addEventListener('scroll',()=>{
    if(window.scrollY>200){
      setBg('#0769a1')
    }
  })
  return (
    <div className='header_nav'>
      <ul style={menu_style} id='yon_menu'>
        <FaTimes className='close' onClick={changeMenu} />
        <li>
          <a
            onClick={changeMenu}
            href='/'
            className='text-decoration-none'
          >
            Yangiliklar
          </a>
        </li>
        <li>
          <a
            onClick={changeMenu}
            href='/media'
            className='text-decoration-none'
          >
            Media
          </a>
        </li>
        <li>
          <a
            onClick={changeMenu}
            href='/qabul'
            className='text-decoration-none'
          >
            Qabul
          </a>
        </li>
        <li>
          <a onClick={changeMenu} href='/' className='text-decoration-none'>
            Bosh Sahifa
          </a>
        </li>
        <li>
          <a onClick={changeMenu} href='#y' className='text-decoration-none'>
            Hududlar
          </a>
        </li>
        <li>
          <a
            onClick={changeMenu}
            href='/tashkilotlar'
            className='text-decoration-none'
          >
            Tashkilotlar
          </a>
        </li>
        <li>
          <a onClick={changeMenu} href='#q' className='text-decoration-none'>
            Sayyohlik
          </a>
        </li>
        <li>
          <a
            onClick={changeMenu}
            href='#aloqa'
            className='text-decoration-none'
          >
            Aloqa
          </a>
        </li>
      </ul>

      
      <div className='navjs navbar '>
        <div className='container'>
          <div className='row col-12 d-flex justify-content-between'>
          <div className=' logo  col-6'>
              <h1>1-maktab</h1>
            </div>
            <div className='menu  col-sm-1 col-2'>
              <BiMenuAltRight className='menu_button' onClick={changeMenu} />
            </div>
            
            <div className='menu2' >
            <ul className='d-flex justify-content-between'>
              <li>
                <NavLink to='/' className='text-decoration-none'>
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink to='/hayot' className='text-decoration-none'>
                  Maktab hayoti
                </NavLink>
              </li>
              <li>
                <NavLink to='/qabul' className='text-decoration-none'>
                  Qabul
                </NavLink>
              </li>
              <li>
                <NavLink to='/news' className='text-decoration-none'>
                  Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink to='/rahbariyat' className='text-decoration-none'>
                  Maktab ma'muriyati
                </NavLink>
              </li>
              <li>
                <NavLink to='/alochilar' className='text-decoration-none'>
                  Maktab a'lochilari
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header_nav;
