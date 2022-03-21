import React from "react";
import SearchMovie  from "./searchMovie.js";
import '../cssFolder/StyleSheet.css'

function App() {
    return(
        <div className = 'container'>
            <h1  className = 'title'> Movie Search</h1>
            <SearchMovie/>
        </div>
    )
}

export default App;
