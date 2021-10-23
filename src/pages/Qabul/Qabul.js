import React, { useEffect, useState } from 'react';
import './Qabul.css';
import HEADER_NAV from '../Home/Header_nav';
import Footer from '../Footer/Footer';
import { AiFillPhone } from 'react-icons/ai';
import AOS from 'aos';
import diqqat from '../../img/diqqat.jpg';
import { ImPushpin } from 'react-icons/im';
import tav_img from '../../img/tav_img.jpg';
import talab from '../../img/talab.jpg';
import axios from 'axios';
import { url, user } from '../../host/Host';
import school1 from '../../img/school1.jpg';
import Spinner from '../Spinner/Spinner';

function Qabul() {
  const [loader, setLoader] = useState(true);
  const [qabul, setQabul] = useState([]);
  const [id, setId] = useState(0);
  const [school, setSchool] = useState(null);

  const getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      setSchool(res.data);
      console.log(res.data);
      setLoader(false);
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
          <div className='qabul_main d-flex justify-content-center align-items-center'>
            <div className='parda'></div>
            <h3>Qabul uchun ariza topshiring</h3>
            <a
              href={`tel: ${
                school !== null ? school.phone : '+998 93 082 03 72'
              }`}
            >
              <AiFillPhone
                fontSize='35px'
                color='blue'
                className='phone_icon'
              />
            </a>
          </div>
          <div className='qabul_jarayoni'>
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
                    Qabul jarayoni bo'yicha tafsilotlar
                  </h3>
                  <p
                    data-aos-offset='120'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='600'
                  >
                    {school !== null
                      ? school.q_t !== null
                        ? school.q_t
                        : "Qabul jarayonlari bo'yicha tavsilotlar"
                      : "Qabul jarayonlari bo'yicha tavsilotlar"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='qabul_shakl'>
                  <div className='qabul_shakl_lenta d-flex justify-content-center align-items-center '>
                    Ta'lim shakli
                  </div>

                  <p>
                    {school !== null
                      ? school.q_talim !== null
                        ? school.q_talim
                        : "Ta'lim shakli to'g'risida ma'lumot"
                      : "Ta'lim shakli to'g'risida ma'lumot"}
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='qabul_shakl'>
                  <div className='qabul_shakl_lenta d-flex justify-content-center align-items-center '>
                    Bitiruvchilar
                  </div>

                  <p>
                    {school !== null
                      ? school.q_bitiruv !== null
                        ? school.q_bitiruv
                        : "Bitiruv to'g'risida ma'lumotlar"
                      : "Bitiruv to'g'risida ma'lumotlar"}
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='qabul_shakl'>
                  <div className='qabul_shakl_lenta d-flex justify-content-center align-items-center '>
                    O'quvchilar
                  </div>

                  <p>
                    {school !== null
                      ? school.q_oquvchi !== null
                        ? school.q_oquvchi
                        : "O'quvchilar to'g'risida ma'lumot"
                      : "O'quvchilar to'g'risida ma'lumot"}
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <h1 className='qabul_title'>Qabul jarayoni</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='qabul_card'>
                  <h2>Onlayn ro'yxatdan o'ting</h2>
                  <p>
                    {school !== null
                      ? school.q_j_online !== null
                        ? school.q_j_online
                        : "O'nline ro'yxatdan o'tish haqida"
                      : "O'nline ro'yxatdan o'tish haqida"}
                  </p>
                  <img alt='rasm' src={diqqat} />
                  <div className='nomer'>
                    <p>1</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='qabul_card'>
                  <h2>Ariza yozing</h2>
                  <p>
                    {school !== null
                      ? school.q_j_forma !== null
                        ? school.q_j_forma
                        : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"
                      : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"}
                  </p>
                  <img alt='rasm' src={diqqat} />
                  <div className='nomer'>
                    <p>2</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='qabul_card'>
                  <h2>Arizani ko'zdan kechiring</h2>
                  <p>
                    {school !== null
                      ? school.q_j_koz !== null
                        ? school.q_j_koz
                        : "Arizani ko'zdan kechirish haqida ma'lumot"
                      : "Arizani ko'zdan kechirish haqida ma'lumot"}
                  </p>
                  <img alt='rasm' src={diqqat} />
                  <div className='nomer'>
                    <p>3</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='qabul_card'>
                  <h2>Kerakli hujjatlarni to'plang</h2>
                  <p>
                    {school !== null
                      ? school.q_j_hujjat !== null
                        ? school.q_j_hujjat
                        : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"
                      : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"}
                  </p>
                  <img alt='rasm' src={diqqat} />
                  <div className='nomer'>
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='qabul_card'>
                  <h2>Suhbat jarayoni</h2>
                  <p>
                    {school !== null
                      ? school.q_j_intervyu !== null
                        ? school.q_j_intervyu
                        : "Suhbat jarayoni haqida ma'lumot"
                      : "Suhbat jarayoni haqida ma'lumot"}
                  </p>
                  <img alt='rasm' src={diqqat} />
                  <div className='nomer'>
                    <p>5</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='qabul_card'>
                  <h2>So'ngi qaror</h2>
                  <p>
                    {school !== null
                      ? school.q_j_qaror !== null
                        ? school.q_j_qaror
                        : "So'ngi qaror haqida ma'lumot"
                      : "So'ngi qaror haqida ma'lumot"}
                  </p>
                  <img alt='rasm' src={diqqat} />
                  <div className='nomer'>
                    <p>6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='imtihon'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 d-flex justify-content-evenly flex-column align-items-center'>
                  <h2>Imtihonda ishtirok etish talablari</h2>
                  <p>
                    {school !== null
                      ? school.q_imtihon_t !== null
                        ? school.q_imtihon_t
                        : "Imtixonda ishtirok etish talablari haqida ma'lumot"
                      : "Imtixonda ishtirok etish talablari haqida ma'lumot"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row '>
              <div className='col-lg-4'>
                <div
                  className='exam_day'
                  data-aos='fade-right'
                  data-aos-offset='120'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='600'
                >
                  <h3>O'quv yili</h3>
                  <p>
                    {school !== null
                      ? school.q_oquv_yili !== null
                        ? school.q_oquv_yili
                        : "O'quv yili"
                      : "O'quv yili"}
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
                <div className='exam_day'>
                  <h3>Imtihon kuni</h3>
                  <p>
                    {' '}
                    {school !== null
                      ? school.q_imtihon !== null
                        ? school.q_imtihon
                        : 'Imtixon kuni'
                      : 'Imtixon kuni'}
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
                <div className='exam_day'>
                  <h3>Hujjat topshirish muddati</h3>
                  <p>
                    {school !== null
                      ? school.q_muddat !== null
                        ? school.q_muddat
                        : "Muddati haqida ma'lumot"
                      : "Muddati haqida ma'lumot"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='kerakli_hujjatlar'>
                  <ImPushpin
                    fontSize='50px'
                    style={{ transform: 'rotate(-100deg)' }}
                    className='pinned_icon'
                  />
                  <h1>Kerakli hujjatlar</h1>
                  <p>
                    1.
                    {school !== null
                      ? school.q_hujjat_t1 !== null
                        ? school.q_hujjat_t1
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                  </p>
                  <p>
                    2.
                    {school !== null
                      ? school.q_hujjat_t2 !== null
                        ? school.q_hujjat_t2
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    Shu bilan birga ota-onasining pasportidan nusxasi.
                  </p>
                  <p>
                    3.
                    {school !== null
                      ? school.q_hujjat_t3 != null
                        ? school.q_hujjat_t3
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                  </p>
                  <p>
                    Manzil:
                    {school !== null
                      ? school.address !== null
                        ? school.address
                        : 'Maktab manzili '
                      : 'Maktab manzili '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <HEADER_NAV />
        </div>
      )}
    </div>
  );
}

export default Qabul;
