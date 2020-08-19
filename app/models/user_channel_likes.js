module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_channel_likes', {
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        channel_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['user_id','channel_id']
                }
            ],
            timestamps: false
        });
    }