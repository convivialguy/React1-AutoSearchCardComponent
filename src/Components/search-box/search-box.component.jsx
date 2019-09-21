import React from 'react';

import './search-box.style.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input ClassName="search" 
    type='search' placeholder={placeholder} 
    onChange={handleChange}></input>
);
/*e => { this.setState({ searchField: e.target.value},() => console.log(this.state));} */