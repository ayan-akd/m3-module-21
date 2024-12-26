import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constant';

const CreateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]], {
      required_error: 'Semester Name is required',
    }),
    year: z.string({
      required_error: 'Year is required',
    }),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum([...Month] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum([...Month] as [string, ...string[]], {
      required_error: 'End month is required',
    }),
  }),
});

const UpdateAcademicSemesterValidationSchema = z.object({
  body: z.object({
      name: z.enum([...AcademicSemesterName] as [string, ...string[]], {
        required_error: 'Semester Name is required',
      }),
      year: z.string({
        required_error: 'Year is required',
      }),
      code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
        required_error: 'Code is required',
      }),
      startMonth: z.enum([...Month] as [string, ...string[]], {
        required_error: 'Start month is required',
      }),
      endMonth: z.enum([...Month] as [string, ...string[]], {
        required_error: 'End month is required',
      }),
    })
    .partial(),
});

export const AcademicSemesterValidation = {
  CreateAcademicSemesterValidationSchema,
  UpdateAcademicSemesterValidationSchema
};
