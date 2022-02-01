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
import Counter from './features/counter/Counter';


function App() { 
  return ( 
        <Router><Context.Provider>
    	    <div className="wrapper">    	        
                <Counter/>
                <PhotoGallery/>        
      <div> 
        <Routes>
          <Route path="/photoGallery" exact={true} component={<PhotoGallery/>} />
          <Route path="/photo/:id" element={<PhotoPage/>} />
        </Routes>
      </div>
                  
    	    </div>
    	</Context.Provider></Router>
    	)
}

export default App;

