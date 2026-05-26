import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2404",
  database: "urbanbrew",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/contact", (req, res) => {
  const { name, email, date, time, guests, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, date, time, guests, message) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, date, time, guests, message],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Database Error");
      } else {
        res.send("Table booked successfully");
      }
    }
  );
});
app.get("/bookings", (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send("Database Error");
    } else {
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});