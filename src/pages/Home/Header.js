import React, { useState, useEffect } from 'react';
import Header_nav from './Header_nav';
import { AiFillPhone } from 'react-icons/ai';
import rasm2 from '../../img/mira-kireeva-xTq26wLo5do-unsplash.jpg';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { ImArrowRight } from 'react-icons/im';
import { IoIosRocket } from 'react-icons/io';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import { GoChecklist, GoLocation } from 'react-icons/go';
import { Tabs, Tab } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { getNews } from '../../host/Config';
import { url, user } from '../../host/Host';
import Global from '../../host/Global';
import { getEvents } from '../../host/Config';
import {
  Clusterer,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import YouTube from 'react-youtube';
import axios from 'axios';
import {  getPupil } from '../../host/Config';
import maktab from "../../img/gerb.jpg";
import her2 from "../../img/h2.jpg";
import her3 from "../../img/h3.jpg";
import her4 from "../../img/h4.jpg";
import her5 from "../../img/h5.png";
import rasm1 from "../../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import her6 from "../../img/h6.png";

function Header() {
  const [loader, setLoader] = useState(true);
  const [news, setNews] = useState([]);
  const [id, setId] = useState(0);
  const [school, setSchool] = useState({});
  const [clock, setClock] = useState('00 : 00 : 00');
  const [excellent, setExcellent] = useState([]);
  const [oquvchi, setOquvchi] = useState([]);
  const [oquvchilar, setOquvchilar] = useState([]);
  const [data, setData] = useState(null);
  const [sinf, setSinf] = useState([]);
  const [events, setEvents] = useState([]);
  const [number, setNumber] = useState([1, 2, 3]);



  const getSchool = () => {
    axios
      .get(`${url}/school-by-admin/${Global.user}`)
      .then((res) => {
        setSchool(res.data);
        console.log('1-School bu', res.data);
        setTimeout(() => {
          setLoader(false);
        }, 4000);
      })
      .catch((err) => {
        console.log('Maktabda xatolik bor');
      });
  };
  const getNew = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf('id=') === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          setNews(res.data);
          console.log('2-then...');
          setId(v);
        } else {
          setId(
            window.location.href.slice(window.location.href.indexOf('=') + 1)
          );
          setNews(res.data);
          console.log('Catch...');
        }
      })
      .catch((err) => {
        console.log('Xatolar daxxuya...', err.message);
      });
  };

  const getExcellents = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios
      .get(`${url}/excellent/`)
      .then((res) => {
        setExcellent(res.data);
        console.log('3', res.data);
      })
      .catch((err) => {
        console.log('excellentda xatolik...');
      });
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      setData(res.data);
      console.log('4-data bu', res.data);
    });
    axios
      .get(`${url}/class/`)
      .then((res) => {
        setSinf(res.data);
        setTimeout(() => {
          setLoader(false);
        }, 4000);
        console.log('5-', res.data);
      })
      .catch((err) => {
        console.log('classda xatolik...');
       
      });
  };

  const getPupils = () => {
    getPupil()
      .then((res) => {
        setOquvchilar(res.data);
        console.log('6', res.data);
      })
      .catch((err) => console.log('Pupilsda xatolik...'));
  };

  const setPupils = (id) => {
    var pupil = {};
    if (oquvchilar !== []) {
      oquvchilar.map((item1) => {
        if (item1.id === id) {
          pupil = item1;
        }
      });
    }
    return pupil;
  };

  const echoClasses = (id) => {
    var classes = {};
    if (sinf !== []) {
      sinf.map((item1) => {
        if (item1.id === id) {
          classes = item1;
        }
      });
    }
    return classes;
  };

  const getEvent = () => {
    getEvents()
      .then((res) => {
        console.log(res.data);
        if (window.location.href.indexOf('id=') === -1) {
          setEvents(res.data);
        } else {
          setEvents(res.data);
          setId(
            window.location.href.slice(window.location.href.indexOf('=') + 1)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNew();
    getSchool();
    /* window.addEventListener('load', () => {
      setLoader(false);
    }); */

    /*  setInterval(() => {
      setState({ clock: Clock() });
    }, 1000); */

    getExcellents();
    getPupils();
    /* setLoader(false); */
    getSchool();
    getEvent();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1500, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className='header_main d-flex justify-content-center align-items-center'>
            <img src={
                            school !== null
                              ? school.b_r1
                              : rasm1
                          } alt="" />
            <div className='parda'></div>
            <h3>
              Xorazm viloyati Gurlan tumani{' '}
              {school.school_number + ' - ' + school.type}
              {/* Xorazm viloyati Gurlan tumani 1-ayrim fanlarga ixtisoslashtirilgan maktabi */}
            </h3>
            <a target='_blank'  href={`tel: ${school.phone}`}>
              <AiFillPhone
                fontSize='35px'
                color='blue'
                className='phone_icon'
              />
            </a>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-6 '>
                <div className='card3 d-flex'>
                  <img
                    src={
                      school !== null
                        ? school.b_c2 !== null
                          ? school.b_c2
                          : rasm2
                        : rasm2
                    }
                    className=' '
                    alt='...'
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>Yangiliklar</h5>
                    <p className='card-text'>
                      Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling.
                    </p>
                    <a href='/news' className='btn btn-primary'>
                      Sahifaga o'tish
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='card3 d-flex'>
                  <img
                    src={
                      school !== null
                        ? school.b_c3 !== null
                          ? school.b_c3
                          : rasm2
                        : rasm2
                    }
                    className=' '
                    alt='...'
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>Galereya</h5>
                    <p className='card-text'>
                      Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling.
                    </p>
                    <a href='/gallery' className='btn btn-primary'>
                      Sahifaga o'tish
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='card3 d-flex align-items-center'>
                  <img
                    src={
                      school !== null
                        ? school.b_c1 !== null
                          ? school.b_c1
                          : rasm2
                        : rasm2
                    }
                    className=' '
                    alt='...'
                  />

                  <div className='card-body'>
                    <h5 className='card-title'>Yutuqlar</h5>
                    <p className='card-text'>
                      Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling.
                    </p>
                    <a href='/yutuqlar' className='btn btn-primary'>
                      Sahifaga o'tish
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Tabs
              defaultActiveKey='profile'
              id='uncontrolled-tab-example'
              className='mb-3 media_tab'
            >
              <Tab eventKey='home' title='Maktab yangiliklari'>
                <div className='row d-flex justify-content-center'>
                  {news.map((val, key) => {
                    return key < 6 ? (
                      <div className='col-md-4'>
                        <a href='/news'>
                          <div className='school_news'>
                            <img src={val.image} alt='Rasm' />
                            <div className='school_news_opacity'></div>
                            <h2>Maktab yangiliklari va o'zgarishlar</h2>
                            <p>{val.title}</p>
                            <h4>
                              <FaRegCalendarAlt className='date_icon' />{' '}
                              2019.01.01
                            </h4>
                          </div>
                        </a>
                      </div>
                    ) : (
                      ''
                    );
                  })}
                  <div className='col-md-3'>
                    <a
                      href='/news'
                      className=' d-flex justify-content-around align-items-center btn btn-primary arrow_link'
                    >
                      Barchasini o'qish <ImArrowRight className='arrow_icon' />
                    </a>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='profile' title='Media sayohat'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-lg-6'>
                    <YouTube
                      videoId={
                        data !== null
                          ? data.video !== null
                            ? data.video.slice(
                                data.video.indexOf('youtu.be/') + 9
                              )
                            : ''
                          : ''
                      }
                      autoplay={true}
                      muted={true}
                      
                      opts={{
                        width: '100%',
                        height: '300px',
                        
                        playerVars: {
                          // https://developers.google.com/youtube/player_parameters
                          
                          rel:0
                        },
                      }}
                      /* className={style.video} */
                    />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className='qabul'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-around align-items-start'>
                  <h1>Qabul uchun ariza topshiring</h1>
                  <span>Kuzgi qabul jarayoni hozir mavjud</span>
                  <p>
                    Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan,
                    shu bilan birga ularga kelajakda o'z o'rnilarini
                    topishlariga yordam beramiz.
                  </p>
                  <a
                    href='https://my.maktab.uz/'
                    target='_blank'
                    class='btn btn-primary position-relative qabul_link'
                  >
                    Hoziroq ariza topshiring
                    <div className='fast'></div>
                  </a>
                </div>
                <div className='col-lg-6 d-flex justify-content-around align-items-center'>
                  <GoChecklist className='checklist' />
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-around'>
            <div className="col-lg-12">
                <h2 className="maktab_tadbirlari">A'lochilar doskasi</h2>
              </div>
              {excellent !== [] && sinf !== []
                ? excellent.map((item) => {
                    var pupil = setPupils(item.pupil);
                    var classes = echoClasses(pupil.clas);
                    return (
                      <div className='col-lg-4 col-md-6'>
                        <div className='best_pupils_card'>
                          <img
                            src={pupil.image !== null ? pupil.image : rasm2}
                            alt='...'
                          />
                          <h3>{pupil.full_name}</h3>
                          <p>
                            {echoClasses(pupil.clas).class_number} - "
                            {echoClasses(pupil.clas).class_char}" sinf
                          </p>
                          <div className='pupil_lenta'>Bizning faxrimiz</div>
                        </div>
                      </div>
                    );
                  })
                : ''}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h2 className="maktab_tadbirlari">Ustozlar doskasi</h2>
              </div>
            <div className='col-lg-6  '>
                
                <div className='teacher_card'>
                  <img src={rasm2} alt='...' />
                  <div className='teacher_lenta'>
                    <div className='flag_blue'></div>
                    <div className='flag_red'></div>
                    <div className='flag_white'></div>
                    <div className='flag_red'></div>
                    <div className='flag_green'></div>
                  </div>
                  <div className='teacher_card_body'>
                    <h3>Muxlisova Munisa Mahmudovna</h3>
                    <p>Ingliz tili o'qituvchisi</p>
                  </div>
                  <h4></h4>
                </div>
              </div>
              <div className="col-lg-6">
              <div className='teacher_card'>
                  <img src={rasm2} alt='...' />
                  <div className='teacher_lenta'>
                    <div className='flag_blue'></div>
                    <div className='flag_red'></div>
                    <div className='flag_white'></div>
                    <div className='flag_red'></div>
                    <div className='flag_green'></div>
                  </div>
                  <div className='teacher_card_body'>
                    <h3>Muxlisova Munisa Mahmudovna</h3>
                    <p>Ingliz tili o'qituvchisi</p>
                  </div>
                  <h4></h4>
                </div>
              </div>
            </div>
            <div className='row'>
              <h2 className='maktab_tadbirlari'>Maktab tadbirlari</h2>
            </div>
            <div className='row'>
              {events.map((val, key) => {
                return key < 3 ? (
                  <div className='col-md-4'>
                    <div className='tadbir_card'>
                      <img src={val.image} />
                      <div className='parda'></div>
                      <h3>{val.title}</h3>
                      <p>
                        <FaRegCalendarAlt color='blue' /> {val.date}
                      </p>
                      <p>
                        <BiTimeFive color='blue' /> {val.time}
                      </p>
                      <p>
                        <GoLocation color='blue' /> {val.address}
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                );
              })}
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-5'>
                <a href='/tadbirlar' className='tadbir_link'>
                  Hammasini ko'rish <AiOutlineDoubleRight />
                </a>
              </div>
            </div>
            <div className='row'>
              <h2 className='maktab_tadbirlari'>Bizning hamkorlarimiz</h2>
            </div>
            <div className='row'>
              <Carousel
                responsive={responsive}
                autoPlay={false}
                autoPlaySpeed={3000}
                infinite={true}
                className='carousell'
              >
                <div className='toolpat'>
                  <div style={{ backgroundColor: 'white' }}>
                    <a href='https://president.uz/oz' target='_blank'>
                      <img src={maktab} />
                    </a>
                  </div>
                  <p>
                    O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti
                  </p>
                </div>
                <div className='toolpat'>
                  <div style={{ backgroundColor: 'white' }}>
                    <a href='https://www.gov.uz/uz' target='_blank'>
                      <img src={her2} />
                    </a>
                  </div>
                  <p>O'zbekiston Respublikasining Hukumat portali</p>
                </div>
                <div className='toolpat'>
                  <div style={{ backgroundColor: 'white' }}>
                    <a href='https://lex.uz/' target='_blank'>
                      <img src={her3} />
                    </a>
                  </div>
                  <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
                </div>
                <div className='toolpat'>
                  <div style={{ backgroundColor: 'white' }}>
                    <a href='https://my.gov.uz/oz' target='_blank'>
                      <img src={her4} />
                    </a>
                  </div>
                  <p>Interaktiv davlat xizmatlarining Yagona portali</p>
                </div>
                <div className='toolpat'>
                  <div style={{ backgroundColor: 'white' }}>
                    <a href='https://www.uzedu.uz/' target='_blank'>
                      <img src={her5}/></a>
                  </div>
                  <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
                </div>
                <div className='toolpat'>
                  <div style={{ backgroundColor: 'white' }}>
                    <a href='https://ittower.uz/' target='_blank'>
                      <img src={her6} />
                    </a>
                  </div>
                  <p>IT Tower firmasi </p>
                </div>
              </Carousel>
            </div>
            <div className='row murojaat'>
              <div className='col-lg-6 d-flex align-items-center justify-content-between flex-column'>
                <h2 className='contact_us'>Biz bilan bog'lanish</h2>
                <form className='d-flex flex-column justify-content-around align-items-center'>
                  <h1>Murojaat yo'llash</h1>
                  <p>
                    Talab va takliflar uchun bizga murojaat yo'llashingiz mumkin
                  </p>
                  <div className='input_box'>
                    <CgProfile fontSize='25px' color='white' />{' '}
                    <input
                      type='text'
                      className='fullname'
                      placeholder="Ism-familiya to'liq"
                      name='fullname'
                    />
                  </div>
                  <div className='input_box'>
                    <HiOutlineMail fontSize='25px' color='white' />{' '}
                    <input
                      type='email'
                      className='email'
                      placeholder='Email'
                      name='email'
                    />
                  </div>
                  <textarea
                    placeholder='Murojaat matni...'
                    name='text'
                  ></textarea>
                  <button type='submit' className='btn btn-primary'>
                    {' '}
                    <IoIosRocket
                      className='rocket_icon'
                      fontSize='30px'
                      color='white'
                    />{' '}
                    Yuborish
                  </button>
                </form>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-between flex-column'>
                <h2 className='contact_us'>Bizning manzil</h2>
                <YMaps key={'uz_UZ'} query={{ lang: 'uz_UZ' }}>
                  <Map
                    width='100%'
                    height='500px'
                    // style={{marginLeft:"10%"}}
                    state={{
                      center: [39.651698, 66.97187],
                      zoom: 13,
                    }}
                  >
                    <Clusterer
                      options={{
                        groupByCoordinates: false,
                      }}
                    >
                      <Placemark
                        key={-1}
                        geometry={[39.651698, 66.97187]}
                        options={{
                          iconLayout: 'default#image',
                        }}
                        properties={{
                          hintContent: `<h6><b className="personStyle">33 - maktab</b></h6>`,
                        }}
                        modules={['geoObject.addon.hint']}
                      />
                    </Clusterer>

                    <GeolocationControl options={{ float: 'left' }} />

                    <RouteButton options={{ float: 'right' }} />
                    <ZoomControl options={{ float: 'left' }} />
                  </Map>
                </YMaps>
              </div>
            </div>
          </div>
          <Footer />

          <Header_nav school_number={school.school_number}/>
        </div>
      )}
    </div>
  );
}

export default Header;
