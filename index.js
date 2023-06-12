const express = require("express");
const router = require("./router");
const cors =require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./router"));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});