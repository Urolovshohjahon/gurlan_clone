import React, { Component } from 'react';

import './App.css';
import './head.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* import { url, user } from './host/Host'; */
import { FadeLoader } from 'react-spinners';
import Header from './pages/Home/Header';
import Hayot from './pages/Hayot/Hayot';
import Qabul from './pages/Qabul/Qabul';
import News from './pages/News/News';
import New from './pages/News/New';
import Mamuriyat from './pages/Mamuriyat/Mamuriyat';
import Alochilar from './pages/Alochilar/Alochilar';
import Tadbirlar from './pages/Tadbirlar/Tadbirlar';
import Tadbir from './pages/Tadbirlar/Tadbir';
import Gallery from './pages/Gallery/Gallery';
import Yutuqlar from './pages/Yutuqlar/Yutuqlar';
import Error from './pages/Error/Error';
export default class App extends Component {
  state = {
    loader: false,
    error: false,
  };
  /* componentDidMount() {
    window.scrollTo(0, 0);
    // var a = window.location.href.split("/");
    var v = user;

    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        Global.schoolId = res.data.id;
        Global.user = user;
        this.setState({
          loader: false,
        });
        // console.log(Global.user, Global.schoolId);
      })
      .catch((err) => {
        // console.log("scmkscmskcm");
        this.setState({ error: true, loader: false });
      });
  } */

  render() {
    return (
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        {this.state.loader ? (
          <div className='loaderT'>
            <FadeLoader color='blue' loading={this.state.loader} size={120} />
          </div>
        ) : this.state.error ? (
          <h1>ERROR</h1>
        ) : (
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <Header />
              </Route>
              <Route path='/hayot'>
                <Hayot />
              </Route>
              <Route path='/qabul'>
                <Qabul />
              </Route>
              <Route path='/news'>
                <News />
              </Route>
              <Route path='/rahbariyat'>
                <Mamuriyat />
              </Route>
              <Route path='/alochilar'>
                <Alochilar />
              </Route>
              
              <Route path='/new'>
                <New />
              </Route>
              <Route path='/tadbirlar'>
                <Tadbirlar />
              </Route>
              <Route path='/tadbir'>
                <Tadbir />
              </Route>
              <Route path='/gallery'>
                <Gallery />
              </Route>
              <Route path='/yutuqlar'>
                <Yutuqlar />
              </Route>
              <Route path='*' >
                <Error/>
              </Route>
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}
