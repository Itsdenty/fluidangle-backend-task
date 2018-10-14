import dbconfig from './database';

const currentDB = (env) => {
  if (env === 'test') {
    dbconfig.currentSQL.database = 'test-fluid-angle-database';
  } else if (env === 'production') {
    dbconfig.use_env_variable = 'DATABASE_URL';
  }
  return dbconfig;
};
export default currentDB;
// export default {
//   development: {
//     username: dbconfig.currentSQL.username,
//     password: dbconfig.currentSQL.password,
//     database: dbconfig.currentSQL.database,
//     host: dbconfig.currentSQL.options.host,
//     dialect: dbconfig.currentSQL.options.dialect
//   },
//   test: {
//     username: 'root',
//     password: null,
//     database: 'database_test',
//     host: '127.0.0.1',
//     dialect: 'mysql'
//   },
//   production: {
//     username: dbconfig.currentSQL.username,
//     password: dbconfig.currentSQL.password,
//     database: dbconfig.currentSQL.database,
//     host: dbconfig.currentSQL.options.host,
//     dialect: dbconfig.currentSQL.options.dialect
//   }
// };
