import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photosReducer from '../features/photos/photosSlice';

export default configureStore({
  reducer: {
  	counter: counterReducer, 
  	photos: photosReducer, 	
  },
})