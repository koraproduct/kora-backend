require('dotenv').config();
const { Pool } = require('pg');
//console.log('DB URL:', process.env.SUPABASE_DB_URL); // Debug
const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  //connectionString: 'postgresql://postgres.cfbqssfdjenmmdjudmgt:smKuLd5MCpzmQzCL@aws-0-ap-south-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
