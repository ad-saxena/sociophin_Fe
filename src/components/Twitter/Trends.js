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
                `/api/getTrends`
            )
            .then((response) => {
                // console.log(response.data[0].trends);
                setuser(response.data[0].trends)
            });
    }, []);



    return (
        <>
            {user &&
                <Table hover className="posttable">
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Tweet</th>
                            <th>Tweet Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((data, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{data.name}</td>
                                <td><a href={data.url} className="text-decoration-none">View Tweet</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </>
    );
};

export default LatestPost;
