import { useState } from "react";
function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="card">
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
            const response = await fetch("ACA LA URL XD", {
              method: "POST",
              headers: { "Content-Type": "aplication/json" },
              body: JSON.stringify(data),
            });
          } catch (error) {
            console.error(error);
          }
          setIsLoading(false);
        }}
      >
        Login!
      </button>
    </div>
  );
}

export default Login;