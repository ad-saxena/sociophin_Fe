import proxy from "http-proxy-middleware";

function App(app) {
    app.use(proxy("/trends", {
        target: "https://api.twitter.com/2/tweets/sample/stream",
        changeOrigin: true
    })
    );
}

export default App