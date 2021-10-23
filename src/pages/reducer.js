const initialState = {
  yangilik: {
    title: '',
    main: '',
    img: null,
    phone:null,
    date:null
  },
  tadbir:{
    title: '',
    main: '',
    img: null,
    phone:null,
    date:null
  }
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENTER_NEWS_PAGE': {
      return {
        yangilik: {
          title: action.title,
          main: action.main,
          img: action.img,
          phone:action.phone,
          date:action.date
        },
      };
    }
    case 'ENTER_TADBIRLAR_PAGE': {
      return {
        tadbir: {
          title: action.title,
          main: action.main,
          img: action.img,
          phone:action.phone,
          date:action.date
        },
      };
    }
    default:
      return state;
  }
};

export default Reducer;
