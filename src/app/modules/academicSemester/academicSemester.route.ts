import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-academic-semester',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicSemesterValidation.CreateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);
router.get(
  '/',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.student,
    USER_ROLE.faculty,
  ),
  AcademicSemesterController.getAllAcademicSemester,
);
router.get(
  '/:id',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.student,
    USER_ROLE.faculty,
  ),
  AcademicSemesterController.getSingleAcademicSemester,
);
router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

export const AcademicSemesterRoute = router;
