import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Player from '../lib/models/Player.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a player via POST', async () => {
    const res = await request(app)
      .post('/api/v1/players')
      .send({
        name: 'leBron',
        image: 'lebron.png',
        years_played: '2003 - present',
        championships_won: 4,
        total_points: 38000,
        fg_percentage: 55.9,
        blocks: 4000,
        assists: 3800
      });

    expect(res.body).toEqual(
      { id: '1',
        name: 'leBron',
        image: 'lebron.png',
        years_played: '2003 - present',
        championships_won: 4,
        total_points: '38000',
        fg_percentage: '55.90',
        blocks: 4000,
        assists: 3800 }
    );
  });

  it('should get a player by id via GET', async () => {
    

    const player = {
      id: '1',
      name: 'leBron',
      image: 'lebron.png',
      years_played: '2003 - present',
      championships_won: 4,
      total_points: 38000,
      fg_percentage: 55.90,
      blocks: 4000,
      assists: 3800
    };

    const player1 = await Player.insert(player);

    const res = await request(app).get(`/api/v1/players/${player1.id}`);

    expect(res.body).toEqual(player1);
  });
});
