import { InputType } from '../Input/types';
import { FieldType } from './types';

export const fieldTypeToInputTypeMapper = {
  [FieldType.Text]: InputType.Text,
  [FieldType.Email]: InputType.Email,
  [FieldType.Password]: InputType.Password
};