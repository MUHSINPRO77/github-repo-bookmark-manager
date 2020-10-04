import React,{ useState } from 'react';
import "./SearchBar1.css";
import axios from 'axios';
import Results1 from "./Results1";
import { Card } from 'react-bootstrap';



const SearchBar1=()=>{
    const[searchInput, setSearchInput]= useState('');
    const [ repos, setRepos ] = useState([]);

    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    };

    const handleClick = async () =>{
        console.log(searchInput);

        try{
            const result = await axios(`https://api.github.com/repos/${searchInput}`)

            setRepos(result);

        }catch(err){
            console.log(err)
        }
        
    };
    return(
        <Card>
        <div className="repos-search">
        <input type="text" placeholder="search username/repos" value={searchInput} onChange={handleChange}></input>
        <button onClick={handleClick}>search </button>
        </div>
        <Results1 repos={repos}/>
        </Card>
    );
}



export default SearchBar1;