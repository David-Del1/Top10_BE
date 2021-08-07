const express = require('express');
const app = express();
const pool = require('./db.js');

app.use(express.json()) // => req.body

// ROUTES

// Get all players


// POST

// app.post("/players", async (req, res) => {
//   try {
//     console.log(req.body);
//   } catch (error) {
//     console.error(error.message);
//   }
// })

app.post("/players", async (req, res) => {

  try {
    console.log(req.body);
    const {
      name,
      years_played,
      championships_won,
      fg_percentage,
      total_points,
      blocks,
      assists
    } = req.body;
    const newPlayer = await pool.query(`
      INSERT INTO players (name, years_played, championships_won, fg_percentage, total_points, blocks, assists)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [name, years_played, championships_won, fg_percentage, total_points, blocks, assists]
    );
    
    res.json(newPlayer)
  } catch (error) {
    console.error(error.message);
  }
});

//  app.post("/taco", async (req, res) => {
//   try {
//     const taco = await pool.query(`
//       INSERT INTO taco (topping)
//       VALUES($1)
//       RETURNING *
//     `, [req.body.topping])
//     console.log(taco.rows[0]);
//     res.send(taco.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//   }
// })

app.listen(8000, () => {
  console.log("Server is listening on Port 8000!");
});



