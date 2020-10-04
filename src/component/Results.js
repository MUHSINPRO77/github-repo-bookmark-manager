import React, { useEffect, useState } from "react";
import "./Results.css";
import {Card, Button} from "react-bootstrap";
 

const Results=(props)=>{
    const{repos} = props;
    console.log (repos.data);
    
    const [bookmark, setBookmark]= useState([])
    
    const bookmark1 = (payload)=>{
        let oldArray= bookmark
        let newArray=[...oldArray ,payload];
        setBookmark(newArray);
    }

    useEffect(()=>{
        localStorage.setItem('bookmark',JSON.stringify(bookmark))},[]);
        
    const listRepos = repos.length !==0 ? repos.data.slice(0,20).map((item) => <Card key={item.id}>
                <Card.Text>
                    <div className="Button1">
                    <Button onClick={()=> bookmark1(<a href={item.html_url}>{item.name}</a>)}
                     variant="secondary" size="sm">Add</Button>
                    </div>
                    <a href={item.html_url}>{item.name}</a>
                </Card.Text>
                </Card>
        ):(
    <li>Type Username</li>
    );
    const deleteButton =(index)=>{
        let newBookmark = bookmark;
        newBookmark.splice(index,1)
        setBookmark([...newBookmark])
    } 
    const listBookmark = bookmark.map((item)=><Card>
        <div className="buttonStyle">
            <Button onClick={()=>deleteButton()} id="b2" variant="secondary" size="sm">X</Button>
        <a >{item}</a>
        </div>
        </Card> )

       
    return(
        <Card>
            <div className="listdec">
            <h2>results</h2>
            <Card.Body>
                {listRepos}
                </Card.Body>
            </div>
        
            <div className="bookdec">
                <h3>Bookmarks</h3>
                <Card.Body>
                    {listBookmark}
                </Card.Body>
            </div>
        </Card>
        
    );
};
export default Results;
