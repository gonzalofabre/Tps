import { useState } from "react";
import Header from "../Header/Header";
// import peek from "../utils/peek";
import axios from "axios";
// import { redirect } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header />

      <div className="login">
        <label htmlFor="userName">Nombre de usuario</label>
        <input
          value={userName}
          type="text"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Contraseña </label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={async () => {
            setIsLoading(true);
            const data = {
              userName,
              password,
            };
            try {
              const response = await axios.post("/api/users", data);
              console.log(response.status);
              console.log(response.data.data.userData);
              const {
                id,
                adress,
                tel,
                password,
                userName,
                name,
                lastName,
                rol,
              } = response.data.data.userData;
              console.log(
                id,
                adress,
                tel,
                password,
                userName,
                name,
                lastName,
                rol
              );

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
