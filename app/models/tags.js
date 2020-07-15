module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('tags', {
         tag_id: 
         { /* column 속성들 */ 
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
            // unique: true,
             /* 여기까지 */ 
        },
        tag_name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        },
        {
            timestamps: false
        });
    }
