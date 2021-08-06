const express = require('express');
const app = express();
const pool = require('./db.js');

app.use(express.json()) // => req.body

// ROUTES

// POST

app.post("/players", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error.message);
  }
})

// app.post("/players", async (req, res) => {
//   try {
//     const {
//       name,
//       years_played,
//       championships_won,
//       fg_percentage,
//       total_points,
//       blocks,
//       assists
//     } = req.body;
//     const newPlayer = await pool.query(`
//       INSERT INTO players (name, years_played, championships_won, fg_percentage, total_points, blocks, assists)
//       VALUES ($1, $2, $3, $4, $5, $6, $7)
//       RETURNING *`,
//       [name, years_played, championships_won, fg_percentage, total_points, blocks, assists]
//     );

//     res.json(newPlayer)
//   } catch (error) {
//     console.error(error.message);
//   }
// });

app.listen(8000, () => {
  console.log("Server is listening on Port 8000!");
});

