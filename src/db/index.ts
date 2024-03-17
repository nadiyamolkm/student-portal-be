import mysql,{ PoolOptions } from 'mysql2/promise';
import config from '../../config/index';

const poolConfig : PoolOptions = {
    connectionLimit: config.CONNECTION_LIMIT,
      host: config.MYSQL_HOST,
      port: config.MYSQL_PORT,
      user: config.MYSQL_USER,
      password: config.MYSQL_PASSWORD,
      database: config.MYSQL_DB,
}

let pool:any;

export default  {
    getConnection: () => pool.getConnection(),
    init: async () => {
      pool = await mysql.createPool(poolConfig);
    },
    getPool: () => pool,
  };