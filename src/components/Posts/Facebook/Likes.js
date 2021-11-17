/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./posts.css";

const LatestPost = ({
    id
    , other
}) => {
    const [like, setlike] = useState(0)
    const likes = (id) => {
        const thisnow = other.filter((other) => {
            if (other.id === id) {
                console.log(other.likes.data.length)
                return other.likes.data.length
            }
        })
        console.log(thisnow[0])
        return thisnow
    };

    useEffect(() => {
        const mylikes = likes(id)
        console.log(mylikes)
        setlike(mylikes)
    }, [id])

    return (
        <td>0</td>
    );
};

export default LatestPost;
