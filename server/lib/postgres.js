const { Pool } = require("pg");
const { pg } = require("../config");
const pool = new Pool({ connectionString: pg.connectionElephantString });

const fetch = async (SQL, ...values) => {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, values);
    return row;
  } finally {
    client.release();
  }
};

const fetchAll = async (SQL, ...values) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, values);
    return rows;
  } finally {
    client.release();
  }
};
module.exports = {
  fetch,
  fetchAll,
};
