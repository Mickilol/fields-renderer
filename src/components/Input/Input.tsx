import Styles from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ id, label, value = '', type, inputWidth, onChange }) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value, id);
  };

  return (
    <Styles.Wrapper inputWidth={inputWidth}>
      <input
        type={type}
        value={value}
        placeholder={label}
        onChange={handleChange}
      />
    </Styles.Wrapper>
  )
};