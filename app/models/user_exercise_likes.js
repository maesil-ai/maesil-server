module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('user_exercise_likes', {
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        exercise_id: 
         { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
        }
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['user_id','exercise_id']
                }
            ],
            timestamps: false
        });
    }
