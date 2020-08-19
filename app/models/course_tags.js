module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('course_tags', {
        course_id:
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
                    fields: ['course_id','tag_id']
                }
            ],
            timestamps: false
        });
    }
