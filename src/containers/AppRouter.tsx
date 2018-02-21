import * as React from 'react';
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import About from '../components/About';
import MembersPage from '../components/MembersPage';
import Hello from '../containers/Hello';
import Header from '../components/Header'
//import { RootState } from '../types/index';
import { Store } from 'redux'
import { Provider } from 'react-redux';
import { history } from '../store'

export interface Props {
  store: Store<{}>
}

export const AppRouter = ({store}: Props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container-fluid">
          <Header />
          <Route path="/about" component={About} />
          <Route path='/member' component={MembersPage}/>
          <Route path='/hello' component={Hello}/>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default AppRouter
