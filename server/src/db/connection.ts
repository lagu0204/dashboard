import { Sequelize} from 'sequelize'

const sequelize = new Sequelize('almacen', 'root', 'Akyra2004', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;