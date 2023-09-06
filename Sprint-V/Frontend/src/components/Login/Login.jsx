import { useState } from "react";
import Header from "../Header/Header";
// import peek from "../utils/peek";
import axios from 'axios';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Header/>

    <div className="login">
        <label htmlFor="userName">Nombre de usuario</label>
      <input value={userName} type="text" id="userName" onChange={(e) => setUserName(e.target.value)} />
      <label htmlFor="password">Contraseña </label>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={async () => {
          setIsLoading(true);
          const data = {
            userName, 
            password
          };
          try {
            const response = await axios.post("/api/users", data)
            console.log(response.status)
          } catch (error) {
            console.error(error.response.status);
          }
          setIsLoading(false);
        }}
      >
        Login!
      </button>
    </div>
    </>
  );
}

export default Login;