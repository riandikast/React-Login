import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAcc, checkData } from "../features/Auth";

const idIncreament = () => {
  const data2 = localStorage.getItem("id");
  if (data2) {
    return JSON.parse(data2);
  } else {
    return [];
  }
};


function FormInput2({ ButtonProperties, ButtonText, FormProp }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const [id, setID] = useState(0);
  

  const [saveid, setSaveid] = useState(idIncreament());
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let account = {
      id,
      username,
      email,
      password,
    };

    if (username && email && password) {
      //increament for id so data never has same id and id start consecutive from 0 (not random)
      setID(id + 1);

      dispatch(checkData(account));
      dispatch(addAcc(account));
    }
  };

  //restore id from last saved id once after page refreshed
  useEffect(() => {
    setID(Number(saveid));
  }, []);

  useEffect(() => {
    console.log("ya", id);
    localStorage.setItem("id", JSON.stringify(id));
  }, [id]);

  return (
    <>
      <form className={FormProp} onSubmit={handleSubmit}>
        <div className="text-white mb-4">
          <div>
            <label> Username </label>
          </div>
          <div>
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-white bg-github-darker-blue  px-1  box-border border-github-light-blue border-4 rounded-md w-52"
              type="text"
            />
          </div>
        </div>

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

        <button
          value={id}
          onClick={(e) => setID.Number(e.target.value)}
          type="submit"
          className={ButtonProperties}
        >
          {ButtonText}
        </button>
      </form>
    </>
  );
}

export default FormInput2;
