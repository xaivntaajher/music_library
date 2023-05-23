import React, { useState } from 'react';

const SearchBar = (props) => {
    
    const [search, setSearch] = useState('')

    function handleSubmit(event){
        event.preventDefault();
      

        if (!search){
            return;
        }

        let newSearch = {
            search: search,
        }

        props.addNewSearchProperty(newSearch)

        setSearch('')
    }
    
       
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <select type="text"></select>
                    <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}></input>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </div>
        </form>
     );
}
 
export default SearchBar;