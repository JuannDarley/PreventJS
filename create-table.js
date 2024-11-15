import { sql } from './db.js'
/*sql `DROP TABLE IF EXISTS videos;`.then(() => {
  console.log('Tabela Apagada')
}) */

sql `
CREATE TABLE videos (
    id TEXT PRIMARY KEY,         -- Auto-incrementing unique identifier for each video
    title TEXT,    -- Title of the video (up to 255 characters)
    description TEXT,              -- Description of the video (text can store longer content)
    duration INTEGER       -- Duration of the video in seconds (as an integer)
);

`.then(() => {
  console.log('Tabela Criada!')
})