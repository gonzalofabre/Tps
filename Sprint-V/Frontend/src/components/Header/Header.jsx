import { Link } from "react-router-dom";
import { useLoginStore } from "../../stores/useLoginStore";
import { useLogStore } from "../../stores/useLogStore";

function Header() {
  const { toggleLoginShow } = useLoginStore();
  const isLoggedIn = useLogStore((state) => state.isLoggedIn);
  const { toggleIsLoggedIn } = useLogStore();

  return (
    <div className="header">
      <div className="header_logo">
        <img src="https://placekitten.com/184/84"></img>

        <h1> My E-commerce</h1>
      </div>
      <div className="header_links">
        <Link className="header_links_link" to={"/"}>
          Home
        </Link>
        {isLoggedIn ? (
          <Link
            className="header_links_link"
            to={"/"}
            onClick={() => toggleIsLoggedIn()}
          >
            Logout
          </Link>
        ) : (
          <Link
            className="header_links_link"
            to={"/"}
            onClick={() => toggleLoginShow()}
          >
            Login
          </Link>
        )}
        <Link className="header_links_link" to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Header;
