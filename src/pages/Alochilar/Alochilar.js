import React, { useState, useEffect } from 'react';
import './Alochilar.css';
import { AiFillPhone } from 'react-icons/ai';
import Footer from '../Footer/Footer';
import HEADER_NAV from '../Home/Header_nav';
import alochi1 from '../../img/alochi1.jpg';
import alochi2 from '../../img/alochi2.jpg';
import axios from 'axios';
import school1 from '../../img/school1.jpg';
import school2 from '../../img/school2.jpg';
import school3 from '../../img/school3.jpg';
import school4 from '../../img/school4.jpg';
import school5 from '../../img/school5.jpg';
import Aos from 'aos';
import { getExcellent, getPupil } from '../../host/Config';
import { url, user } from '../../host/Host';
import Global from '../../host/Global';
import Spinner from '../Spinner/Spinner';

function Alochilar() {

  const [school, setSchool] = useState({});
  const [loader, setLoader] = useState(true);
  const [excellent, setExcellent] = useState([]);
  const [pupil, setPupil] = useState([]);
  const [pupils, setPupils] = useState([]);
  const [data, setData] = useState(null);
  const [id, setId] = useState(0);
  const [sinf, setSinf] = useState([]);


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
  const getExcellents = () => {
    // var a = window.location.href.split("/");
    var v = user;
    /* axios
      .get(`${url}/excellent-by-school/${Global.schoolId}`)
      .then((res) => {
        setExcellent(res.data);
        setTimeout(() => {
          setLoader(false);
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setLoader(false);
        }, 4000);
      }); */
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      axios
        .get(`${url}/excellent/`)
        .then((res1) => {
          let arrayOfExcellent=[]
          res1.data.forEach(val=>{
            if(val.school==res.data.id) arrayOfExcellent.push(val)
          })
          setExcellent(arrayOfExcellent)
          setLoader(false)
          /* ${idMaktab} */
          console.log('Mana ular...', res1.data);
        })
        .catch((err) => {
          console.log('err');
         setLoader(false)
        });
      setData(res.data);
    });
    axios
      .get(`${url}/class/`)
      .then((res) => {
        setSinf(res.data);
      })
      .catch((err) => {
        console.log(err);
        // this.setState({loader:false})
      });
  };

  const getPupils = () => {
    getPupil()
      .then((res) => {
        setPupils(res.data);
      })
      .catch((err) => console.log(err));
  };

  const setOquvchi = (id) => {
    var Tpupil = {};
    if (pupils !== []) {
      pupils.map((item1) => {
        if (item1.id === id) {
          Tpupil = item1;
        }
      });
    }
    return Tpupil;
  };

  const echoClasses = (id) => {
    var Tclasses = {};
    console.log(id, sinf);
    if (sinf !== []) {
      sinf.map((item1) => {
        if (item1.id === id) {
          Tclasses = item1;
        }
      });
    }
    return Tclasses;
  };

  useEffect(() => {
    getSchool()
    getExcellents();
    getPupils();
   
  });

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className='qabul_main d-flex justify-content-center align-items-center'>
            <img
              src={
                data !== null && data.m_h_h1 !== null ? data.m_h_h1 : alochi2
              }
              alt=''
            />
            <div className='parda'></div>
            <h3>Maktab a'lochilari bilan tanishing</h3>
            <a href={`tel: ${data !== null ? data.phone : '#'}`}>
              <AiFillPhone
                fontSize='35px'
                color='blue'
                className='phone_icon'
              />
            </a>
          </div>

          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <h1
                style={{
                  fontFamily: 'Courgette, cursive',
                  margin: '0',
                  fontSize: '60px',
                  width: 'auto',
                }}
              >
                A'lochilar doskasi
              </h1>
            </div>
            <div className='row'>
              {excellent !== []
                ? excellent.map((item) => {
                    var oquvchi = setOquvchi(item.pupil);
                    var sinflar = echoClasses(oquvchi.clas);
                    return (
                      <div className='col-lg-6'>
                        <div className='alochi_card'>
                          <div className='alochi_top d-flex flex-column'>
                            <div className='flag_blue'></div>
                            <div className='flag_red'></div>
                            <div className='flag_white'></div>
                            <div className='flag_red'></div>
                            <div className='flag_green'></div>
                            <img
                              src={
                                item.image !== null ? item.image : school2
                              }
                            />
                          </div>
                          <div className='alochi_bottom d-flex flex-column justify-content-around'>
                            <h2>
                              <b>O'quvchi:</b> {item.full_name}
                            </h2>
                            <h2>
                              <b>Tug'ulgan sanasi:</b>
                              {item.birth_day}
                            </h2>
                            <h2>
                              <b>Sinfi:</b>{' '} {item.clas}
                              {/* {echoClasses(oquvchi.clas).class_number} - "
                              {echoClasses(oquvchi.clas).class_char}" sinf */}
                            </h2>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ''}
            </div>
          </div>
          <Footer />
          <HEADER_NAV school_number={school.school_number} />
        </div>
      )}
    </div>
  );
}

export default Alochilar;
