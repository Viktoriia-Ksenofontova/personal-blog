import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import "./App.scss";
import Header from "./components/Header/Header";
import routes from "./routing/routes";
import LatestPosts from "./pages/LatestPosts";
import mainPostsStore from "./store/postsStore";


function App() {
  
  return (
    <Router>
      <Header />
      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
              <Route exact path={routes.home} element={<LatestPosts store={mainPostsStore}/>}/>
              <Route path="*" element={<Navigate to={routes.page404} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}


export default App;
