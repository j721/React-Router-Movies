import React, { useState } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';

import MovieList from "./MovieList";
import Movie from "./Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
        {/* Replace this Div with your Routes */}
     <Route exact path = "/" component={MovieList}/>
     <Route path ='/Movies/:movieID' component ={Movie}/>
        </div>
    
  );
};

export default App;
