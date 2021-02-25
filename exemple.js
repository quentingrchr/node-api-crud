const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(express.json());

// GET
app.get("/", async (req, res) => {
  res.json({
    data: "some data",
  });
});

//GET + variable (:variable)
app.get("/user/id/:id", async (req, res) => {
  const id = req.params.id;

  //
  //
  res.status(201).json({
    id,
  });
});

app.post("/user", async (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => console.log(`serve listening on port ${PORT}!`));
