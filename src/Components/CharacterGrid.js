import React from "react";
import CharacterCard from "./CharacterCard";

let CharacterGrid = (props) =>{
    return (
        <section className="characterGrid">
            {props.state.map((el)=>(<CharacterCard key={el.char_id} item={el} />))}
        </section>
    );
}

export default CharacterGrid;