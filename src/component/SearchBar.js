import React, { useState } from 'react';
import "./SearchBar.css";
import axios from 'axios';
import Results from "./Results";
import { Card } from 'react-bootstrap';



const SearchBar=()=>{

    const[searchInput, setSearchInput]= useState('');
    const [ repos, setRepos ] = useState([]);

    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    };

    const handleClick = async () =>{
        console.log(searchInput);

        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`)

            setRepos(result);

        }catch(err){
            console.log(err)
        }
        
    };

    return(
        <Card>
        <div className="user-search">
            <input type="text" placeholder="search username" value={searchInput} onChange={handleChange}/>
            <button onClick={handleClick}>search </button>
        </div>
        <Results repos={repos}/>
        </Card>
    )
};



export default SearchBar;
