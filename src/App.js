import React, { Suspense, useMemo, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import routes from "./routing/routes";

import { Footer, Header, Main, Loader } from "./components";
import Service from './store/service';
import StateContext from "./context/StateContext";

const LatestPosts = React.lazy(()=> import("./pages/LatestPosts"));
const CreatePost = React.lazy(()=> import("./pages/CreatePost"));
const PostPage = React.lazy(() => import("./pages/PostPage"));

const renderer = createRenderer();

function App() {
  const store= new Service();
  const [stateContext, setStateContext]=useState({theme:"light", store});
  const value=useMemo(()=>({stateContext, setStateContext }),[stateContext]);

  return (
    <RendererProvider renderer = {renderer}>
      <StateContext.Provider value={value}>
      <Router>
      <Header />
      <Main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route exact path={routes.home} element={<LatestPosts/>} />
            <Route path={routes.createPost} element={<CreatePost />} /> 
            <Route path={routes.post} element={<PostPage />}/> 
            <Route path="*" element={<Navigate to={routes.page404} />} />
          </Routes>
        </Suspense>
          </Main>
          <Footer/>
      </Router>
      </StateContext.Provider>
    </RendererProvider>
  );
}

export default App;
