import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('comonapi_db', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});
