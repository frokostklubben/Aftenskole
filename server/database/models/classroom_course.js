import sequelize from '../database.js';
import Course from '../course.js';
import Classroom from '../classroom.js';

const classroom_course = sequelize.define(
  'Classroom_Course',
  {
    courseId: {
      type: sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    classroomId: {
      type: sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Classroom,
        key: 'room_id',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'classroom_course',
  },
);

try {
  await sequelize.sync(); // { alter: true }
  console.log('The table for the Classroom_Course model was just (re)created!');
} catch (error) {
  console.error('Unable to create or recreate the table:', error);
}

export default classroom_course;
