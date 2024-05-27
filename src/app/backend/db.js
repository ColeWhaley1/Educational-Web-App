import { Pool } from 'pg';

import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool(
    {
        "host": "localhost",
        "user": process.env.DB_USER,
        "port": 5433,
        "database": "educationaldb",
        "password": process.env.DB_PASSWORD
      }
);

module.exports = pool;