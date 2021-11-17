/* eslint-disable no-unused-vars */

import React from "react";
// import LatestPost from "../components/Posts/LatestPost";
// import LatestComment from "../components/Posts/LatestComment";
import "../components/Posts/Linkedin/posts.css";
// import LatestMessage from "../components/Posts/LatestMessage";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
// import LatestPost from "../components/Posts/Linkedin/LatestPost";
// import LatestComment from "../components/Posts/Linkedin/LatestComment";
import "../components/Posts/Linkedin/posts.css";
// import LatestMessage from "../components/Posts/Linkedin/LatestMessage";
import { useEffect, useState } from "react";
import TwitterLogin from "../components/Login/Twitter";



function Post() {

    const [trend, settrend] = useState([])

    useEffect(() => {
        const url = "https://api.twitter.com/2/tweets/sample/stream"
        const token = "AAAAAAAAAAAAAAAAAAAAAKqGVwEAAAAAyfwBxV1rR0aABCViZpnITVQbFas%3DGO1PKudsla6m2JLCyGWZ2QYtCrHiLC6BfQAfbqDpMIdVrmsWEQ"
        axios.get(
            url,
            { withCredentials: false },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    Authorization: `Bearer ${token}`,
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Access-Control-Allow-Credentials': true,
                    "crossorigin": true
                }
            }
        )
            .then((response) => {
                console.log(response.data);
            }
            ).catch((error) => {
                console.log(error)
            })
        // axios.get("http://localhost:3003/api/v1/trends").then(res => { console.log(res) }).catch(err => { console.log(err) })
    }, [])


    return (
        <>
            <div className="h-100 d-flex mt-10 flex-column justify-content-center align-content-center">

                <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
                    <div className="col-lg-6 border bg-light my-2 rounded shadow-sm message">

                    </div>
                    <div className="col-lg-6 border p-3 bg-light  my-2 rounded shadow-sm comment_box">

                    </div>
                </div>
                <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
                    <div className="col-lg-6 border bg-light my-2 rounded shadow-sm message">

                    </div>
                    <div className="col-lg-6 border p-3 bg-light  my-2 rounded shadow-sm comment_box">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;
