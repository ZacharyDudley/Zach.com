import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';

const Routes = () => {

    return (
      <Router>
        <div id="mainBox">
          <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route component={Home} />
              </Switch>
          </div>
      </Router>
  )
}

export default Routes
