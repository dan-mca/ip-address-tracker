import React from "react";
import './Header.scss';
import InfoContainer from "../InfoContainer/InfoContainer";
import SearchBar from "../SearchBar/SearchBar";


const Header = (props) => {
  const { submittedSearch, data } = props;

  return (
    <header className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <SearchBar submittedSearch={submittedSearch}/>
      <InfoContainer data={data}/>
    </header>
  );
};

export default Header;
