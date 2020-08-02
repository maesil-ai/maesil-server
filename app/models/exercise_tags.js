module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('exercise_tags', {
        exercise_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag_id: 
         { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
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
