import { Model, Types } from 'mongoose';
import { TUserName } from '../student/student.interface';


export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  password: string;
  designation: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
  academicDepartment: Types.ObjectId;
};


export interface FacultyModel extends Model<TFaculty> {
  isUserExists(): Promise<TFaculty | null>;
}

