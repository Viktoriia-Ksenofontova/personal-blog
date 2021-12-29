import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';

import "./App.scss";
import Header from "./components/header/Header";
import routes from "./routing/routes";
import LatestPosts from "./pages/LatestPosts";



function App() {
  
  return (
    <Router>
    <div className="App">
      <Header />
      
        <Suspense fallback={<p>Loading...</p>}>
        <Routes>
            <Route exact path={routes.home} element={<LatestPosts/>}/>
            <Route path="*" element={<Navigate to={routes.page404} />} />
        </Routes>
        </Suspense>
      
    </div>
      </Router>
  );
}



export default App;
