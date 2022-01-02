import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import routes from "./routing/routes";
import mainPostsStore from "./store/PostsStore";
import Header from "./components/Header/Header";
import "./App.scss";

const LatestPosts = React.lazy(()=> import("./pages/LatestPosts"));
const CreatePost = React.lazy(()=> import("./pages/CreatePost"));
const PostPage = React.lazy(() => import("./pages/PostPage"));

const renderer = createRenderer();

function App() {
  
  return (
    <RendererProvider renderer = {renderer}>
    <Router>
      <Header />
      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route exact path={routes.home} element={<LatestPosts store={mainPostsStore}/>} />
            <Route path={routes.createPost} element={<CreatePost store={mainPostsStore}/>} />
            <Route path={routes.post} element={<PostPage/>}/>
            <Route path="*" element={<Navigate to={routes.page404} />} />
          </Routes>
        </Suspense>
      </div>
      </Router>
      </RendererProvider>
  );
}


export default App;
