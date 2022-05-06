import React, { Suspense, useState } from 'react';
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
import i18n from './translations/i18n';

const LatestPosts = React.lazy(() => import('./pages/LatestPosts'));
const CreatePost = React.lazy(() => import('./pages/CreatePost'));
const PostPage = React.lazy(() => import('./pages/PostPage'));

const renderer = createRenderer();

const App: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    if (target) {
      setLanguage(target.value);
      i18n.changeLanguage(target.value);
    }
  };

  return (
    <RendererProvider renderer={renderer}>
      <Provider store={store}>
        <Router>
          <Header
            language={language}
            handleChangeLanguage={handleChangeLanguage}
          />
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
