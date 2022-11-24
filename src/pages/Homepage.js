import React, { useState, useEffect } from "react";
import Appbar from "../components/Appbar";
import Postcard from "../components/Postcard";
const axios = require("axios");

function Homepage({ logstate }) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/home/allposts`)
      .then(function (response) {
        console.log(response.data);
        setposts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Appbar posts={posts} setposts={setposts} logstate={logstate} />
      {posts.map((e) => (
        <Postcard
          key={e._id}
          date={e.postedbyat}
          user={e.postedbyname}
          caption={e.postcaption}
          image1={e.picture_post}
          profile_pic={e.posterprofileimg}
        />
      ))}
    </>
  );
}

export default Homepage;
