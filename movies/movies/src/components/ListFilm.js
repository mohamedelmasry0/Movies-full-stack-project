import React from 'react';
import {  useState, useEffect } from 'react'
import axios from '../axios';
import './ListFilm.css'
function ListFilm(){
    const [film, setFilm]= useState([]); 
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('api/film')
            setFilm(req.data);
        }
        fetchData();
    } , [] )
        return (<>
        <h1>List films</h1>
        <ul className="data">
            {film.map((filmMap)  => (
                <li key={filmMap._id}>
                   
                   <div className="title">{filmMap.name }</div> 
                   <img src={filmMap.link}/>
                </li>
            ))}
        </ul>
    </>)
}
export default ListFilm;