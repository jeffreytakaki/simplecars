const express = require('express');
const app = express();
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
