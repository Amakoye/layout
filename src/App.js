import { Form } from 'antd';
import AuthLayout from './layouts/AuthLayout';
import WrappedLoggedForm from './features/auth/forms/login';
import Sidebar from './layouts/dashboard/Sidebar/Sidebar';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import styled from 'styled-components';
import cssStyles from './utils/cssStyles';

function App() {
  return (
    <DashboardLayout>
      <Container>
        {[...Array(8)].map((card, i) => (
          <Card>
            <CardContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad,
              labore veniam totam accusantium quos optio molestiae nobis minus
              impedit sequi reiciendis tempora cumque autem veritatis? Facilis,
              ipsa nisi? Officia.
            </CardContent>
          </Card>
        ))}
      </Container>
    </DashboardLayout>
    /*  <AuthLayout title={'Sign in to Smart Pharmacy'}>
      <Form>
        <WrappedLoggedForm />
      </Form>
    </AuthLayout> */
  );
}
const Container = styled.div`
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
`;

const Card = styled.div`
  padding: 1.5em;
  text-align: justify;
  border-radius: 1em;
  font-size: 1.2rem;
  width: 32%;
  ${() =>
    cssStyles.glass({
      opacity: 0.6,
      // bg: '#ffffff',
      border: {
        opacity: 0.3,
      },
      saturate: 30,
    })}
`;

const CardContent = styled.div``;

export default App;
