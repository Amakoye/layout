import AuthLayout from '../../../layouts/AuthLayout';
import WrappedLoggedForm from '../../../features/auth/forms/login';

function LoginPage() {
  return (
    <AuthLayout title={'Sign in to Smart Pharmacy'}>
      <WrappedLoggedForm />
    </AuthLayout>
  );
}

export default LoginPage;
