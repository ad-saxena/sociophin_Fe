/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const LatestPost = () => {
    const [user, setuser] = useState(null);

    useEffect(() => {

    }, []);


    useEffect(() => {
        axios
            .get(
                `/api/getUserMentionTimeline/userId=1460853427903234053`
            )
            .then((response) => {
                // console.log(response);
                setuser(response.data._realData.data)
            });
    }, []);



    return (<>
        {user &&
            <Table hover className="posttable">
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>ID</th>
                        <th>Tweet</th>

                    </tr>
                </thead>
                <tbody>
                    {user.map((data, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{data.id}</td>
                            <td>{data.text}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        }
    </>
    );
};

export default LatestPost;
