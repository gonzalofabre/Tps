import "./styles.css";
import Header from "../../components/Header/Header";

function Register() {
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
              <label htmlFor="fname">
                Name<span>*</span>
              </label>
              <input className="input" id="name" type="text" name="fname" />
            </div>
            <div className="item">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>
              <input className="input" id="name" type="text" name="lastName" />
            </div>
            <div className="item">
              <label htmlFor="userName">
                User Name <span>*</span>
              </label>
              <input className="input" id="name" type="text" name="userName" />
            </div>
            <div className="item">
              <label htmlFor="password">
                password <span>*</span>
              </label>
              <input className="input" id="name" type="text" name="password" />
            </div>
            <div className="item">
              <label htmlFor="password-confirm">
                Confirm your Password <span>*</span>
              </label>
              <input className="input" id="name" type="text" name="password-confirm" />
            </div>

            <div className="item">
              <label htmlFor="adress">
                Adress <span>*</span>
              </label>
              <input className="input" id="name" type="text" name="adress" />
            </div>
            <div className="item">
              <label htmlFor="tel">
                Telephone Number <span>*</span>
              </label>
              <input className="input" id="name" type="number" name="tel" />
            </div>
            <div className="btn-block">
              <button className="button" type="submit" href="/">
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
