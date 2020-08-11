import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import Routes from './Routes'


ReactDOM.render(
    <BrowserRouter>
      <div className="main">
        {renderRoutes(Routes)}
      </div>
    </BrowserRouter>, document.querySelector('#root'));
