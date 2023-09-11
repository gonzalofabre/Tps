import { useAdminStore } from "../../stores/useAdminStore";
import Admin from "./Admin";
import { getUser } from "../../functions/cookieHandler";

function IsNotAdmin() {
    const userCookies = getUser()
  return userCookies.rol === 'admin' ? <Admin /> : 
  <div>
  <div className="header">
    <div className="header_logo">
      <img src="https://placekitten.com/184/84"></img>

      <h1> My E-commerce</h1>
    </div>
  </div>
  <h1 style={{fontSize: "100px", color: "red"}}> UnAuthorized :C</h1>;
  </div>
}

export default IsNotAdmin
