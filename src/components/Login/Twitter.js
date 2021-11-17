
// // import React from "react";
// // import TwitterLogin from "react-twitter-login";
// // import axios from "axios"
// // export default function Login(props) {
// //     const authHandler = (err, data) => {
// //         console.log(err, data);
// //     };
// //     const CONSUMER_KEY = "N5PgMRugS47NLdORWX3d7J31k"
// //     const CONSUMER_SECRET = "mCRPRZpWeEwr28tG493M8Idbe9gALCbrmhTCqWuwIaT32TuKN2"
// //     const oauth_callback = "http://localhost:3000/twitter"

// //     // const link = "https://api.twitter.com/oauth/request_token?oauth_callback=http://localhost:3000/twitter"
    
// //     const fun = () => {
// //         axios.post(`https://api.twitter.com/oauth/request_token?oauth_callback=http%3A%2F%2Flocalhost%3A3000%2Ftwitter`, { headers: { 'Authorization': `OAuth oauth_consumer_key=${CONSUMER_KEY}, oauth_nonce="$oauth_nonce", oauth_signature="oauth_signature", oauth_signature_method="HMAC-SHA1",  oauth_version="1.0"` } }).then(data => { console.log(data) }).catch(err => { console.log(err) })
// //     }

// //     return (
        
// //         // <TwitterLogin
// //         //     authCallback={authHandler}
// //         //     consumerKey={CONSUMER_KEY}
// //         //     consumerSecret={CONSUMER_SECRET}
// //         // />
// //         // <a href={link}>
// //         <h1 onClick={() => { fun() }}>Click Here</h1>
// //         // </a>
// //     );
// // };
// import React, { Component } from 'react';
// import TwitterLogin from 'react-twitter-auth';

// class App extends Component {

//     constructor() {
//         super();

//         this.state = { isAuthenticated: false, user: null, token: '' };
//     }

//     onSuccess = (response) => {
//         const token = response.headers.get('x-auth-token');
//         response.json().then(user => {
//             if (token) {
//                 this.setState({ isAuthenticated: true, user: user, token: token });
//             }
//         });
//     };

//     onFailed = (error) => {
//         alert(error);
//     };

//     logout = () => {
//         this.setState({ isAuthenticated: false, token: '', user: null })
//     };

//     render() {
//         let content = !!this.state.isAuthenticated ?
//             (
//                 <div>
//                     <p>Authenticated</p>
//                     <div>
//                         {this.state.user.email}
//                     </div>
//                     <div>
//                         <button onClick={this.logout} className="button" >
//                             Log out
//                         </button>
//                     </div>
//                 </div>
//             ) :
//             (
//                 <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
//                     onFailure={this.onFailed} onSuccess={this.onSuccess}
//                     requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" />
//             );

//         return (
//             <div className="App">
//                 {content}
//             </div>
//         );
//     }
// }

// export default App;