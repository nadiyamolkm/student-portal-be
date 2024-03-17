export default {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    PORT: process.env.PORT || 4001,
      //APPLICATION_PORT:4001,
      //Mysql db connection
      CONNECTION_LIMIT: 10,
      MYSQL_HOST: "127.0.0.1",
      MYSQL_USER: "root",
      MYSQL_PASSWORD: "",
      MYSQL_DB: "studentportal",
      MYSQL_PORT: 3306,

    };