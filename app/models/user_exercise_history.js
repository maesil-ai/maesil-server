module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('user_exercise_history', {
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        exercise_id: 
         {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        score:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        play_time:
        {
            type: DataTypes.TIME,
        },
        started_at:
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        kcal:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        finished_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        created_at: 
        {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
}

