import React, {useState} from "react";
import { Card } from "react-bootstrap";
import "./Results.css";
import {Button} from "react-bootstrap"

const Results=(props)=>{
    const{repos} = props;
    console.log (repos.data);

    const [bookmark, setBookmark]= useState([]);
    
    const bookmark1 = (payload)=>{
        let oldArray= bookmark
        let newArray=[...oldArray ,payload];
        setBookmark(newArray);
    }
    
    const listRepos = repos.length !==0 ? Object.keys(repos).slice(0,1).map((item) => 
    <Card className= "listdec">
        <Card.Text>
            <div className="Button1">
                <Button onClick={()=> bookmark1(<a href={repos[item].html_url}>{repos[item].name}</a>)} variant="secondary" size="sm">Add</Button>
                </div>
                <a href={repos[item].html_url}>
                    {repos[item].name}
                </a>
        </Card.Text>
    </Card>
    ):(
    <li>Type Username/Repos</li>
    );

    const deleteButton =(index)=>{
        let newBookmark = bookmark;
        newBookmark.splice(index,1)
        setBookmark([...newBookmark])
    }
    const listBookmark = bookmark.map((item)=>
        <Card>
            <div className="buttonStyle">
                <Button onClick={()=>deleteButton()} id="b2" variant="secondary" size="sm">X</Button>
            <a >{item}</a>
            </div>
        </Card> )

    return(
        <Card>
        <div className="listdec">
            <h2>results</h2>
            <Card.Body>{listRepos}</Card.Body>
        </div>
        <div className="bookdec">
                <h3>Bookmarks</h3>
                <Card.Body>{listBookmark}</Card.Body>
            </div>
        </Card>
    );
};
export default Results;
