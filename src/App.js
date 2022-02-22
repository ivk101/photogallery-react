import React from 'react';
import Context from './context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PhotoGallery from './pages/PhotoGallery';
import PhotoPage from './pages/PhotoPage';


function App() { 
  return ( 
        <Router><Context.Provider>
    	    <div className="wrapper">  
            <ul>
                <li><Link to={`/`}>Main</Link></li>
                <li><Link to={`/photoGallery`}>Gallery</Link></li>
            </ul>   
      <div> 
        <Routes>
          <Route path="/" element={<PhotoGallery/>} />
          <Route path="/photoGallery" element={<PhotoGallery/>} />
          <Route path="/photo/:id" element={<PhotoPage/>} />
        </Routes>
      </div>
                  
    	    </div>
    	</Context.Provider></Router>
    	)
}

export default App;

