import React, {useState, useEffect} from "react";
import axios from "axios";
import "../style/app.css";
import Header from "./header";
import CharacterGrid from "./CharacterGrid";
import Search from "./Search";


function App (){
    let [state , setState] = useState([]);
    let [query , setQuery] = useState("");

    useEffect(()=>{
        let getData = async ()=>{
            let result = await axios("https://www.breakingbadapi.com/api/characters?name="+query);
            console.log(result.data);
            setState(result.data);
        }
        getData();
    },[query]);

    return (
        <div className="container">
            <Header />
            <Search setQuery={(q)=>setQuery(q)}/>     
            <CharacterGrid state={state}/>       
        </div>
        
    );
}

export default App;