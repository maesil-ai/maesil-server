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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },
    { 
        
    }
       
    )
}

