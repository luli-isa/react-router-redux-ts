import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from './containers/AppRouter'
import store from './store'

ReactDOM.render(
  <AppRouter store={store}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
