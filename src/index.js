import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'

import 'normalize.css'
import '@/assets/css/index.less'
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <HashRouter>
      <Suspense fallback="">
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </Provider>
      </Suspense>
    </HashRouter>
  // </React.StrictMode>
);