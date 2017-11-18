import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import Main from './Main';
import Sidebar from './Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';

const Routes = () => {

    return (
      <Router history={browserHistory}>
          <Main>
              <Route path="/" component={Sidebar} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route component={Home} />
              </Switch>
          </Main>
      </Router>
  )
}

export default Routes
