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
            <button class="btn shadow ttn btn-primary">Download</button>
            <button class="btn ttn btn-outline-primary w-8">Contact Us</button>
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
        <div class="container mb-5 d-flex justify-content-center">
          <div class="">
            <div class="card m-2">
              <img src="./1.png" alt="" />
              <div class="card-body">
                <h5 class="card-title serv">Business Coaching</h5>
                <p class="card-text">Have you reached you business goals?Let us work with you to build your business to the level of success you aspire to!</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card m-2">
              <img src="./3.png" alt="" />
              <div class="card-body">
                <h5 class="card-title serv">Business Coaching</h5>
                <p class="card-text">Have you reached you business goals?Let us work with you to build your business to the level of success you aspire to!</p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card m-2">
              <img src="./3.png" alt="" />
              <div class="card-body">
                <h5 class="card-title serv">Business Coaching</h5>
                <p class="card-text">Have you reached you business goals?Let us work with you to build your business to the level of success you aspire to!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex back-blue pad-6">
        <div>
          <h1>Want to work with us</h1>
          <p>Press the button and receive a full analysis of your business within 2 days!</p>
        </div>
        <div>
          <button class="btn btn-outline-primary c-w">Request a quote</button>
        </div>
      </div>
    </>
  )
}

export default Index
