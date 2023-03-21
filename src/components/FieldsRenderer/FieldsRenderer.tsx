import { Input } from '../Input';
import { FieldsRendererProps } from './types';
import { fieldTypeToInputTypeMapper } from './mappers';
import Styles from './styles';

export const FieldsRenderer: React.FC<FieldsRendererProps> = ({
  fieldsConfig,
  direction,
  data,
  onChange
}) => {
  const isColumn = direction === 'column' || direction === 'column-reverse';

  return (
    <Styles.Wrapper flexDirection={direction}>
      {fieldsConfig.map(field => (
        <Input
          id={field.id}
          key={field.id}
          label={field.label}
          type={fieldTypeToInputTypeMapper[field.type]}
          onChange={onChange}
          value={data[field.id]}
          inputWidth={isColumn ? '100%' : undefined}
        />
      ))}
    </Styles.Wrapper>
  );
};
