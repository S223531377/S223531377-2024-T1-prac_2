let express = require("express");
let app = express();
let port = 3000;

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/addnumbers", function (req, res) {
  let number1 = req.query.number1;
  let number2 = req.query.number2;
  let sum = parseInt(number1) + parseInt(number2);
  let responce = { data: sum, message: "Success", statusCode: 200 };
  res.json(responce);
});

app.listen(port, () => {
  console.log(`Express server started`);
});
