import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  // Route, Routes, Navigate }
} from 'react-router-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
// import routes from './routing/routes';

import { Footer, Header, Main, Loader } from './components';
// import Service from './store/service';
// import StateContext from './context/StateContext';
import { GlobalProvider } from './context/GlobalContext';

// const LatestPosts = React.lazy(() => import('./pages/LatestPosts'));
// const CreatePost = React.lazy(() => import('./pages/CreatePost'));
// const PostPage = React.lazy(() => import('./pages/PostPage'));

const renderer = createRenderer();

const App: React.FC = () => (
  // const store = new Service();
  // const [stateContext, setStateContext] = useState({ theme: 'light', store });
  // const value = useMemo(() => ({ stateContext, setStateContext }), [stateContext]);

  <RendererProvider renderer={renderer}>
    {/* <StateContext.Provider value={value}> */}
    <Router>
      <GlobalProvider>
        <Header />
        <Main>
          <Suspense fallback={<Loader />}>
            {/* <Routes> */}
            {/* <Route exact path={routes.home} element={<LatestPosts />} />
              <Route path={routes.createPost} element={<CreatePost />} />
              <Route path={routes.post} element={<PostPage />} />
              <Route path="*" element={<Navigate to={routes.page404} />} /> */}
            {/* </Routes> */}
          </Suspense>
        </Main>
        <Footer />
      </GlobalProvider>
    </Router>
    {/* </StateContext.Provider> */}
  </RendererProvider>
);

export default App;
