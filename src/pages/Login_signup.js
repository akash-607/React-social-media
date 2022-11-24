import React, { useState } from "react";
const axios = require("axios");

function Login_signup({ logstate }) {
  const [logsign, setlogsign] = useState("login");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [profile_pic, setprofile_pic] = useState("");

  const submit = () => {
    if (logsign == "login") {
      console.log(username);
      console.log(password);
      axios
        .post("http://localhost:3000/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          localStorage.setItem("mernsm_userid", response.data.id);
          localStorage.setItem("mernsm_username", response.data.userName);
          localStorage.setItem("mernsm_userdp", response.data.profile_pic);
          logstate(true);
          console.log(response.data);
        })
        .catch(function (error) {
          alert("Username and password mismatch");
        });
    } else {
      axios
        .post("http://localhost:3000/adduser", {
          username: username,
          password: password,
          profile_pic: profile_pic,
        })
        .then(function (response) {
          localStorage.setItem("mernsm_userid", response.data._id);
          localStorage.setItem("mernsm_username", response.data.userName);
          localStorage.setItem("mernsm_userdp", response.data.profile_pic);
          logstate(true);
        })
        .catch(function (error) {
          alert("username exists already!!");
        });
    }
  };
  return (
    <div className="login-page">
      <div className="form">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {logsign == "signup" && (
          <input type="text" placeholder="email address" />
        )}
        {logsign == "signup" && (
          <input
            type="text"
            placeholder="profile pic url"
            value={profile_pic}
            onChange={(e) => setprofile_pic(e.target.value)}
          />
        )}

        <button onClick={submit}>
          {logsign == "login" ? "Login" : "create user"}
        </button>
        <p className="message">
          {logsign == "login" ? "Not registered?" : "Already registered?"}{" "}
          <p
            onClick={() => {
              if (logsign == "login") {
                setlogsign("signup");
              } else {
                setlogsign("login");
              }
            }}
          >
            {logsign == "login" ? "Create Account" : "Login"}
          </p>
        </p>
      </div>
    </div>
  );
}

export default Login_signup;
