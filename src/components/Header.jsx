import React from "react";
import InfoContainer from "./InfoContainer";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">IP Address Tracker</h1>

      <form action="#" className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Search for any IP address or domain"
          aria-label="input field"
        />
        <button className="form__button" aria-label="submit">
          Search
        </button>
      </form>

      <InfoContainer />
    </header>
  );
};

export default Header;
