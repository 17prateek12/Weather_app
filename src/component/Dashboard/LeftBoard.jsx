import React from 'react'
import CardTemp from '../Card/CardTemp'
import SearchBar from '../searchbar/SearchBar'
import "./LeftBoard.css";

const LeftBoard = ({ setValue }) => {
  const handleLocationChange = async (newName) => {
    try {

      setValue(newName);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='dash'>
      <SearchBar onLocationChange={handleLocationChange} />
      <CardTemp />
    </div>
  )
}

export default LeftBoard;