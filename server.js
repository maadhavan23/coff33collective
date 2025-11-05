// server.js
import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const pool = new Pool({
  connectionString: "postgresql://postgres:[YOUR_PASSWORD]@db.hryamtpiqdxymxyagsvq.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

app.get("/data", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM your_table LIMIT 5;");
  res.json(rows);
});

app.use(express.static(".")); // serve your HTML file
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
