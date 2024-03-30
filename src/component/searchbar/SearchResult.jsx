import React from 'react';
import './SearchBar.css'

const SearchResult = ({ results, setValue }) => {
    if (!results || results.length === 0) {
        return null;
    }

    return (
        <ul className='searchres'>
            {results.map((item) => (
                <li
                    onClick={() => setValue(item.name)}
                >
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default SearchResult;
