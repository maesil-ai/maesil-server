module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('users', {
         user_id: 
         { 
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true
            // unique: true,
        },
        email:
        {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: 
        {
            type: DataTypes.STRING(200), 
            allowNull: false, 
        },
        nickname:
        { 
            type: DataTypes.STRING(10),
            allowNull: false, 
        },
        gender:
        {
            type: DataTypes.STRING(10)
        },
        weight:
        {
            type: DataTypes.INTEGER
        },
        height:
        {
            type: DataTypes.INTEGER
        },
        level:
        {
            type: DataTypes.INTEGER
        },
        points:
        {
            type: DataTypes.INTEGER
        },
        status:
        {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "ACTIVE"
        },
        created_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
        },
        {
            timestamps: false
        });
    }
