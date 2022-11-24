import { useState } from "react";
import Homepage from "./pages/Homepage";
import Login_signup from "./pages/Login_signup";

function App() {
  const [logged, setlogged] = useState(true);
  return (
    <>
      {localStorage.getItem("mernsm_userid") != null &&
      localStorage.getItem("mernsm_username") != null &&
      localStorage.getItem("mernsm_userdp") != null &&
      logged ? (
        <Homepage logstate={setlogged} />
      ) : (
        <Login_signup logstate={setlogged} />
      )}
    </>
  );
}

export default App;
