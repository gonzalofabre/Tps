import { useState } from "react";
import Header from "../Header/Header";
// import peek from "../utils/peek";
import axios from "axios";
// import { redirect } from "react-router-dom";
import sleep from "../../utils/sleep";
import { Button } from "antd";

import { CloseOutlined } from "@ant-design/icons";

import { useLoginStore } from "../../stores/useLoginStore";
import { useLogStore } from "../../stores/useLogStore";
import Cookies from "universal-cookie";
import {createCookies} from "../../functions/cookieHandler";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isUserNotFound, setIsUserNotFound] = useState(false);
  const { toggleLoginShow } = useLoginStore();
  const { toggleIsLoggedIn } = useLogStore();
  return (
    <>
      <div className="login">
        <button className="close_button" onClick={() => toggleLoginShow() }>
          <CloseOutlined />{" "}
        </button>
        <label htmlFor="userName">Username <span className="span">{isUserNotFound? '*User not Found' : ""}</span></label>
        <input
          value={userName}
          type="text"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password <span className="span">{isInvalidPassword ? '*Invalid Password' : ""}</span> </label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="primary"
          loading={isLoading ? true : false}
          onClick={async () => {
            setIsLoading(true);
            const data = {
              userName,
              password,
            };
            try {
              const response = await axios.post("/api/users/login", data);
              console.log(response.status);
              if (response.status === 200) {
                const { id, adress, tel, userName, name, lastName, rol } =
                  response.data.data.userData;
                await sleep(3000);
                setIsInvalidPassword(false);
                setIsUserNotFound(false);
                createCookies(id, adress, tel, userName, name, lastName, rol);
                 toggleLoginShow();
                 toggleIsLoggedIn();
                
              }
            } catch (error) {
              if(error.response.status === 401) {
                setIsInvalidPassword(true);
                setIsUserNotFound(false)
              } else if (error.response.status === 404) {
                setIsUserNotFound(true);
                setIsInvalidPassword(false);
        
              } else {
                console.error(error.response.status)
              }
            }
            
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
