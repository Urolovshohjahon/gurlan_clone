import React, { useState, useEffect } from 'react';
import school1 from '../../img/school14.jpg';
import school2 from '../../img/school15.jpg';
import school3 from '../../img/school16.jpg';
import school4 from '../../img/school17.jpg';
import school5 from '../../img/school18.jpg';
import school6 from '../../img/school7.jpg';
import { Carousel } from 'react-bootstrap';
import { AiFillPhone } from 'react-icons/ai';
import Header_nav from '../Home/Header_nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { url, user } from '../../host/Host';
import Global from '../../host/Global';
import Spinner from '../Spinner/Spinner';
import './Oshxona.css';
import AOS from 'aos';

function Oshxona() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  const getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      setData(res.data);
      setTimeout(() => {
        setLoader(false);
      }, 4000);
    });
  };

  useEffect(() => {
    AOS.init();
    getSchool();
  });
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img className='d-block w-100' src={school1} alt='First slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={school2} alt='Second slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={school3} alt='Third slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={school4} alt='Third slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={school5} alt='Third slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={school6} alt='Third slide' />
            </Carousel.Item>
          </Carousel>
          <a href={`tel: ${data !== null ? data.phone : '+998 93 082 03 72'}`}>
            <AiFillPhone fontSize='35px' color='blue' className='phone_icon' />
          </a>

          <div className='maktab_ovqatlari'>
            <div
              className='qabul_opacity'
              data-aos='fade-zoom-in'
              data-aos-offset='120'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'
            ></div>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-5'></div>
                <div className='col-lg-7 d-flex flex-column justify-content-around align-items-center'>
                  <h3
                    data-aos-offset='200'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='600'
                  >
                    Maktab ovqatlari
                  </h3>
                  <p
                    data-aos-offset='120'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='600'
                  >
                    Maktabdagi tushlik o'quvchilarning sog'lig'i va farovonligi
                    uchun juda muhimdir, ayniqsa kam ta'minlangan o'quvchilar
                    uchun - va o'quvchilar kun bo'yi o'rganish uchun zarur
                    bo'lgan ovqatlanishni ta'minlaydilar. Tadqiqotlar shuni
                    ko'rsatadiki, bepul yoki arzonlashtirilgan maktab
                    tushliklarini qabul qilish oziq-ovqat xavfsizligi, semirish
                    darajasi va sog'lig'ining yomonlashishini kamaytiradi.
                    Bundan tashqari, maktab o'quvchilarining yangi ovqatlanish
                    standartlari o'quvchilarning oziq-ovqat mahsulotlarini
                    tanlash va iste'mol qilishga, ayniqsa meva va sabzavotlarga
                    ijobiy ta'sir ko'rsatmoqda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <h3 className='faktlar'>Faktlar</h3>
            </div>
            <div className='row '>
              <div className='col-lg-4'>
                <div
                  className='meal_fakt'
                  data-aos='fade-right'
                  data-aos-offset='120'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='600'
                >
                  <p>
                    Qayta tiklanadigan ovqatlanish federal ovqatlanish
                    standartlariga javob berishi kerak. Milliy maktablarning
                    tushlik dasturidagi tushlik asosiy oziq moddalar uchun
                    tavsiya etilgan darajalarning uchdan bir qismi yoki undan
                    ko'pini ta'minlaydi.
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4'
                data-aos='zoom-in'
                data-aos-offset='120'
                data-aos-easing='ease-in-sine'
                data-aos-duration='600'
              >
                <div className='meal_fakt'>
                  <p>
                    Qayta tiklanadigan taomlar yog'ning 30 foizdan ko'p
                    bo'lmagan va to'yingan yog'ning 10 foizdan kam kaloriya
                    miqdorini ta'minlashi kerak.
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4'
                data-aos='fade-left'
                data-aos-offset='120'
                data-aos-easing='ease-in-sine'
                data-aos-duration='600'
              >
                <div className='meal_fakt'>
                  <p>
                    2012-2013 o'quv yilidan boshlab bosqichma-bosqich
                    oziqlanishning yangi standartlari maktablardan Milliy Maktab
                    Tushlik Dasturi orqali beriladigan donli don, meva va
                    sabzavotlarni ko'paytirilishini talab qildi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 d-flex flex-column align-items-center'>
                <h1 className='week_day'>Dushanba</h1>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center'>
                <h1 className='week_day'>Seshanba</h1>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center'>
                <h1 className='week_day'>Chorshanba</h1>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center'>
                <h1 className='week_day'>Payshanba</h1>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center'>
                <h1 className='week_day'>Juma</h1>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center'>
                <h1 className='week_day'>Shanba</h1>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
                <div className='meal_card'>
                  <h2>Meal Option</h2>
                  <p>
                    Pork sausages with mashed potato and gravy Served with
                    seasonal vegetables and bread of the day Ice cream
                  </p>
                </div>
              </div>
            </div>
          </div>

<div className="container">
    <div className="row">
    <h1
                style={{
                  fontFamily: 'Courgette, cursive',
                  margin: 'auto',
                  fontSize: '60px',
                  width: 'auto',
                }}
              >
                Fotolavhalar bilan tanishing
              </h1>
            </div>
            <div className='row'>
              <div className='col-lg-4 position-relative'>
                <div className='img_box_meal'>
                  <img
                    src={school1
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-4 position-relative'>
                <div className='img_box_meal'>
                  <img
                    src={school2
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-4 position-relative'>
                <div className='img_box_meal'>
                  <img
                    src={school3
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-4 position-relative'>
                <div className='img_box_meal'>
                  <img
                    src={school4
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-4 position-relative'>
                <div className='img_box_meal'>
                  <img
                    src={school5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-4 position-relative'>
                <div className='img_box_meal'>
                  <img
                    src={school6
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              
    </div>
</div>
          <Footer />
          <Header_nav school_number={data.school_number} />
        </div>
      )}
    </div>
  );
}

export default Oshxona;
