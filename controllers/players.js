const { Router } = require('express');
const Player = require('../lib/models/Player');

module.exports = Router()
  .post('/players', async (req, res) => {
    try {
      const player = await Order.insert(
        req.body.name, req.body.years_played, 
        req.body.championships_won, 
        req.body.fg_percentage, req.body.total_points, req.body.blocks, req.body.assists
      );
      res.send(player);
    } catch (error) {
      res.status(500).send(error);
    }
  })