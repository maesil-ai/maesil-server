module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('video_table', {
        video_id: 
         {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true,
           
        },
        video_url:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heartCount:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status:
        {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "ACTIVE"
        },
        createdAt: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
}

