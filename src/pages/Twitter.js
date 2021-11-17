/* eslint-disable no-unused-vars */

import React from "react";
import "../components/Posts/Linkedin/posts.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../components/Posts/Linkedin/posts.css";
import { useEffect, useState } from "react";
import TwitterLogin from "../components/Login/Twitter";
import User from "../components/Twitter/User";
import Timeline from "../components/Twitter/Timeline";
import Mention from "../components/Twitter/Mention";
import Trends from "../components/Twitter/Trends";



function Post() {
    return (
        <>
            <div className="h-100 d-flex flex-column justify-content-center align-content-center">

                <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
                    <div className="h22 col-lg-6 border bg-light my-2 rounded shadow-sm message">
                        <Timeline />
                    </div>
                    <div className="h22 col-lg-6 border overflow-hidden p-3 bg-light  my-2 rounded shadow-sm comment_box">
                        <User />
                    </div>
                </div>
                <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
                    <div className="h21 col-lg-6 border bg-light my-2 rounded shadow-sm message">
                        <Trends />
                    </div>
                    <div className="h21 col-lg-6 border p-3 bg-light  my-2 rounded shadow-sm comment_box">
                        <Mention />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;
