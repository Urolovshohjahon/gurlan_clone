import React, { useEffect, useState } from 'react';
import HEADER_NAV from '../Home/Header_nav';
import Footer from '../Footer/Footer';
import './News.css';
import { AiFillPhone } from 'react-icons/ai';
import { Carousel } from 'react-bootstrap';
import rasm2 from '../../img/news.jpg';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { url, user } from '../../host/Host';
import { getNews } from '../../host/Config';
import school1 from '../../img/school1.jpg';
import Spinner from '../Spinner/Spinner';

/* const news = [
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
]; */

function News(props) {
  const [loader, setLoader] = useState(true);
  const [news, setNews] = useState([]);
  const [id, setId] = useState(0);
  const [school, setSchool] = useState(null);

  const getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      setSchool(res.data);
      setLoader(false);
    });
  };

  const getNew = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf('id=') === -1) {
          setNews(res.data);
        } else {
          setNews(res.data);
          setId(
            window.location.href.slice(window.location.href.indexOf('=') + 1)
          );
        }
      })
      .catch((err) => {
        console.log('blaaaaa...');
      });
  };

  useEffect(() => {
    getNew();
    getSchool();
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const gotonews = (key) => {
    console.log('1');
    dispatch({
      type: 'ENTER_NEWS_PAGE',
      title: news[key].title,
      main: news[key].text,
      img: news[key].image,
      date:news[key].published_time.substring(0, 10),
      phone:school.phone
    });
    console.log('2');
    history.push('/new');
    console.log('3');
  };

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <Carousel fade>
            {news.map((val, key) => (
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={val.image}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>{val.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          <a
            href={`tel: ${
              school !== null ? school.phone : '+998 93 082 03 72'
            }`}
          ></a>
          <div className='container'>
            <div className='row '>
              <div className="row">
                <h2 className="last_news">
                  So'ngi yangiliklar
                </h2>
              </div>
              {news.map((val, key) => (
                <div className='col-lg-4'>
                  {/* <NavLink  to='/new' > */}
                  <div className='card news_card' onClick={() => gotonews(key)}>
                    <img src={val.image} class='card-img-top' alt='...' />
                    <div className='card-body'>
                      <p className=' d-flex align-items-center'>
                        <FaRegCalendarAlt className='date_icon' color='blue' />{' '}
                        {val.published_time.substring(0, 10)}
                      </p>
                      <h5 className='card-title'>{val.title}</h5>
                    </div>
                  </div>
                  {/* </NavLink> */}
                </div>
              ))}
            </div>
          </div>
          <Footer />
          <HEADER_NAV />
        </div>
      )}
    </div>
  );
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    setNews: () =>
      dispatch({
        type: 'ENTER_NEWS_PAGE',
        title: news[0].title,
        main: news[0].main,
        img: news[0].img,
      }),
  };
}; */

export default connect(null, null)(News);
