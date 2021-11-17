/* eslint-disable no-unused-vars */

import React from "react";
// import LatestPost from "../components/Posts/LatestPost";
// import LatestComment from "../components/Posts/LatestComment";
import "../components/Posts/Linkedin/posts.css";
// import LatestMessage from "../components/Posts/LatestMessage";
import { Link, useHistory } from "react-router-dom";

// import axios from "axios";
import LatestPost from "../components/Posts/Linkedin/LatestPost";
import LatestComment from "../components/Posts/Linkedin/LatestComment";
import "../components/Posts/Linkedin/posts.css";
import LatestMessage from "../components/Posts/Linkedin/LatestMessage";

import { useEffect, useState } from "react";
import LiLogin from "../components/Login/Linkedin";
// import { Link, useHistory, useParams } from "react-router-dom";

function Post() {
    const accesstoken = "AQUpX_8-Qf6yvoz15ix1T4BPhm6taZASzWdxx8HFEe1t61ke7kyXUBvgPTGpgK8Fue8yLasL6nc8d31dG5mTtPW5HISPrtfY5uUSDyr10-OKuyYtB0v9_3A8eCaQ9fmmKczS9eFOLELjSm7ZcmQXQbNgHGtn0XJpDNjm6hvEVL5GW_Oz3VEtRWxXtB1doMPLzSNrlWvWBll-AAq0Erw2tvDOo7sRIUWisJMydaXWlTq3tvgMaKT7-s0_C9e9i5X_MC602rDHPPnP_SXBfdSU5926wWQJcupNzlWrbLyflXpxPJKmq-rm8qdTY7uJwz6VlxZgbTK4THmzvt696Lvz1c_bOnW_mw"
    localStorage.setItem("linkedinaccesstoken", accesstoken);
    
    const [comments, setcomments] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [textInput, setTextInput] = React.useState("");

    const [isLoggedin, setisLoggedin] = useState(false);

    const [selectpostcomments, setSelectpostcomments] = useState(null);
    const [selectpostid, setSelectpostid] = useState(null);
    return (
        <>
            {!accesstoken ?
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <LiLogin />
                </div>
                : <div className=" px-5 pt-3 h-100">
                    <div className="row">
                        <div className="d-flex justify-content-between px-0">
                            <div className="btn-group">
                                <button className="btn btn-light btn-sm" type="button">
                                    Post Status
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <option className="dropdown-item">All</option>
                                    <option className="dropdown-item">Filter</option>
                                    <option className="dropdown-item">Filter</option>
                                </ul>
                            </div>
                            <div className="">
                                <Link
                                    to="/newpost"
                                    className="text-decoration-none text-center mx-3"
                                >
                                    <div className="btn-group">
                                        <button
                                            className="btn btn-warning btn-sm text-light"
                                            type="button"
                                        >
                                            Create New Post
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split text-light"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <option className="dropdown-item">Upload</option>
                                            <option className="dropdown-item">Upload IGTV Video</option>
                                        </ul>
                                    </div>
                                </Link>
                                <button className="btn btn-light btn-sm">See All</button>
                            </div>
                        </div>
                        <div className=" col-lg-12 border p-3 bg-light my-2 mx-auto rounded shadow-sm post">
                            <LatestPost
                                setisLoggedin={setisLoggedin}
                                selectedpostcomments={selectpostcomments}
                                setselectedpostcomments={setSelectpostcomments}
                                setselectedpostid={setSelectpostid}
                                selectedpostid={selectpostid}
                            />
                        </div>
                        <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
                            <div className="col-lg-5 border bg-light my-2 rounded shadow-sm message">
                                <LatestMessage />
                            </div>
                            <div className="col-lg-6 border p-3 bg-light  my-2 rounded shadow-sm comment_box">
                                <LatestComment
                                    comments={selectpostcomments}
                                    selectpostid={selectpostid}
                                />
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )
}

export default Post;
