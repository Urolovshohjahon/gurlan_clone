import React from 'react';
import './Error.css';
import {useHistory} from 'react-router-dom';

function Error() {
    const history = useHistory()
    return (
        <div className="container errorpage">
            <div className="row d-flex flex-column justify-content-around align-items-center">
                <h3>404 xatolik ro`y berdi</h3>
            <h1>Bizda hech qanday ma'lumot topilmadi</h1>
            <h2>404</h2>
            <button className='btn btn-primary' onClick={()=>history.push('/')}>Bosh sahifaga qaytish</button>
            </div>
        </div>
    )
}

export default Error
