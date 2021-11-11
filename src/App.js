import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from 'components/PageLoader';
import Home from 'pages/Home';
import constants from 'utils/constants';

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={constants.paths.home} element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
