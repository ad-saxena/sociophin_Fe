/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./user.css"
const LatestPost = () => {
    const [user, setuser] = useState(null);
    useEffect(() => {
        axios
            .get(
                `/api/getUserId/username=sociophin`
            )
            .then((response) => {
                // console.log(response);
                // console.log(response.data.data.public_metrics.followers_count);
                setuser(response.data.data)
            });
    }, []);


    // created_at: "2021-11-17T06:13:04.000Z"
    // description: "Time for twitter"
    // id: "1460853427903234053"
    // name: "SocioPhin CRM"
    // profile_image_url: "https://pbs.twimg.com/profile_images/1460853475021971457/VsLPlsHh_normal.png"
    // protected: false
    // public_metrics: { followers_count: 0, following_count: 3, tweet_count: 4, listed_count: 0 }
    // url: ""
    // username: "sociophin"


    return (
        <>
            {user &&
                <>
                    <div class="d-grid mr-4">
                        <div class="border round w4-h4 usr-im" style={{ "backgroundImage": `url(${user.profile_image_url})` }}>
                        </div>
                        <div class="d-grid">
                            <p class="card-text">{user.name}</p>
                            <span class="spp">{user.username}</span>
                        </div>
                    </div>
                    <div class="bg-white pddd">
                        <p>Description: {user.description}</p> <br />
                        <p>Follower Count: {user.public_metrics.followers_count}</p>
                        <p>Follow Count: {user.public_metrics.following_count}</p>
                        <p>Tweet Count: {user.public_metrics.tweet_count}</p>
                        <p>Listed Count: {user.public_metrics.listed_count}</p>
                    </div>
                </>
            }
        </>
    );
};

export default LatestPost;
