import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src="https://placekitten.com/184/84"></img>

        <h1> My E-commerce</h1>
      </div>
      <div className="header_links">
        <Link className="header_links_link" to={"/"}>Home</Link>
        <Link className="header_links_link" to={"/login"}>Login</Link>
        <Link className="header_links_link" to={"/register"}>Register</Link>
      </div>
    </div>
  );
}

export default Header;
