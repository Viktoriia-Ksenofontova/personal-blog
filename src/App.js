import React, { Suspense, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import routes from "./routing/routes";
import mainPostsStore from "./store/PostsStore";
import { Footer, Header, Main } from "./components";
import ThemeContext from "./context/ThemeContext";

const LatestPosts = React.lazy(()=> import("./pages/LatestPosts"));
const CreatePost = React.lazy(()=> import("./pages/CreatePost"));
const PostPage = React.lazy(() => import("./pages/PostPage"));

const renderer = createRenderer();

function App() {
  const [theme, setTheme] = useState("light");
  const value = useMemo(()=>({theme, setTheme }),[theme]);

  return (
    <RendererProvider renderer = {renderer}>
      <ThemeContext.Provider value={value}>
      <Router>
      <Header />
      <Main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route exact path={routes.home} element={<LatestPosts store={mainPostsStore}/>} />
            <Route path={routes.createPost} element={<CreatePost store={mainPostsStore}/>} />
            <Route path={routes.post} element={<PostPage/>}/>
            <Route path="*" element={<Navigate to={routes.page404} />} />
          </Routes>
        </Suspense>
          </Main>
          <Footer/>
      </Router>
      </ThemeContext.Provider>
    </RendererProvider>
  );
}


export default App;
