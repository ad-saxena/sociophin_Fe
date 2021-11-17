import React from "react";
import "./index.css";
import laptop from "./laptop.png";

function Index() {
  return (
    <>
      <div className="d-flex align-items-center mt-mb-2 h-100  p-4">
        <div className="pop mar-l">
          <h1>Sociophin</h1>
          <p>One tap social marketing Solution</p>
          <div className="d-flex">
            {/* <button className="btn shadow ttn btn-primary">Download</button>
            <button className="btn ttn btn-outline-primary w-8">Contact Us</button> */}
             <img
              width="6%"
              className="shadow m-2"
              src="logo-meta.png"
              alt=""
              srcset=""
            />
            <img
              width="6%"
              className="shadow m-2"
              src="envelope.png"
              alt=""
              srcset=""
            />
            <img
              width="6%"
              className="shadow m-2"
              src="https://cdn.svgporn.com/logos/twitter.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="mar-12 mx-4 h-50 d-flex justify-content-center align-items-center">
          <img className="tell sha" src={laptop} alt="" />
        </div>
      </div>
      <div className="container mar-t-12">
        <div className="grid mb-4 justify-content-center">
          <h4 className="serv">Services We Provide</h4>
        </div>

        <div className="container mb-5 d-flex justify-content-center align-items-top">
          <div className="row">
            <div className="col-lg-4">
              <div className="card m-2">
                <img src="./1.png" alt="" />
                <div className="card-body">
                  <h5 className="card-title serv">Empower Your Support Team</h5>
                  <p className="card-text">
                    Your customer support reps are equipped with the necessary
                    information to offer quick resolutions and troubleshoot
                    customer problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card m-2">
                <img src="./2.png" alt="" />
                <div className="card-body">
                  <h5 className="card-title serv">Understand your audience</h5>
                  <p className="card-text">
                    Understand your audience By bringing in real-time data, a
                    Social CRM tool provides you with valuable insights into
                    what makes your target audience tick.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card m-2">
                <img src="./3.png" alt="" />
                <div className="card-body">
                  <h5 className="card-title serv">
                    Give social context to your interaction
                  </h5>
                  <p className="card-text">
                    Give social context to your interaction The insights
                    gathered from social media help you initiate and hold
                    meaningful conversations with your prospects, which
                    humanizes your brand and fosters a better relationship with
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex back-blue pad-6 container-fluid">
        <div>
          <h1>Get in touch</h1>
          <p>we would greatly value your expertise and support.</p>
        </div>
        <div>
          <button className="btn btn-outline-primary c-w">contact us</button>
        </div>
      </div>
    </>
  );
}

export default Index;
