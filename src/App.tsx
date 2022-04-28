import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import routes from './routing/routes';

import { Footer, Header, Main, Loader } from './components';

import { store } from './redux/store';

const LatestPosts = React.lazy(() => import('./pages/LatestPosts'));
const CreatePost = React.lazy(() => import('./pages/CreatePost'));
const PostPage = React.lazy(() => import('./pages/PostPage'));

const renderer = createRenderer();

const App: React.FC = () => {
  return (
    <RendererProvider renderer={renderer}>
      <Provider store={store}>
        <Router>
          <Header />
          <Main>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={routes.home} element={<LatestPosts />} />
                <Route path={routes.createPost} element={<CreatePost />} />
                <Route path={routes.post} element={<PostPage />} />
                <Route path="*" element={<Navigate to={routes.page404} />} />
              </Routes>
            </Suspense>
          </Main>
          <Footer />
        </Router>
      </Provider>
    </RendererProvider>
  );
};

export default App;
