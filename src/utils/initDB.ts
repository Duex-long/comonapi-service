import { Sequelize } from 'sequelize';

const initDB = async () => {
  const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
  try {
    await sequelize.authenticate();
    console.log('数据库载入success.');
  } catch (error) {
    console.error('未能连接数据库', error);
  }

  return sequelize;
};

export default initDB;
