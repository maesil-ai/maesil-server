module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('courses', {
        course_id: 
         {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false, 
            primaryKey: true,
           
        },
        exercise_list:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        course_name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:
        {
            type: DataTypes.STRING
        },
        play_time:
        {
            type: DataTypes.TIME,
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        thumb_url:
        {
            type: DataTypes.STRING
        },
        reward:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        like_counts:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        view_counts:
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
        created_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    {
        timestamps: false
    })
}

