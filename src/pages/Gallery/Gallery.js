import React, { useState, useEffect } from 'react';
import './Gallery.css';
import HEADER_NAV from '../Home/Header_nav';
import Footer from '../Footer/Footer';
import img1 from '../../img/b1.JPG';
import img2 from '../../img/b2.jpg';
import img3 from '../../img/b3.jpg';
import img4 from '../../img/b4.jpg';
import img5 from '../../img/b5.jpg';
import img6 from '../../img/b6.jpg';
import { idMaktab, url, user } from '../../host/Host';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

function Gallery() {
  const [school, setSchool] = useState([]);
  const [loader, setLoader] = useState(true);

  const getSchool = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        setSchool(res.data);
        setTimeout(() => {
          setLoader(false);
        }, 4000);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSchool();
  });

  return (
    <div>
      {
        loader?(<Spinner/>):(<div>
          <div className='qabul_main d-flex justify-content-center flex-column align-items-center'>
            <img src={
                  school !== null
                    ? school.foto !== null
                      ? school.foto
                      : img1
                    : img1
                } alt="" />
            <div className='parda'></div>
            <h3 style={{display:'block'}}>Bizning Fotogalareya</h3>
            <h3 style={{display:'block'}}>Maktabimiz hayotidan fotolavhalar</h3>
          </div>
          <div className='container'>
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
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto !== null
                          ? school.foto
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto1 !== null
                          ? school.foto1
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto2 !== null
                          ? school.foto2
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto3 !== null
                          ? school.foto3
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto4 !== null
                          ? school.foto4
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto5 !== null
                          ? school.foto5
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto6 !== null
                          ? school.foto6
                          : img5
                        : img5
                    }
                    alt=''
                    className='gallery_image'
                  />
                  <div className='gallery_o'></div>
                </div>
              </div>
              <div className='col-lg-6 position-relative'>
                <div className='img_box'>
                  <img
                    src={
                      school !== null
                        ? school.foto7 !== null
                          ? school.foto7
                          : img5
                        : img5
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
          <HEADER_NAV school_number={school.school_number} />
        </div>)
      }
    </div>
  );
}

export default Gallery;
