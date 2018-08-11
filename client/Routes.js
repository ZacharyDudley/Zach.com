import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Menu, Home, Portfolio, Resume, Contact, Modal } from './components';

const Routes = () => {
    return (
      <Router>
          <Main>
          <Modal />
              <Route path="/" component={Menu} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route component={Home} />
              </Switch>
          </Main>
      </Router>
  )
};

export default Routes;
