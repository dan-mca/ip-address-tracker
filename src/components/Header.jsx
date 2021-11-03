import React from "react";
import InfoContainer from "./InfoContainer";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const { submittedSearch } = props;

  return (
    <header className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <SearchBar submittedSearch={submittedSearch}/>
      <InfoContainer />
    </header>
  );
};

export default Header;
