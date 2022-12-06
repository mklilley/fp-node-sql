const { Pool } = require("pg");
const connectionString = process.env.PG_CONN;

const pool = new Pool({
    connectionString,
});

const clearDb = `
DROP TABLE IF EXISTS elements;
CREATE TABLE elements(
    id serial PRIMARY KEY,
    name varchar(200) NOT NULL,
    symbol varchar(2)  NOT NULL
);`;

const seedDb = `
INSERT INTO elements (name, symbol) 
VALUES
    ('Hydrogen', 'H'),
    ('Helium', 'He'),
    ('Lithium', 'Li'),
    ('Beryllium', 'Be'),
    ('Boron', 'B'),
    ('Carbon', 'C'),
    ('Nitrogen', 'N'),
    ('Fluorine', 'F'),
    ('Neon', 'Ne');
`;

async function initdb() {
    try {
        await pool.query(clearDb);
        await pool.query(seedDb);
    } catch (e) {
        console.log(e.message);
    }
}

initdb();

module.exports = { pool };
