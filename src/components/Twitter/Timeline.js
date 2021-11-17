/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const LatestPost = () => {
    const [user, setuser] = useState([]);

    useEffect(() => {

    }, []);


    useEffect(() => {
        axios
            .get(
                `/api/getUserId/username=sociophin`
            )
            .then((response) => {
                console.log(response);
                setuser(response.data.data)
            });
    }, []);



    return (
        <Table hover className="posttable">
            <thead>
                <tr>
                    <th>SNo</th>
                    <th>Post</th>
                    <th>Post Status</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Likes</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {/* {user.map((data, index) => (
                    <tr>
                        <td></td>
                    </tr>
                ))} */}
            </tbody>
        </Table>
    );
};

export default LatestPost;
