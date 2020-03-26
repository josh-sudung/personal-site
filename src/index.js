import React from 'react';
import { hydrate, render } from "react-dom";
import * as serviceWorker from './serviceWorker';

import Main from './containers/Main';
import GlobalStyles from './GlobalStyles';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

global.SC_DISABLE_SPEEDY = true;
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.Fragment>
      <GlobalStyles />
      <Main />
    </React.Fragment>, rootElement);
} else {
  render(
    <React.Fragment>
      <GlobalStyles />
      <Main />
    </React.Fragment>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
