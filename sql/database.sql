CREATE DATSABASE top_ten;
--\c into top_ten database
CREATE TABLE players(
  player_id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  years_played VARCHAR(60),
  championships_won SMALLINT,
  fg_percentage VARCHAR(10),
  total_points INT,
  blocks SMALLINT,
  assists SMALLINT
);
CREATE TABLE taco(taco_id SERIAL PRIMARY KEY, topping STRING);