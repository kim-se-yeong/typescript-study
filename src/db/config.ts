import mysql, { Pool } from 'mysql';
import dotenv from 'dotenv';
import envpath from '../util/filePath';
dotenv.config({ path: envpath});

let pool: Pool;

export const init = () => {
    try {
        pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            connectionLimit: Number(process.env.MYSQL_CONNECTION_POOL)
          });
    } catch (error) {
        throw error;
    }
}

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {

    try {
      if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');
  
      return new Promise<T>((resolve, reject) => {
        pool.query(query, params, (error, results) => {
          if (error) reject(error);
          else resolve(results);
        });
      });
  
    } catch (error) {
      console.error('[mysql.connector][execute][Error]: ', error);
      throw new Error('failed to execute MySQL query');
    }
  }