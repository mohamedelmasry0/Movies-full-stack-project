import React from 'react';
import {  useState, useEffect } from 'react'
// import { useHistory } from "react-router-dom"
// import { Link } from 'react-router-dom'
import axios from '../axios';
import './ListMoviesDefinitions.css'

function ListMoviesDefinitions(){
    const [movieDef, setMovieDef]= useState([]); 
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/api/def/')
            setMovieDef(req.data);
        }
        fetchData();
    } , [] )
        return (<>
        {/* <h1>List MoviesDefinitions</h1> */}
        <ul className="data">
            {movieDef.map((MoviesDefinitio)  => (
                <li key={MoviesDefinitio._id}>
                    {/* <Link to={`/def/${MoviesDefinitions._id }/edit`}>{MoviesDefinitions.title }   {MoviesDefinitions.category}   {MoviesDefinitions.movieDirector}    {MoviesDefinitions.releaseDate}    year</Link>&nbsp; */}
                   <div className="title">{MoviesDefinitio.title }</div> 
                </li>
            ))}
        </ul>
    </>)
}
export default ListMoviesDefinitions;