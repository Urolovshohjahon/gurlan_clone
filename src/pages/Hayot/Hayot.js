import React, { useEffect, useState } from 'react';
import './Hayot.css';
import Header_nav from '../Home/Header_nav';
import { AiFillPhone } from 'react-icons/ai';
import milliy from '../../img/milliy.jpg';
import avto from '../../img/avto.jpg';
import AOS from 'aos';
import security from '../../img/xavfsizlik6.jpeg';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Global from '../../host/Global';
import { url, user } from '../../host/Host';
import Spinner from '../Spinner/Spinner';
import school1 from '../../img/school1.jpg';
import school2 from '../../img/school2.jpg';
import school4 from '../../img/school4.jpg';
import school5 from '../../img/school5.jpg';
import school8 from '../../img/school8.jpg';
import school9 from '../../img/school9.jpg';
import school10 from '../../img/school10.jpg';
import school11 from '../../img/school11.jpg';
import school12 from '../../img/school12.jpg';

function Hayot() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    AOS.init();
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      setData(res.data);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    });
  });
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className='hayot_main d-flex justify-content-center align-items-center'>
            <img
              src={
                data !== null && data.m_h_h2 !== null ? data.m_h_h2 : school1
              }
              alt=''
            />
            <div className='parda'></div>
            <h3>
              Xorazm viloyati Gurlan tumani {data.school_number} - {data.type}
            </h3>
            <a target='_blank' href={`tel: ${data.phone}`}>
              <AiFillPhone
                fontSize='35px'
                color='blue'
                className='phone_icon'
              />
            </a>
          </div>
          <div className='container'>
            <div className='row anana'>
              <div className='col-12 flex-column d-flex justify-content-around align-items-center'>
                <h1
                  data-aos='fade-zoom-in'
                  data-aos-offset='320'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='600'
                >
                  Tadbirlar va qadriyatlar
                </h1>
                <p
                  data-aos='fade-zoom-in'
                  data-aos-offset='320'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='600'
                >
                  {data !== null && data.m_h_tq !== null
                    ? data.m_h_tq
                    : `Uzoqlarda, tog'lar so'zining orqasida, Vokaliya va
                        Consonantia mamlakatlaridan uzoqroqda ko'r matnlar
                        yashaydi. Ular alohida yashashadi Alohida ular Semantika
                        qirg'og'idagi Bookmarksgroveda, katta til okeanida
                        yashaydilar. Duden nomli kichik daryo ularning joylari
                        bo'ylab oqadi va uni zarur regelialiya bilan ta'minlaydi.
                        Bu paradisematik mamlakat, unda jumlaning qovurilgan
                        qismlari og'zingizga uchadi. Hattoki qudratli ishora ham
                        ko'r-ko'rona matnlarni nazorat qila olmaydi, bu deyarli
                        nostografik hayot.`}
                </p>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-6'>
                <div className='milliy_card'>
                  <img
                    src={
                      data !== null && data.m_h_navruz !== null
                        ? data.m_h_navruz
                        : school1
                    }
                  />
                  <h3>Navro'z bayrami</h3>
                  <div className='fast'></div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='milliy_card'>
                  <img
                    src={
                      data !== null && data.m_h_mustaqillik !== null
                        ? data.m_h_mustaqillik
                        : school2
                    }
                  />
                  <h3>Mustaqillik bayrami</h3>
                  <div className='fast'></div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='milliy_card'>
                  <img
                    src={
                      data !== null && data.m_h_bitiruv !== null
                        ? data.m_h_bitiruv
                        : school4
                    }
                  />
                  <h3>Bitiruv tadbiri</h3>
                  <div className='fast'></div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-12'>
                <div className='transport_card d-flex flex-column align-items-center justify-content-start'>
                  <img
                    className='avto'
                    src={
                      data !== null && data.m_h_t !== null
                        ? data.m_h_t
                        : school5
                    }
                  />
                  <div className='tor'></div>
                  <h1
                    data-aos='zoom-in-down'
                    data-aos-offset='120'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='600'
                  >
                    Transport xizmati
                  </h1>
                  <p
                    data-aos='fade-zoom-in'
                    data-aos-offset='120'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='600'
                  >
                    {data.m_h_t_t !== null && data !== null
                      ? data.m_h_t_t
                      : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi. Alohida ular Semantika qirg'og'idagi
                            Bookmarksgroveda, katta til okeanida yashaydilar.
                            Duden nomli kichik daryo ularning joylari bo'ylab
                            oqadi va uni zarur regelialiya bilan ta'minlaydi. Bu
                            paradizmatik. Bu jumlaning qovurilgan qismlari uchib
                            ketadigan jannat matikasi mamlakati.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='children'>
            <div className='tor'></div>
            <div className='container'>
              <div className='row d-flex flex-column justify-content-around align-items-center'>
                <h2>
                  {data.m_h_k_h !== null && data !== null
                    ? data.m_h_k_h
                    : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud.`}
                </h2>
                <p>
                  {data.m_h_k_t !== null && data !== null
                    ? data.m_h_k_t
                    : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi.`}
                </p>
              </div>
            </div>
          </div>
          <div className='about_school'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='life_news'>
                    <img
                      src={
                        data.m_h_oshxona !== null && data !== null
                          ? data.m_h_oshxona
                          : school5
                      }
                    />
                    <div className='tugma'>
                      <div className='tugmacha'></div>
                    </div>
                    <h1>Maktab oshxonasi</h1>
                    <p>
                      {data.m_h_oshxona_t !== null && data !== null
                        ? data.m_h_oshxona_t
                        : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='life_news'>
                    <img
                      src={
                        data.m_h_sport !== null && data !== null
                          ? data.m_h_sport
                          : school8
                      }
                    />
                    <div className='tugma'>
                      <div className='tugmacha'></div>
                    </div>
                    <h1>Sport</h1>
                    <p>
                      {data.m_h_sport_t !== null && data !== null
                        ? data.m_h_sport_t
                        : `
                            Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='life_news'>
                    <img
                      src={
                        data.m_h_musiqa !== null && data !== null
                          ? data.m_h_musiqa
                          : school9
                      }
                    />
                    <div className='tugma'>
                      <div className='tugmacha'></div>
                    </div>
                    <h1>San'at va madaniyat</h1>
                    <p>
                      {data.m_h_musiqa_t !== null && data !== null
                        ? data.m_h_musiqa_t
                        : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='life_news'>
                    <img
                      src={
                        data.m_h_axborot !== null && data !== null
                          ? data.m_h_axborot
                          : school10
                      }
                    />
                    <div className='tugma'>
                      <div className='tugmacha'></div>
                    </div>
                    <h1>Axborot texnologiyalari</h1>
                    <p>
                      {data.m_h_axborot_t !== null && data !== null
                        ? data.m_h_axborot_t
                        : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='life_news'>
                    <img
                      src={
                        data.m_h_xavfsizlik !== null && data !== null
                          ? data.m_h_xavfsizlik
                          : school11
                      }
                    />
                    <div className='tugma'>
                      <div className='tugmacha'></div>
                    </div>
                    <h1>Xavfsizlik va qo'riqlash</h1>
                    <p>
                      {data.m_h_xavfsizlik_t !== null && data !== null
                        ? data.m_h_xavfsizlik_t
                        : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='life_news'>
                    <img
                      src={
                        data.m_h_tibbiyot !== null && data !== null
                          ? data.m_h_tibbiyot
                          : school12
                      }
                    />
                    <div className='tugma'>
                      <div className='tugmacha'></div>
                    </div>
                    <h1>Sog'liq va salomatlik</h1>
                    <p>
                      {data.m_h_tibbiyot_t !== null && data !== null
                        ? data.m_h_tibbiyot_t
                        : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='prezident'>
            <div className='prezident_opacity'></div>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='prezident_card'>
                    <div className='prezident_opacity'></div>
                    <p>
                      {data.m_h_o !== null && data !== null
                        ? data.m_h_o
                        : `Bizning maqsadimiz moliyaviy xizmatlar sohasining
                          markazida bo'lishdir, chunki korxonalar bo'ylab biznes
                          kengaymoqda.`}
                    </p>
                    <h3>
                      {data.m_h_o_t !== null && data !== null
                        ? data.m_h_o_t
                        : 'Alisa'}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <Header_nav />
        </div>
      )}
    </div>
  );
}

export default Hayot;
