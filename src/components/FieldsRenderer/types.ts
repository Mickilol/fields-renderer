export type FieldsRendererProps = {
  fieldsConfig: Field[];
  data: Record<string, string>;
  onChange: (value: string, id: string) => void;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export type Field = {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
  defaultValue?: string;
}

export enum FieldType {
  Text = 'inputText',
  Email = 'inputEmail',
  Password = 'inputPassword'
}