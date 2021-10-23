import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../../host/Global';
import { url } from '../../host/Host';
import wins from '../../img/wins.jpg';
import HEADER_NAV from '../Home/Header_nav';
import Footer from '../Footer/Footer';
import './Yutuqlar.css';
import Spinner from '../Spinner/Spinner';

function Yutuqlar() {
  const [loader, setLoader] = useState(true);
  const [qabul, setQabul] = useState([]);
  const [id, setId] = useState(0);
  const [school, setSchool] = useState(null);
  const [students, setStudents] = useState(null);
  const getSchool = () => {
    axios.get(`${url}/achiviment/${Global.schoolId}`).then((res) => {
      setSchool(res.data);
      console.log(res.data);
    });
    axios.get(`${url}/pupil/`).then((res) => {
      setStudents(res.data);
      setLoader(false);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getSchool();
  });

  const echoPupil = (id) => {
    var f = '';

    if (students !== null) {
      students.map((item) => {
        if (item.id === id) {
          console.log(id, item.id);
          f = item.full_name;
        }
      });
    }
    return f;
  };
  return (
    <div>
      {
        loader?(<Spinner/>):(<div>
          <div className='container'>
            <div className='row butun_top d-flex justify-content-center'>
              {/* <div className='col-lg-4'>
                <div className='butun'>
                    <img src={wins} alt="rasm bor edi..." />
                    <h2></h2>
                  <div className='tri_top'>  </div>
                  <div className='tri_right'>  </div>
                  <div className='tri_bottom'>  </div>
                  <div className='tri_left'>  </div>
                  <h1>YUTUQLAR</h1>
                </div>
              </div> */}
              {school !== null
            ? school.map((item, key) => {
                return (
                  <div className='col-lg-4'>
                    <div className='butun'>
                      {item.image !== null ? (
                        <img src={item.image} alt='...' />
                      ) : (
                        <img src={wins} alt='...' />
                      )}
                      <div className="parda"></div>
                      <h4>{item.competition}</h4>
                      <h2>{item.result}</h2>
                      <p>{item.text}</p>
                      <div className='tri_top'> </div>
                      <div className='tri_right'> </div>
                      <div className='tri_bottom'> </div>
                      <div className='tri_left'> </div>
                      <h1>BIZNING FAXRIMIZ</h1>
                    </div>
                  </div>
                );
              })
            : ''}
            </div>
          </div>
    
          
    
          <HEADER_NAV />
          <Footer />
        </div>)
      }
    </div>
  );
}

export default Yutuqlar;
