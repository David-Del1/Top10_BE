import client from '../lib/client.js';
import { players } from './data.js';

run();

async function run() {
  try {
    await Promise.all(
      players.map(player => {
        return client.query(`
          INSERT INTO players (name, image, years_played, championships_won, total_points, fg_percentage, blocks, assists)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
        `,
        [player.name, player.image, player.years_played, player.championships_won, player.total_points, player.fg_percentage, player.blocks, player.assists]);
      })
    );
    console.log('seed data load complete');
  } catch (error) {
    console.error(error);
  }
  finally {
    client.end();
  }
}
