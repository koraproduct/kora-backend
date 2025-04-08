require('dotenv').config();
const pool = require('./db');

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to Supabase DB:', res.rows[0]);
  } catch (err) {
    console.error('DB connection error:', err);
  } finally {
    await pool.end();
  }
})();
