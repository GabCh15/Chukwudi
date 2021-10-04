import "./Navbar.css";
import list from "./assets/icons/list.svg";
import search from "./assets/icons/search.svg";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icon-container">
        <img src={list} className="navbar__icon" alt="" />
      </div>
      <div className="navbar__title-container">
        <h1>Chukwudi</h1>
      </div>
      <div className="navbar__searcher-container">
        <div className="navbar__searcher">
        <img src={search} alt="" className="navbar__searcher-icon"/>
        <input className="navbar__searcher-input" placeholder="Search"/>
        </div>
      </div>
    </div>
  );
};
