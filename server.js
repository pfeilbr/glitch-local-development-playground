const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { execSync } = require("child_process");
const rp = require("request-promise");
const app = express();
const dotenvResult = require("dotenv").config();

const localBranchName = "local";

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/dbg", async (req, resp) => {
  resp.send({ body: await rp("https://google.com") });
});

app.get("/.env", (req, resp) => {
  resp.send({ dotenvResult.parsed });
});

app.get("/status", (req, resp) => {
  resp.send({ msg: "all good" });
});

app.get("/deploy", (request, response) => {
  const output = execSync(
    `git merge -X theirs ${localBranchName} && refresh`
  ).toString();
  console.log(output);
  response.send({ output });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("app is listening on port " + listener.address().port);
});
