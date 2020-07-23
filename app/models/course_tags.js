module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('course_tags', {
        course_id:
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
                    fields: ['course_id','tag_id']
                }
            ],
            timestamps: false
        });
    }
