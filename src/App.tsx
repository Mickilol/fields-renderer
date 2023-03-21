import { Field, FieldsRenderer, FieldType, useFields } from './components/FieldsRenderer';
import Styles from './styles';

const fieldsConfig: Field[] = [
  {
    id: 'first_name',
    type: FieldType.Text,
    label: 'First Name',
    defaultValue: 'Some first name'
  },
  {
    id: 'last_name',
    type: FieldType.Text,
    label: 'Last Name'
  },
  {
    id: 'email',
    type: FieldType.Email,
    label: 'Email',
    required: true
  },
  {
    id: 'password',
    type: FieldType.Password,
    label: 'Password',
    required: true
  },
];

const App = () => {
  const [data, isInvalid, handleChange] = useFields(fieldsConfig);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Styles.AppWrapper>
      <Styles.Card>
        <Styles.Title>Авторизация</Styles.Title>
        <Styles.Text>Для доступа к личному кабинету вашей компании авторизуйтесь на сайте</Styles.Text>

        <Styles.Form>
          <FieldsRenderer
            fieldsConfig={fieldsConfig}
            data={data}
            direction='column'
            onChange={handleChange}
          />

          <Styles.Button disabled={isInvalid} onClick={handleClick}>
            Войти
          </Styles.Button>
        </Styles.Form>
      </Styles.Card>
    </Styles.AppWrapper>
  );
}

export default App;
