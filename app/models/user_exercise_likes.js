module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('user_exercise_likes', {
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        exercise_id: 
         { /* column 속성들 */ 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            // unique: true,
             /* 여기까지 */ 
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
