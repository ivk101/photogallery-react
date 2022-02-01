import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from './../features/counter/counterSlice';

function PhotoPage() {	
  // const number = useSelector((state) => state.counter.data)
  // console.log(number)
	let { id } = useParams();
        return (
            <div>
                <h3>ID: {id} </h3> 
            </div> 
		)
}

export default PhotoPage;

