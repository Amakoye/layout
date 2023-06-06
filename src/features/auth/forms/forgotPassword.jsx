import { Form } from 'antd';
import { hasErrors } from '../../../utils/functions';
import { StyledInput, StyledButton } from './components';

const ForgotPassword = ({ form }) => {
  const { getFieldDecorator, getFieldsError } = form;

  return (
    <Form style={{ marginTop: '1em' }}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: 'Please input your email!',
            },
          ],
        })(<StyledInput size='large' type='email' placeholder='Email' />)}
      </Form.Item>

      <Form.Item>
        <StyledButton
          type='primary'
          htmlType='submit'
          disabled={hasErrors(getFieldsError())}
        >
          Send Link
        </StyledButton>
      </Form.Item>
    </Form>
  );
};

const ForgotPasswordForm = Form.create({ name: 'login-form' })(ForgotPassword);

export default ForgotPasswordForm;
