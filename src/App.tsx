import React, { Suspense, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import routes from './routing/routes';

import { Footer, Header, Main, Loader } from './components';
import Service from './store/service';
import StateContext from './context/StateContext';
import ThemeContext from './context/ThemeContext';

const LatestPosts = React.lazy(() => import('./pages/LatestPosts'));
const CreatePost = React.lazy(() => import('./pages/CreatePost'));
const PostPage = React.lazy(() => import('./pages/PostPage'));

const renderer = createRenderer();

const App: React.FC = () => {
  // const store = new Service();
  // const [stateContext, setStateContext] = useState({ theme: 'light', store });
  const value = useMemo(() => new Service(), []);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const valueTheme = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <RendererProvider renderer={renderer}>
      <ThemeContext.Provider value={valueTheme}>
        <StateContext.Provider value={value}>
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
        </StateContext.Provider>
      </ThemeContext.Provider>
    </RendererProvider>
  );
};

export default App;
