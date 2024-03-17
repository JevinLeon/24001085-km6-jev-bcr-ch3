const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());

app.use(express.static("../public"));

// GET /
app.get("/", (req, res) => {
  res.status(200).send({ message: "ping successfully" });
});

// GET /cars
app.get("/cars", router);

// GET /cars/:id
app.get("/cars/:id", router);

// POST /cars
app.post("/cars", router);

// PUT /cars/:id
app.put("/cars/:id", router);

// DELETE /cars/:id

app.delete("/cars/:id", router);

app.listen(3000);
