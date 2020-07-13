import React,{useState} from "react";

let Search = (props)=>{

    let [state , setState] = useState("")

    let handleChange = (event) =>{
        setState(event.target.value);
        props.setQuery(event.target.value);
    }

    return (
        <form>
            <input type="text" placeholder="Search Characters" value={state} onChange={handleChange}/>
        </form>
    );
}

export default Search;
