const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const { execSync } = require('child_process')
const app = express();

const rp = require('request-promise');

const localBranchName = 'local';


app.use(bodyParser.json())
app.use(express.static('public'));


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/dbg', async (req, resp) => {
  resp.send({"body": await rp('https://google.com')});
})

app.get('/status', (req, resp) => {
  resp.send({"msg": "all good"});
})

app.get('/deploy', (request, response) => {
//   if (request.query.secret !== process.env.SECRET) {
//     response.status(401).send()
//     return
//   }

//   if (request.body.ref !== 'refs/heads/glitch') {
//     response
//       .status(200)
//       .send('Push was not to glitch branch, so did not deploy.')
//     return
//   }

//   const repoUrl = request.body.repository.git_url

//   console.log('Fetching latest changes.')
  const output = execSync(
    `git merge ${localBranchName} && refresh`
  ).toString()
  console.log(output);
  response.send({output});
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log(process.env);
});
