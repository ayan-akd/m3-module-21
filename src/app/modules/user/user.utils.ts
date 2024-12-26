import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementedId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementedId = `${payload.year}${payload.code}${incrementedId}`;
  return incrementedId;
};

const findLastFacultyId = async () => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastFaculty?.id ? lastFaculty.id : undefined;
};

export const generateFacultyId = async () => {
  const lastFacultyId = await findLastFacultyId();
  const currentId = lastFacultyId ? lastFacultyId.substring(2) : (0).toString();

  let incrementedId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementedId = `F-${incrementedId}`;
  return incrementedId;
};

const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastAdmin?.id ? lastAdmin.id : undefined;
};

export const generateAdminId = async () => {
  const lastAdminId = await findLastAdminId();
  const currentId = lastAdminId ? lastAdminId.substring(2) : (0).toString();
  let incrementedId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementedId = `A-${incrementedId}`;
  return incrementedId;
  };
