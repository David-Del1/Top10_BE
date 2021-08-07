const pool = require('pool');

class Player {
  id;
  name;
  years_played;
  championships_won
  fg_percentage;
  total_points;
  blocks;
  assists;

  constructor(row) {
    this.id = row.player_id;
    this.name = row.name;
    this.years_played = row.years_played;
    this.championships_won = row.championships_won;
    this.fg_percentage = row.fg_percentage;
    this.total_points = row.total_points;
    this.blocks = row.blocks;
    this.assists = row.assists;
  }

  static async insert(
  name,
  years_played,
  championships_won,
  fg_percentage,
  total_points,
  blocks,
  assists
  ) {
    const { rows } = await pool.query(`
      INSERT INTO players (name, years_played, championships_won, fg_percentage, total_points, blocks, assists)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [name, years_played, championships_won, fg_percentage, total_points, blocks, assists]
    );

    return new Player(rows[0])
  }
}