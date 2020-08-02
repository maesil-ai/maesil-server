module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('tags', {
         tag_id: 
         { 
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
        },
        tag_name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        tag_english_name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        },
        {
            timestamps: false
        });
    }
