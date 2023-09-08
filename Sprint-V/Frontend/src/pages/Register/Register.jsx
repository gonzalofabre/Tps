import "./styles.css";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useState } from "react";

function Register() {
    const [name, setName ] = useState("");

    const [lastName, setLastName ] = useState("");

    const [userName, setUserName ] = useState("");

    const [adress, setAdress ] = useState("");

    const [tel, setTel ] = useState("");

    const [password, setPassword ] = useState("");

    const [isMatchPassword, setIsMatchPassword] = useState("");

    function buttonSubmit (e) {
        e.preventDefault();
        console.log(name, lastName, userName, adress, tel, password);
    }
  return (
    <>
      <Header />
      <div className="testbox">
        <form className="form" action="">
          <div className="banner">
            <h1 className="h1">Register</h1>
          </div>
          <br />
          <fieldset>
            <legend> User Information </legend>
            <div className="item">
              <label htmlFor="name">
                Name<span className="item_span">*</span>
              </label>
              <input value= {name} className="input" id="name" type="text" name="fname" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="item">
              <label htmlFor="lastName">
                Last Name <span className="item_span">*</span>
              </label>
              <input value={lastName} className="input" id="lastName" type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="item">
              <label htmlFor="userName">
                User Name <span className="item_span">*</span>
              </label>
              <input value={userName} className="input" id="userName" type="text" name="userName" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="item">
              <label htmlFor="password">
                password <span className="item_span">*</span>
              </label>
              <input value={password} className="input" id="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="item">
              <label htmlFor="password-confirm">
                Confirm your Password <span className="item_span">*</span>    <span className={isMatchPassword === 'Ok' ? 'item_span_green' : 'item_span'}>{isMatchPassword}</span>
              </label>
              <input className="input" id="password-confirm" type="password" name="password-confirm" onChange={(e) => e.target.value === password ? setIsMatchPassword('Ok') : setIsMatchPassword('Password does not match')}/>
            </div>

            <div className="item">
              <label htmlFor="adress">
                Adress <span className="item_span">*</span>
              </label>
              <input value={adress} className="input" id="adress" type="text" name="adress" onChange={(e) => setAdress(e.target.value)} />
            </div>
            <div className="item">
              <label htmlFor="tel">
                Telephone Number <span className="item_span">*</span>
              </label>
              <input value={tel} className="input" id="tel" type="number" name="tel" onChange={(e) => setTel(e.target.value)} />
            </div>
            <div className="btn-block">
              <button className="button" type='submit' onClick={buttonSubmit}>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Register;
