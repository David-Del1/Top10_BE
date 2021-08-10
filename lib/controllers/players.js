import { Router } from 'express';
import Player from '../models/Player.js';

export default Router()
  .post('/api/v1/players', async (req, res) => {
    try {
      const player = await Player.insert(req.body);
      res.send(player);
      console.log(player);
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
  })
  .get('/api/v1/players/:id', async (req, res) => {
    try {
      const player = await Player.getById(req.params.id);
      res.send(player);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
