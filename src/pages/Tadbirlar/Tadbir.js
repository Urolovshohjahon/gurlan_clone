import Footer from '../Footer/Footer';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HEADER_NAV from '../Home/Header_nav';
import { AiFillPhone } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import {FaRegCalendarAlt} from 'react-icons/fa';

const Tadbir = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (props.initialState.tadbir.img == null) {
      history.push('/tadbirlar');
    }
  });
  return (
    <div className='new_card'>
      <a href={`tel: ${
              props.initialState.tadbir.phone !== null ? props.initialState.tadbir.phone : '+998 93 082 03 72'
            }`} ><AiFillPhone fontSize='35px' color='blue' className='phone_icon' /></a>
      <div className='container'>
        <div className="row d-flex justify-content-center">
        <h2>{props.initialState.tadbir.title}</h2>
        </div>
        <div className='row d-flex justify-content-start'>
          <p className="date d-flex align-items-center">
            <FaRegCalendarAlt className='date_icon' color='blue' /> {props.initialState.tadbir.date}
          </p>
        </div>
        <div className='row d-flex justify-content-center'>
          <img src={props.initialState.tadbir.img} alt='...' />
        </div>
        <div className='row'>
          
          <p>{props.initialState.tadbir.main}</p>
        </div>
      </div>
      <Footer />
      <HEADER_NAV />
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialState: state,
});

export default connect(mapStateToProps, null)(Tadbir);
