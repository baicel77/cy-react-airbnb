import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'

import 'normalize.css'
import '@/assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <HashRouter>
      <Suspense fallback="loading...">
        <Provider store={store}>
          <App/>
        </Provider>
      </Suspense>
    </HashRouter>
  // </React.StrictMode>
);