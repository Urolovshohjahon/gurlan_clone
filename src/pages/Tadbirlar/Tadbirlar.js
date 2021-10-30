import React, { useState, useEffect } from 'react';
import HEADER_NAV from '../Home/Header_nav';
import Footer from '../Footer/Footer';
import './Tadbirlar.css';
import { AiFillPhone } from 'react-icons/ai';
import { Carousel } from 'react-bootstrap';
import rasm2 from '../../img/news.jpg';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import school from '../../img/gerb.jpg';
import axios from 'axios';
import { getEvents } from '../../host/Config';
import new1 from '../../img/new1.jpg';
import new2 from '../../img/new2.jpg';
import new3 from '../../img/new3.jpg';
import new4 from '../../img/new4.jpg';
import new5 from '../../img/13.jpg';
import { url, user } from '../../host/Host';
import Global from '../../host/Global';
import Spinner from '../Spinner/Spinner';
import {BiTimeFive} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';

const news = [
  {
    title: 'YAngilik1',
    main: 'Yangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopzVVVYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kop',
    img: 'https://agitated-lamport-037c23.netlify.app/static/media/3s-Photo-3.c4a2f2b9.jpg',
  },
  {
    title: 'YAngilik2',
    main: 'Yangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopzVVVYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kop',
    img: 'https://agitated-lamport-037c23.netlify.app/static/media/1.feb51666.jpg',
  },
  {
    title: 'YAngilik3',
    main: 'Yangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopzVVVYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kop',
    img: 'https://agitated-lamport-037c23.netlify.app/static/media/love.042dfb21.jpg',
  },
];

function Tadbirlar(props) {
  const [events, setEvents] = useState([]);
  const [id, setId] = useState(0);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  const getEvent = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      setData(res.data);
      setTimeout(()=>{setLoader(false)},4000)
     
    });
    getEvents()
      .then((res) => {
        if (window.location.href.indexOf('id=') === -1) {
          setEvents(res.data);
          setTimeout(()=>{setLoader(false)},4000)
        } else {
          
          setEvents(res.data);
          setId(
            window.location.href.slice(window.location.href.indexOf('=') + 1)
          );
          setTimeout(()=>{setLoader(false)},4000)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const gotonews = (key) => {
    console.log('1');
    dispatch({
      type: 'ENTER_TADBIRLAR_PAGE',
      title: events[key].title,
      main: events[key].text,
      img: events[key].image,
      phone:data.phone,
      date:events[key].published_time.substring(0,10),
      school_number:data.school_number
    });
    console.log('2');
    history.push('/tadbir');
    console.log('3');
  };

  useEffect(() => {
    getEvent();
  });

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <Carousel fade prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={data !== null && data.m_h_h1 !== null ? data.m_h_h1 : new1}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>
                  Tadbirlardan lavhalar
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={data !== null && data.m_h_h2 !== null ? data.m_h_h2 : new2}
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>
                  Tadbirlardan lavhalar
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={data !== null && data.m_h_h3 !== null ? data.m_h_h3 : new3}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>
                  Tadbirlardan lavhalar
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={data !== null && data.m_h_h4 !== null ? data.m_h_h4 : new4}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>
                  Tadbirlardan lavhalar
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={data !== null && data.m_h_h5 !== null ? data.m_h_h5 : new5}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>
                  Tadbirlardan lavhalar
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
            <img className='d-block w-100' src={rasm2} alt='Third slide' />
  
            <Carousel.Caption>
              <h3>
                Shomurodov Osiyoda ikkinchi, Rashidov klubini finalga olib chiqdi
              </h3>
            </Carousel.Caption>
          </Carousel.Item> */}
          </Carousel>
          <AiFillPhone fontSize='35px' color='blue' className='phone_icon' />
          <div className='container'>
            <div className='row'>
              <h2 style={{color:'blue', fontWeight:'700',margin:'auto', marginTop:'20px'}}>So'ngi tadbirlar</h2>
            </div>
            <div className='row '>
              {events.map((val, key) => (
                <div className='col-lg-4'>
                  {/* <NavLink  to='/new' > */}
                  <div className='card news_card' onClick={() => gotonews(key)}>
                    <img src={val.image} class='card-img-top' alt='...' />
                    <div className='card_body'>
                    <h5 className='card-title' style={{color:'blue'}}>{val.title}</h5>
                      <p className=' d-flex align-items-center'>
                        
                        <FaRegCalendarAlt className='date_icon' color='blue' />{' '}
                        {val.published_time.substring(0, 10)}
                      </p>
                      
                      
                      <p>
                        <BiTimeFive color='blue' /> {val.time}
                      </p>
                      <p>
                        <GoLocation color='blue' /> {val.address}
                      </p>
                    </div>
                  </div>
                  {/* </NavLink> */}
                </div>
              ))}
            </div>
          </div>
          <Footer />
          <HEADER_NAV school_number={data.school_number} />
        </div>
      )}
    </div>
  );
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    setNews: () =>
      dispatch({
        type: 'ENTER_TADBIRLAR_PAGE',
        title: news[0].title,
        main: news[0].main,
        img: news[0].img,
      }),
  };
}; */

export default connect(null, null)(Tadbirlar);
