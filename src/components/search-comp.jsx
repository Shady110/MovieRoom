import React, { useState} from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

function Search_comp() {
    const [search, set_search] = useState();
    
    const navigate=useNavigate();

    const handle_search=(event)=>{
        event.preventDefault();
        navigate(`/search/${search}`)
    }
    return ( 
  <></>
     );
}

export default Search_comp;