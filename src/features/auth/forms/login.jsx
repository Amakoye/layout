import { Form, Input, Icon, Button, Select } from 'antd';
import styled from 'styled-components';
import Iconify from '../../../components/Iconify';

const LoginForm = ({ form }) => {
  const { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError } =
    form;
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
    <Form>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [
            {
              required: true,
              message: 'Please input your Username!',
            },
          ],
        })(<StyledInput size='large' type='text' placeholder='Username' />)}
      </Form.Item>
      <Form.Item
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <StyledInput
            size='large'
            type='password'
            placeholder='Password'
            suffix={<Iconify icon={'eva:eye-fill'} />}
          />
        )}
      </Form.Item>
      <Form.Item
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('branch', {
          rules: [{ required: true, message: 'Please select your Branch!' }],
        })(<Select size='large' type='password' placeholder='Branch'></Select>)}
      </Form.Item>
      <Form.Item>
        <StyledButton
          type='primary'
          htmlType='submit'
          disabled={hasErrors(getFieldsError())}
        >
          Log in
        </StyledButton>
      </Form.Item>
    </Form>
  );
};

const WrappedLoggedForm = Form.create({ name: 'login-form' })(LoginForm);

const StyledInput = styled(Input)`
  transition: border-color 0.3s ease-in-out;
  background-color: transparent;
  &:focus {
    outline: none;
    border: none;
  }
`;

const StyledPasswordInput = styled(Input.Password)`
  && {
    background-color: transparent;
    border-radius: 1em;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #009b85;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #009b85;
  color: white;
  border: none;
  font-size: 1.25rem;
  &:hover {
    background-color: #66c3b6;
  }
`;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default WrappedLoggedForm;
