const db = require("../models");
const userRoute = require("../routes/userRoute");
const { sequelize } = require("../models");
const Exercise = db.exercises;
const ExerciseTag = db.exercise_tags;
const Exercise_Likes = db.user_exercise_likes;
const Op = db.Sequelize.Op;

exports.exerciseAllInfoNoUserService = async () => {
  let result = await Exercise.findAll({
    where: {
      status: "ACTIVE",
    },
    order: [["view_counts", "DESC"]],
  });

  return result;
};

exports.exerciseAllInfoService = async (user_id) => {
  console.log("exerciseAllInfoService Test");

  let result = await Exercise.findAll({
    attributes: {
      include: [
        [
          sequelize.literal(`(
                        SELECT COUNT(*) FROM user_exercise_likes AS ul
                        WHERE exercises.exercise_id = ul.exercise_id
                        AND user_id = '${user_id}'
                    )
                    `),
          "isLike",
        ],
      ],
    },
    where: {
      status: "ACTIVE",
    },
  });
  return result;
};

exports.exerciseOneInfoService = async (user_id, exercise_id) => {
  let result = await Exercise.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(`(
                        SELECT COUNT(*) FROM user_exercise_likes AS ul
                        WHERE exercises.exercise_id = ul.exercise_id
                        AND user_id = '${user_id}'
                    )
                    `),
          "isLike",
        ],
      ],
    },
    where: {
      exercise_id: exercise_id,
    },
  });

  return result;
};

exports.exerciseOneInfoNoUserService = async (exercise_id) => {
  let result = await Exercise.findByPk(exercise_id);
  await result.increment("view_counts", { by: 1 });
  return result;
};

exports.exerciseUploadService = async (exercise_info) => {
  let result = await Exercise.create({
    user_id: exercise_info.user_id,
    title: exercise_info.title,
    description: exercise_info.description,
    play_time: exercise_info.play_time,
    thumb_url: exercise_info.thumb_url,
    video_url: exercise_info.video_url,
    reward: exercise_info.reward,
    skeleton: exercise_info.skeleton,
    level: exercise_info.level,
    tag_id: exercise_info.tag_id,
  });

  console.log(result, "exercise Upload Service result");

  await ExerciseTag.create({
    exercise_id: result.exercise_id,
    tag_id: exercise_info.tag_id,
  });

  return result;
};

exports.exerciseIsUserService = async (exercise_id, user_id) => {
  let result = await Exercise.findAll({
    where: {
      exercise_id: exercise_id,
      user_id: user_id,
      status: "ACTIVE",
    },
  });

  let result = await Exercise.findByPk(exercise_id);
  return result;
};

exports.exerciseDeleteService = async (exercise_id) => {
  await Exercise.update(
    {
      status: "DELETED",
    },
    {
      where: {
        exercise_id: exercise_id,
      },
    }
  );
};
