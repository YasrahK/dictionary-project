import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
let [keyword, setKeyword] = useState("");
    function handleChange(event){
       setKeyword(event.target.value);
    }

    function search(event){
        event.preventDefault();
        

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    return (
        <div className="Dictionary">
        <form className="word-search" onSubmit={search}>
            <input type="search" placeholder="type a word..." onChange={handleChange} />

        </form>
        </div>
    );
}