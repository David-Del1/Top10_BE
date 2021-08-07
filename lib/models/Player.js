import pool from '../utils/pool.js';

export default class Player {
  id;
  name;
  years_played;
  championships_won;
  total_points;
  fg_percentage;
  blocks;
  assists;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.years_played = row.years_played;
    this.championships_won = row.championships_won;
    this.total_points = row.total_points;
    this.fg_percentage = row.fg_percentage;
    this.blocks = row.blocks;
    this.assists = row.assists;
  }

  static async insert({
    name, years_played,
    championships_won,
    total_points, fg_percentage,
    blocks, assists
  }) {
    const { rows } = await pool.query(`
      INSERT INTO players (name, years_played,
      championships_won, total_points, fg_percentage,
      blocks, assists)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
    [name, years_played,
    championships_won,
    total_points, fg_percentage,
    blocks, assists]
    );

    return new Player(rows[0]);
  }
}