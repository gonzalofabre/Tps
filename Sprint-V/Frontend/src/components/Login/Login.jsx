import { useState } from "react";
import Header from "../Header/Header";
// import peek from "../utils/peek";
import axios from "axios";
// import { redirect } from "react-router-dom";
import sleep from "../../utils/sleep";
import { Button } from "antd";

import {  CloseOutlined} from "@ant-design/icons"

import {useLoginStore } from '../../stores/useLoginStore'
import { useLogStore } from '../../stores/useLogStore';
import Cookies from 'universal-cookie';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoginShow } = useLoginStore();
  const { setIsLoggedIn } = useLogStore();
  return (
    <>
      <div className="login">
        <button className="close_button" onClick={() => setIsLoginShow(false)}><CloseOutlined  /> </button>
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
        <Button type="primary" loading={isLoading ? true : false}
          onClick={async () => {
            setIsLoading(true);
            const data = {
              userName,
              password,
            };
            try {
              const response = await axios.post("/api/users/login", data);
              console.log(response.status);
              console.log(response.data.data.userData);
              const {
                id,
                adress,
                tel,
                userName,
                name,
                lastName,
                rol,
              } = response.data.data.userData;
              await sleep(3000);
              const cookies = new Cookies();
              const oneHour = 60*60;
              cookies.set('id', id, [{path: "/"},{ maxAge: oneHour}]);
              cookies.set('adress', adress, [{path: "/"},{ maxAge: oneHour}]);
              cookies.set('tel', tel, [{path: "/"},{ maxAge: oneHour}]);
              cookies.set('userName', userName , [{path: "/"},{ maxAge: oneHour}]);
              cookies.set('name', name, [{path: "/"},{ maxAge: oneHour}]);
              cookies.set('lastName', lastName, [{path: "/"},{ maxAge: oneHour}]);
              cookies.set('rol', rol, [{path: "/"},{ maxAge: oneHour}]);

            } catch (error) {
              console.error(error.response.status);
            }
            setIsLoggedIn(true);
            setIsLoading(false);
          }}
        >
          Login!
        </Button>
      </div>
    </>
  );
}

export default Login;
