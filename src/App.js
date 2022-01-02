import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import "./App.scss";
import Header from "./components/Header/Header";
import routes from "./routing/routes";
import mainPostsStore from "./store/PostsStore";

const LatestPosts = React.lazy(()=> import("./pages/LatestPosts"));
const CreatePost = React.lazy(()=> import("./pages/CreatePost"));
const PostPage = React.lazy(()=>import("./pages/PostPage"));

function App() {
  
  return (
    <Router>
      <Header />
      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route exact path={routes.home} element={<LatestPosts store={mainPostsStore}/>} />
            <Route path={routes.createPost} element={<CreatePost />} />
            <Route path={routes.post} element={<PostPage/>}/>
            <Route path="*" element={<Navigate to={routes.page404} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}


export default App;
