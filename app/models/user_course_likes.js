module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('user_course_likes', {
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        course_id: 
         { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
        }
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['user_id','course_id']
                }
            ],
            timestamps: false
        });
    }
