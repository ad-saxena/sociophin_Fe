<center><img src="https://files.readme.io/7d79f02-Untitled_design_8.png" ></center>

# SocioPhin

Create a powerful social network for your organization and attract the right users leveraging technology at its best.

With over 3 billion active users, social media is a platform where consumers spend time every day conversing to one another about their likes, dislikes, and interests. Every business, from SMEs to large corporations, needs a social media plan to broaden their reach, raise brand awareness, attract new consumers, and engage existing customers with valuable content.

# What it does

SocioPhin integrates social media platforms with customer relationship management (CRM) systems to provide insight into customer interactions with a brand, and to improve the quality of customer engagement To create powerful social network management for organizations to attract the right users leveraging technology at its best. As a result of our integration with Facebook and LinkedIn, we can provide our users with many benefits, including Direct Messages across social networks, and users are able to post and view their posts, not to mention view and reply to their comments.


# How we built it

**Front end:** For the UI part we have used Bootstrap, HTML and CSS which is then converted into react components. **Facebook graph APIs:** We have used the Facebook developer graph tool for getting the endpoints for messenger and posts.
**Front end **- backend integration: We have used Axios which is an NPM package for calling APIs and after that, we have used a few state management hooks provided by react.js i.e useState, useEffect and a very popular package Recoil for storing global states. Login: For the login part I used Facebook SDK. In the login method I set all the required permissions for the access_key and then storing the pageid and access_key in a recoil global state. **Messenger**: Messenger part was simple for integration, made the state management with props and react hooks. The API endpoints i.e the access_key and pageid were fetched from the global state. Posts: For the posts, the state management is the same as the messenger one. The only tricky part was the mapping of comments and replies but I managed to do that using nested maps which worked well.
**Backend**: For backend we have used AWS RDS mySQL database and Node js to create APIs for different operations and S3 bucket to store the files. We also created a scheduling operation with Cron Node.js which triggers every second to check for queries matching the timestamp and sends the email to all the user if matches. We developed a backend with node.js and twitter v2 apis to get all the required apis for twitter endpoints. 
**Deployment**: We created a serverless architecture with AWS lambda, AWS API gateway and AWS S3 bucket. Demo Site: [SocioPhin](https://main.d3n22laf955pa1.amplifyapp.com/)


# 📝 Installing Guides

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 🚦 API Docs

## Facebbok Graph APIs
The Graph API is the primary way for apps to read and write to the Facebook social graph. All of our SDKs and products interact with the Graph API in some way, and our other APIs are extensions of the Graph API, so understanding how the Graph API works is crucial. 
**[The latest version is:v12.0](https://developers.facebook.com/docs/graph-api/)**
## Twitter APIs:
Use the Twitter API to listen to and analyze the public conversation, engage with people on Twitter, and innovate. Here you can see how the recent search endpoint was used to find Tweets with specific keywords.
**[Twitter API V2.2
](https://developer.twitter.com/en/docs)**


# 💬 Contact Us
Link: https://main.d3n22laf955pa1.amplifyapp.com/ <br>
Backend Repo: https://github.com/anishdutta/SocialCRM_Node_BE <br>
Frontend Repo: https://github.com/ad-saxena/sociophin_Fe <br>
