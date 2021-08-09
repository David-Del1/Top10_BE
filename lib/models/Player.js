import pool from '../utils/pool.js';

export default class Player {
  id;
  name;
  image;
  years_played;
  championships_won;
  total_points;
  fg_percentage;
  blocks;
  assists;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.image = row.image;
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
      INSERT INTO players (name, image, years_played,
      championships_won, total_points, fg_percentage,
      blocks, assists)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `,
    [name, image, years_played,
    championships_won,
    total_points, fg_percentage,
    blocks, assists]
    );

    return new Player(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM players
    `);

    return rows.map(row => new Player(row));
  }
}