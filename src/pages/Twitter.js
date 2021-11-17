/* eslint-disable no-unused-vars */

import React from "react";
// import LatestPost from "../components/Posts/LatestPost";
// import LatestComment from "../components/Posts/LatestComment";
import "../components/Posts/Linkedin/posts.css";
// import LatestMessage from "../components/Posts/LatestMessage";
import { Link, useHistory } from "react-router-dom";

// import axios from "axios";
// import LatestPost from "../components/Posts/Linkedin/LatestPost";
// import LatestComment from "../components/Posts/Linkedin/LatestComment";
import "../components/Posts/Linkedin/posts.css";
// import LatestMessage from "../components/Posts/Linkedin/LatestMessage";
// import { useEffect, useState } from "react";
import TwitterLogin from "../components/Login/Twitter";

function Post() {
    return (
        <>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <TwitterLogin />
            </div>
        </>
    )
}

export default Post;
