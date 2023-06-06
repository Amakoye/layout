import { Form, Select } from 'antd';
import { useState } from 'react';
import Iconify from '../../../components/Iconify';
import { hasErrors } from '../../../utils/functions';
import { StyledInput, StyledButton } from './components';
import { Link } from 'react-router-dom';

const LoginForm = ({ form }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError } =
    form;
  const passwordError = isFieldTouched('password') && getFieldError('password');

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

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
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            suffix={
              <Iconify
                style={{ fontSize: '1.5rem' }}
                onClick={toggleShowPassword}
                icon={showPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'}
              />
            }
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('branch', {
          rules: [{ required: true, message: 'Please select your Branch!' }],
        })(<Select size='large' placeholder='Branch'></Select>)}
      </Form.Item>
      <div style={{ cursor: 'pointer', marginBottom: '1em' }}>
        <Link
          to='/auth/forgot'
          style={{
            marginRight: 'auto',
            cursor: 'pointer',
            fontFamily: 'Poppins',
            color: '#009b85',
          }}
        >
          Forgot password?
        </Link>
      </div>
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

export default WrappedLoggedForm;
