import AuthLayout from '../../../layouts/AuthLayout';
import ForgotPasswordForm from '../../../features/auth/forms/forgotPassword';

function ForgotPasswordPage() {
  return (
    <AuthLayout
      title={'Forgot Password?'}
      subtitle={'To reset your password, enter your email address below :'}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}

export default ForgotPasswordPage;
