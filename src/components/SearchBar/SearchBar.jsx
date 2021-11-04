import React, { useState } from "react";
import './SearchBar.scss';

const SearchBar = (props) => {
  const { submittedSearch } = props;
  const [searchedIp, setSearchedIp] = useState('');

  const handleChange = (e) => {
    setSearchedIp(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submittedSearch(searchedIp);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Search for any IP address or domain"
        aria-label="input field"
        onChange={handleChange}
      />
      <button className="form__button" aria-label="submit" >></button>
    </form>
  );
};

export default SearchBar;
