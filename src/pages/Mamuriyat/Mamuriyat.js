import React, { useState, useEffect } from 'react';
import './Mamuriyat.css';
import { AiFillPhone } from 'react-icons/ai';
import Footer from '../Footer/Footer';
import HEADER_NAV from '../Home/Header_nav';
import direktr from '../../img/direktor.jpg';
import zavuch from '../../img/zavuch.jpg';
import zovxoz from '../../img/zavxoz.jpg';
import school1 from '../../img/school19.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import {FadeLoader} from 'react-spinners'

import axios from 'axios';
import { url, user } from '../../host/Host';
import Spinner from '../Spinner/Spinner';
import Global from '../../host/Global';

function Mamuriyat() {
  const [direktor, setDirektor] = useState(null);
  const [orin1, setOrin1] = useState(null);
  const [orin2, setOrin2] = useState(null);
  const [orin3, setOrin3] = useState(null);
  const [kutubxona, setKutubxona] = useState(null);
  const [psixolog, setPsixolog] = useState(null);
  const [kasaba, setKasaba] = useState(null);
  const [yetakchi, setYetakchi] = useState(null);
  const [chqbt, setChqbt] = useState(null);
  const [loader, setLoader] = useState(null);
  const [data, setData] = useState(null);
  const getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      setData(res.data);
    });
  };
  const getStaff = () => {
    axios
      .get(`${url}/staff-by-school/${Global.schoolId}/`)
      .then((res) => {
        var Tdirektor = [];
        var Torin1 = [];
        var Torin2 = [];
        var Torin3 = [];
        var Tkutubxona = [];
        var Tpsixolog = [];
        var Tkasaba = [];
        var Tyetakchi = [];
        var Tchqbt = [];
        res.data.map((item) => {
          if (item.speciality.length !== 0) {
            item.speciality.map((item1) => {
              if (item1 === 3) {
                Tdirektor.push(item);
              }
              if (item1 === 4) {
                Torin1.push(item);
              }
              if (item1 === 5) {
                Torin2.push(item);
              }
              if (item1 === 7) {
                Torin3.push(item);
              }
              if (item1 === 6) {
                Tpsixolog.push(item);
              }
              if (item1 === 9) {
                Tyetakchi.push(item);
              }
              if (item1 === 8) {
                Tkutubxona.push(item);
              }
              if (item1 === 9) {
                Tkasaba.push(item);
              }
              if (item1 === 10) {
                Tchqbt.push(item);
              }
            });
          }
        });

        setDirektor(Tdirektor);
        setOrin1(Torin1);
        setOrin2(Torin2);
        setOrin3(Torin3);
        setKutubxona(Tkutubxona);
        setPsixolog(Tpsixolog);
        setKasaba(Tkasaba);
        setYetakchi(Tyetakchi);
        setChqbt(Tchqbt);

        setTimeout(() => {
          setLoader(false);
        }, 4000);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getStaff();
    getSchool();
  });

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className='qabul_main d-flex justify-content-center align-items-center'>
            <img src={direktor !== null ? direktor[0].image : school1} alt='' />
            <div className='parda'></div>
            <h3>Qabul uchun ariza topshiring</h3>
            <a href={`tel: ${data !== null ? data.phone : '#'}`}>
              {' '}
              <AiFillPhone
                fontSize='35px'
                color='blue'
                className='phone_icon'
              />
            </a>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-6'>
                {direktor !== null
                  ? direktor.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2>Maktab direktori</h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {orin1 !== null
                  ? orin1.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2>
                            {' '}
                            O'quv va tarbiyaviy ishlar bo'yicha direktor
                            o'rinbosari
                          </h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {orin2 !== null
                  ? orin2.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2>
                            {' '}
                            Ma'naviy-ma'rifiy ishlar bo'yicha direktor
                            o'rinbosari
                          </h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {orin3 !== null
                  ? orin3.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2>
                            {' '}
                            Ma'muriy-xo’jalik ishlar bo'yicha direktor
                            o'rinbosari
                          </h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {psixolog !== null
                  ? psixolog.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2> Maktab amaliyotchi psixologi</h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {kasaba !== null
                  ? kasaba.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2> Kasaba uyushma raisi</h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {kutubxona !== null
                  ? kutubxona.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2> Kutubxona mudirasi</h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {chqbt !== null
                  ? chqbt.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2>
                            {' '}
                            Chaqiruvga qadar boshlang‘ich tayyorgarlik rahbari
                          </h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
              </div>
              <div className='col-lg-6'>
                {yetakchi !== null
                  ? yetakchi.map((val) => (
                      <div className='xodim_card'>
                        <div className='xodim_top'>
                          <h2> Boshlang'ich tashkilot yoshlar yetakchisi</h2>
                        </div>
                        <div className='xodim_bottom '>
                          <div className='row d-flex align-items-start'>
                            <div className='col-lg-6 d-flex justify-content-start flex-column align-items-start'>
                              <h2 style={{ color: 'blue', fontWeight: 'bold' }}>
                                {val.full_name}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Mutaxassisligi:
                                </span>{' '}
                                {val.position}
                              </h2>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Telefon raqami:
                                </span>{' '}
                                {val.phone}
                              </h2>
                            </div>
                            <div className='col-lg-6'>
                              <h2>
                                <span
                                  style={{ color: 'blue', fontWeight: 'bold' }}
                                >
                                  Qo'shimcha:
                                </span>{' '}
                                {val.description == null
                                  ? "Ma'lumot to'q"
                                  : val.description}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <img src={val.image} alt='salomlar' />
                      </div>
                    ))
                  : ''}
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

export default Mamuriyat;
