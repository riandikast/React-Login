import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAcc } from "../features/Auth";

function FormInput({ ButtonProperties, ButtonText, FormProp }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let account = {
      email,
      password,
    };

    if (email && password) {
      //increament for id so data never has same id and id start consecutive from 0 (not random)

      dispatch(loginAcc(account));
    }
  };

  return (
    <>
      <form className={FormProp} onSubmit={handleSubmit}>
        <div className="text-white mb-4">
          <div>
            <label> Email </label>
          </div>
          <div>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white bg-github-darker-blue  px-1  box-border border-github-light-blue border-4 rounded-md w-52"
              type="text"
            />
          </div>
        </div>

        <div className="text-white ">
          <div>
            <label> Password </label>
          </div>
          <div className="">
            <input
              required
              message
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-white px-1 bg-github-darker-blue absolute box-border border-github-light-blue border-4 rounded-md w-52"
              type={passwordShown ? "text" : "password"}
            ></input>{" "}
            <i
              onClick={togglePassword}
              className={
                passwordShown
                  ? "far fa-eye absolute ml-44 mt-2"
                  : "far fa-eye-slash absolute ml-44 mt-2"
              }
              id="togglePassword"
            ></i>
          </div>
        </div>

        <button type="submit" className={ButtonProperties}>
          {ButtonText}
        </button>
      </form>
    </>
  );
}

export default FormInput;
