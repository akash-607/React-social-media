import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const axios = require("axios");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: "background.paper",
  boxShadow: 24,
  // p: 2,
};

export default function Addpostmodal({ open, handleClose, posts, setposts }) {
  const [postcaption, setpostcaption] = useState("");
  const [postimgurl, setpostimgurl] = useState("");

  const create_post = () => {
    if (postcaption.length > 0 && postimgurl.length > 0) {
      axios
        .post("http://localhost:3000/addpost", {
          posterid: localStorage.getItem("mernsm_userid"),
          postername: localStorage.getItem("mernsm_username"),
          profile_pic: localStorage.getItem("mernsm_userdp"),
          postimgurl: postimgurl,
          postcaption: postcaption,
        })
        .then(function (response) {
          console.log(response.data);
          // posts.unshift(response.data);
          setposts([response.data, ...posts]);
          handleClose();
        })
        .catch(function (error) {
          alert("cant create");
        });
    } else {
      alert("please enter anything");
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <div className="login-page">
          <div className="form">
            <input
              type="text"
              value={postcaption}
              placeholder="Caption"
              onChange={(e) => setpostcaption(e.target.value)}
            />
            <input
              type="text"
              placeholder="Image url"
              value={postimgurl}
              onChange={(e) => setpostimgurl(e.target.value)}
            />
            {/* {logsign == "signup" && (
          <input type="text" placeholder="email address" />
        )} */}

            <button onClick={create_post}>
              {/* {logsign == "login" ? "Login" : "create user"} */}
              Add Post
            </button>
            <p className="message">
              {/* {logsign == "login" ? "Not registered?" : "Already registered?"}{" "} */}

              <p onClick={handleClose} style={{ color: "grey" }}>
                {/* {logsign == "login" ? "Create Account" : "Login"} */}
                Cancel
              </p>
            </p>
          </div>
        </div>
        {/* </Box> */}
      </Modal>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Caption"
            variant="outlined"
            fullWidth
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Image url"
            variant="outlined"
            style={{ marginTop: ".8rem" }}
            fullWidth
          />
          <div
            className="btndiv fr"
            style={{
              marginTop: "1rem",
              justifyContent: "end",
            }}
          >
            <Button
              onClick={handleClose}
              style={{ margin: "0 .5rem" }}
              color="error"
              variant="text"
            >
              Cancel
            </Button>
            <Button variant="contained">Post</Button>
          </div>
        </Box>
      </Modal> */}
    </div>
  );
}
