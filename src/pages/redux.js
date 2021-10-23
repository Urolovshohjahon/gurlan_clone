import React from 'react';
import { connect } from 'react-redux';
const news = [
  {
    title: 'YAngilik1',
    main: 'Yangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopzVVVYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kop',
    img: 'https://agitated-lamport-037c23.netlify.app/static/media/3s-Photo-3.c4a2f2b9.jpg',
  },
  {
    title: 'YAngilik1',
    main: 'Yangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopzVVVYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kop',
    img: 'https://agitated-lamport-037c23.netlify.app/static/media/1.feb51666.jpg',
  },
  {
    title: 'YAngilik1',
    main: 'Yangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopzVVVYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kopYangiliklar kop',
    img: 'https://agitated-lamport-037c23.netlify.app/static/media/love.042dfb21.jpg',
  },
];
function Redux(props)  {
  return (
    <div>
      <button className='btn btn-primary' onClick={props.setNews}>
        yangilik1
      </button>
      <button className='btn btn-primary'>yangilik2</button>
      <button className='btn btn-primary'>yangilik3</button>

      <div>
        <h1>{props.initialState.yangilik.title}</h1>
        <img src={props.initialState.yangilik.img} alt='.' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialState: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: () =>
      dispatch({
        type: 'ENTER_NEWS_PAGE',
        title: news[0].title,
        main: news[0].main,
        img: news[0].img,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
