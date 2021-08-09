import { Router } from 'express';
import Player from '../models/Player.js';

export default Router()
  .post('/api/v1/players', async (req, res) => {
    try {
      const player = await Player.insert(req.body);
      res.send(player);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  })
  .get('/api/v1/players', async (req, res) => {
    try {
      const players = await Player.getAll();
      res.send(players);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
