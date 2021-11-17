import React from 'react'
import "./index.css"

function Index() {
  return (
    <>
      <div class="d-flex align-items-center mt-mb-2  p-4">
        <div class="pop mar-l">
          <h1>Sociophin</h1>
          <p>One tap social marketing Solution</p>
          <div class="d-flex">
            {/* <button class="btn shadow ttn btn-primary">Download</button>
            <button class="btn ttn btn-outline-primary w-8">Contact Us</button> */}
            <img width="6%" class="shadow m-2" src="envelope.png" alt="" srcset="" />
            <img width="6%" class="shadow m-2" src="linkedin.png" alt="" srcset="" />
            <img width="6%" class="shadow m-2" src="logo-meta.png" alt="" srcset="" />
          </div>
        </div>
        <div class="mar-12">
          <img class="tell sha" src="./right side.png" alt="" />
        </div>
      </div>
      <div class="container mar-t-12">
        <div class="grid mb-4 justify-content-center">
          <h4 class="serv">Services We Provide</h4>
        </div>
        <div class="container mb-5 d-flex justify-content-center align-items-top">
          <div class="col">
            <div class="card m-2">
              <img src="./1.png" alt="" />
              <div class="card-body">
                <h5 class="card-title serv">Empower Your Support Team</h5>
                <p class="card-text">
                  Your customer support reps are equipped with the
                  necessary information to offer quick resolutions and
                  troubleshoot customer problems.</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card m-2">
              <img src="./2.png" alt="" />
              <div class="card-body">
                <h5 class="card-title serv">Understand your audience</h5>
                <p class="card-text">Understand your audience
                  By bringing in real-time data, a Social CRM tool
                  provides you with valuable insights into what makes
                  your target audience tick.</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card m-2">
              <img src="./3.png" alt="" />
              <div class="card-body">
                <h5 class="card-title serv">Give social context to your interaction</h5>
                <p class="card-text">Give social context to your interaction
                  The insights gathered from social media help you
                  initiate and hold meaningful conversations with your
                  prospects, which humanizes your brand and fosters a
                  better relationship with them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex back-blue pad-6">
        <div>
          <h1>Get in touch</h1>
          <p>we would greatly value your expertise and support.</p>
        </div>
        <div>
          <button class="btn btn-outline-primary c-w">contact us</button>
        </div>
      </div>
    </>
  )
}

export default Index
