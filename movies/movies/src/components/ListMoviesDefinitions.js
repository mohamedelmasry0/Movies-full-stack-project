import React from 'react';
import {  useState, useEffect } from 'react'
// import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from '../axios';
// import axios from 'axios'


// const ListMoviesDefinitions = () => {
//     const [MoviesDefinitions, setMoviesDefinitions] = useState([])
//     axios.get('localhost:5000/api/def').then((res) =>console.log(res))
    
//     // let history = useHistory();

//     // useEffect(() => {
//     //     fetch(`${process.env.REACT_APP_API_URL}/localhost:5000/api/def`)
//     //     .then(response => response.json())
//     //     .then(json => {
//     //         setMoviesDefinitions(json)
//     //     })
//     // }, [])

//     return (<>
//         <h1>List MoviesDefinitions</h1>
//         <ul>
//             {MoviesDefinitions.map((MoviesDefinitions) => (
//                 <li key={MoviesDefinitions._id}>
//                     <Link to={`/def/${MoviesDefinitions._id}/edit`}>{MoviesDefinitions.title}: {MoviesDefinitions.releaseDate}&euro;</Link>&nbsp;
                   
//                 </li>
//             ))}
//         </ul>
//     </>)
// }
// export default ListMoviesDefinitions;
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
        <h1>List MoviesDefinitions</h1>
        <ul>
            {movieDef.map((MoviesDefinitions) => (
                <li key={MoviesDefinitions._id}>
                    <Link to={`/def/${MoviesDefinitions._id}/edit`}>{MoviesDefinitions.title}: {MoviesDefinitions.releaseDate}&euro;</Link>&nbsp;
                   
                </li>
            ))}
        </ul>
    </>)
}
export default ListMoviesDefinitions;