import React, { useState, useEffect } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTelegram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { getNews } from '../../host/Config';
import { url, user } from '../../host/Host';
import axios from 'axios';
import Global from '../../host/Global';

function Footer() {
  const [loader, setLoader] = useState(true);
  const [news, setNews] = useState([]);
  const [id, setId] = useState(0);
  const [school, setSchool] = useState({});
  const [clock, setClock] = useState('00 : 00 : 00');
  const [state, setState] = useState({
    loader: true,
    news: [],
    id: 0,
    school: null,
    clock: '00 : 00 : 00',
  });

  const getSchool = () => {
    axios
      .get(`${url}/school-by-admin/${Global.user}`)
      .then((res) => {
        setSchool(res.data);
        setTimeout(() => {
          setLoader(false);
        }, 2000);
      })
      .catch((err) => {
        console.log('Maktabda xatolik bor');
      });
  };
  /* const getNew = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf('id=') === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          setState({
            news: res.data,
            id: v,
          });
        } else {
          setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf('=') + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log("Xatolar daxxuya");
      });
  }; */

  useEffect(() => {
    /*  getNew(); */
    getSchool();
    window.addEventListener('load', () => {
      setLoader(false);
    });

    /*  setInterval(() => {
      setState({ clock: Clock() });
    }, 1000); */
  }, []);
  return (
    <footer>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-lg-6 d-flex justify-content-between'>
            <div className='contact'>
              <a href='https://www.youtube.com/channel/UCTU9AVjpeZQLSSh3rlwTpDw'>
                <AiFillYoutube className='contact_icons youtube' />
              </a>
              <a href='https://www.facebook.com/5-sonli-maktab-283432626789189/?ref=pages_you_manage'>
                <FaFacebookF className='contact_icons facebook' />
              </a>
              <a
                href={`mailto: ${
                  school !== null ? school.email : 'ittower01@gmail.com'
                }`}
              >
                <HiOutlineMail className='contact_icons hiemail' />
              </a>
              <a href='https://t.me/Xorazm_5_maktab'>
                {' '}
                <FaTelegram className='contact_icons telegram' />
              </a>
              <a href='https://www.instagram.com/5ummumtalimmaktabi/'>
                <FaInstagram className='contact_icons instagram' />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <ul>
              <h3>Bizning maktab</h3>
              <li>
                <NavLink to='/'>Bosh sahifa</NavLink>
              </li>
              <li>
                <NavLink to='/hayot'>Maktab hayoti</NavLink>
              </li>
              <li>
                <NavLink to='/qabul'>Qabul</NavLink>
              </li>
            </ul>
          </div>
          <div className='col-lg-4'>
            <ul>
              <h3>Maktab hayoti</h3>

              <li>
                <NavLink to='/news'>Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink to='rahbariyat'>Maktab ma'muriyati</NavLink>
              </li>
              <li>
                <NavLink to='/alochilar'>Maktab a'lochilari</NavLink>
              </li>
            </ul>
          </div>
          <div className='col-lg-4'>
            <ul>
              <h3>Maktab ma'lumoti</h3>

              <li>
                <NavLink to='/'>Xorazm viloyati Gurlan tumani</NavLink>
              </li>
              <li>
                <NavLink to='/'>
                  <a
                    href={`mailto: ${
                      school !== null ? school.email : 'ittower01@gmail.com'
                    }`}
                  >
                    xorazm5maktab@gmail.comi
                  </a>
                </NavLink>
              </li>
              <li>
                <a target='_blank' href={`tel: ${school.phone}`}>+998930820372</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
