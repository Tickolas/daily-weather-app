// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8088;
const cors_proxy = require("cors-anywhere");

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [], // No headers are required
    removeHeaders: ["cookie", "cookie2"]
  })
  .listen(port, host, function() {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
