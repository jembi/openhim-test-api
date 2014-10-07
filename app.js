var koa = require("koa");
var app = module.exports = koa();
var routes = require("koa-route");
var fs = require("fs");
var https = require("https");
var httpPort = 3000;
var httpsPort = 8081;

// routes
var userRoutes = require("./userRoutes.js");
app.use(routes.post("/testPost", userRoutes.add));
app.use(routes.get("/testGet", userRoutes.get));
app.use(routes.get("/testGetNoDelay", userRoutes.getNoDelay));
app.use(routes.get("/testGetFail", userRoutes.getFailing));

// multipart message test
app.use(routes.post("/nowhere", userRoutes.nowhere));

// Fire it up

//listen on HTTP Port
app.listen(httpPort);
console.log("The app is listening. Port 3000");


var options = {
    key: fs.readFileSync("tls/key.pem").toString(),
    cert: fs.readFileSync("tls/cert.pem").toString()
};

var httpsServer = https.createServer(options, app.callback());

//listen on HTTPS Port
httpsServer.listen(httpsPort, function() {
    console.log("HTTPS listening on port " + httpsPort);
});

