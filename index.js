const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 5000;
const { CONNECTION_PARAMS } = require("./const");

app.use(express.json());

const connection = mysql.createConnection(CONNECTION_PARAMS);

connection.connect((err) => {
  if (err) return console.log(err);
  console.log("connected");
});

// GET
app.get("/", async (req, res) => {
  res.json({
    data: "some data",
  });
});

app.get("/users", async (req, res) => {
  try {
    const $query = "SELECT id,name, age, password FROM users";
    connection.query($query, [], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          statusCode: 500,
          data: null,
          errors: ["Internal server error"],
        });
      }

      return res.status(200).json({
        statusCode: 200,
        data: results,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/user", async (req, res) => {
  try {
    const { name, age, password } = req.body;
    if (name === undefined || password === undefined || age === undefined) {
      return res.status(400).json({
        statusCode: 400,
        data: null,
        errors: ["Bad request"],
      });
    }

    const $query = "INSERT INTO users (name, age, password) VALUES(?,?,?)";
    connection.query($query, [name, age, password], (err, results) => {
      if (err) {
        return res.status(500).json({
          statusCode: 500,
          data: null,
          errors: ["Internal server error"],
        });
      }

      return res.status(201).json({
        statusCode: 201,
        data: {
          id: results.insertId,
          name,
          age,
          password,
        },
        errors: [],
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(500).json({
      statusCode: 500,
      data: null,
      errors: ["Internal server error"],
    });
  }

  const $query = "DELETE FROM users WHERE id = ?";
  connection.query($query, [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        statusCode: 500,
        data: null,
        errors: ["Internal server error"],
      });
    }

    return res.status(204).json({
      statusCode: 204,
      data: {
        id: results.insertId,
      },
      errors: [],
    });
  });
});

app.listen(5000, () => console.log(`server listening on port ${PORT}!`));
