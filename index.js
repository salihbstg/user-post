import express from "express";
import morgan from "morgan";
import { postArray, user } from "./Data.js";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("Hosting has started on port 3000!");
});
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  if (
    req.body.username === user[0].username &&
    req.body.pass === user[0].pass
  ) {
    res.render("index.ejs", {
      username: req.body.username,
      pass: req.body.pass,
      data: postArray,
    });
  } else {
    res.render("index.ejs");
  }
});
app.post("/newPost", (req, res) => {
  postArray.push(req.body.txt);
  res.render("index.ejs", {
    username: "salihbstg",
    pass: "123",
    data: postArray,
  });
});
