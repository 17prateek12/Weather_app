import React, { useState } from 'react';
import { getlocation } from '../../DataFolder/ApiCall';
import SearchResult from './SearchResult';
import './SearchBar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const SearchBar = ({ onLocationChange }) => {
    const [value, setValue] = useState("");
    const [bestMatch, setBestMatch] = useState([]);

    const clear = () => {
        setValue("");
        setBestMatch([]);
    }
    const closeoption = (searchValue) => {
        setValue(searchValue);
        setBestMatch([]);
    }
    const updateBestMatch = async (searchValue) => {
        try {
            if (searchValue) {
                const searchResult = await getlocation(searchValue);
                setBestMatch(searchResult);
                console.log(searchResult);
            } else {
                setBestMatch([]);
            }
        } catch (error) {
            console.log(error);
            setBestMatch([]);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && bestMatch.length > 0) {
            const { name } = bestMatch[0];
            onLocationChange(name);
            setValue(name);
            closeoption();
        }
    };

    return (

        <div className='mainbox'>
            <div className='bar'>
                <input
                    type="text"
                    placeholder='Enter city name'
                    value={value}
                    onChange={(event) => {
                        const searchValue = event.target.value;
                        setValue(searchValue);
                        updateBestMatch(searchValue);
                    }}
                    onKeyDown={handleKeyPress}
                    className='searchbox'
                />
                <div className='clear'>
                    <CancelOutlinedIcon onClick={clear} />
                </div>
                <div className='searchicon'>
                    <SearchOutlinedIcon onClick={() => {
                        if (bestMatch.length > 0) {
                            const { name } = bestMatch[0];
                            onLocationChange(name);
                            setValue(name);
                            closeoption();
                        }
                    }} />
                </div>
            </div>
            {value && bestMatch.length > 0 && (
                <SearchResult results={bestMatch} setValue={setValue} />
            )}
        </div>
    );
};

export default SearchBar;