import React from 'react';
import './materialize.min.css';
import {Provider} from 'react-redux';
import './App.css';
import Constructor from './containers/Constructor';
import Hero from './containers/Hero';
import {Row, Col} from 'react-materialize';
import {Store} from './store/Store';

const store = Store();
const AppStats ={
  width: 1024,
  height: 768 
}

const App=() => (
    <Provider store={store}>
      <div className="App">
        <Row>
          <Col s={6}>
            <Constructor/>
          </Col>
          <Col s={6}>
            <Hero/>
          </Col>
        </Row>
         </div>
      </Provider>
  );

export default App;

