/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { access_token, pageid, uid } from "../../GlobalState";

// import linkedin from "../assets/linkedin.png";
import { Link,useHistory } from "react-router-dom";
// import "./posts.css";

const LatestMessage = () => {
  const history=useHistory()
  // const [item, setItem] = useState("");
  // const [data,setData] = useState("")
  const [posts, setPosts] = useState([]);
  const accessid = localStorage.getItem("fbaccesstoken");
  const userid = localStorage.getItem("fbuserid");
  const page_id = localStorage.getItem("fbpageid");
  // console.log(posts);
  // console.log(accessid);
  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/conversations?fields=name,id,senders&access_token=${accessid}`
      )
      .then((response) => {
        // console.log(response.data.data);
        setPosts(response.data.data);
      });
  }, [userid, accessid]);

  return (
    <div className="d-flex flex-column relative p-3">
      <button className="btn btn-sm btn-warning text-light rounded w-25" onClick={()=>history.goBack()}>
        Back
      </button>
      <div className="sticky-top top-0 bg-light m-0 pt-2">
        <h5 className="">Direct Messages</h5>
      </div>
      {posts.length ? (
        posts.map((post) => (
          <Link to={`/chat/${post.id}`} className="chat" key={post.id}>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="border-bottom py-2 my-2 w-100">
                <h3 className="text-black sender_name">
                  {post.senders.data[0].name}
                </h3>
                {/* <img
                  src={linkedin}
                  alt="pic"
                  style={{ height: "3em" }}
                  className="rounded-circle"
                /> */}
                {/* <div className="mx-2 pt-1"> */}
                {/* <h4 className="text-secondary latest_msg">
                    Latest Message asjdkjj
                  </h4> */}
                {/* </div> */}
              </div>
              {/* <div
                className="bg-warning rounded-circle d-flex justify-content-center"
                style={{ width: "1.5em", height: "1.5em" }}
              >
                <span className="text-white fs-6">4</span>
              </div> */}
            </div>
            {/* <hr className=""></hr> */}
          </Link>
        ))
      ) : userid ? (
        <div>
          {/* {console.log(userid)} */}
          No messages found
        </div>
      ) : (
        <div>Please Login to view messages</div>
      )}
    </div>
  );
};

export default LatestMessage;
