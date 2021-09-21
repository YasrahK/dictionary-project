import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
let [keyword, setKeyword] = useState("");
    function handleChange(event){
       setKeyword(event.target.value);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    return (
        <div className="Dictionary">
        <form className="word-search" onSubmit={search}>
            <input type="search" placeholder="type a word..." onChange={handleChange} />

        </form>
        </div>
    );
}