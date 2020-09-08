import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'src/assets/scss/style.scss';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';

// Pages
const Home = lazy(() => import('../Home'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Router>
          <Switch>
            {/* Page routes */}
            <Route exact path="/" component={Home} />

            {/* Default 404 */}
            <Route render={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
