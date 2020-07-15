module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('exercise_tags', {
        exercise_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag_id: 
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
                    fields: ['exercise_id','tag_id']
                }
            ],
            timestamps: false
        });
    }
