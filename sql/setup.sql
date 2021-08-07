DROP TABLE IF EXISTS players;
CREATE TABLE players (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(60),
  years_played VARCHAR(60),
  championships_won SMALLINT,
  total_points BIGINT,
  fg_percentage DECIMAL(4, 2),
  blocks SMALLINT,
  assists SMALLINT
);