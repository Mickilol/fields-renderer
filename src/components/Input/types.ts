export type InputProps = {
  label: string;
  value?: string;
  id: string;
  type: InputType;
  inputWidth?: string;
  onChange: (value: string, id: string) => void;
}

export enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password'
}