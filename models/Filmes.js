const { Model, DataTypes } = require('sequelize');

class movie extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            genero: DataTypes.STRING,
        },{
            sequelize: connection
        })
    }
}

module.exports = movie;