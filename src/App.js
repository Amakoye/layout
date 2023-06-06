import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import DashboardPage from './pages/dashboard';
import ForgotPasswordPage from './pages/auth/forgot_password';
import { useMemo } from 'react';

function App() {
  const urls = useMemo(() => {
    return [
      {
        path: '/auth/login',
        component: <LoginPage />,
      },
      {
        path: '/auth/forgot',
        component: <ForgotPasswordPage />,
      },
      {
        path: '/dashboard',
        component: <DashboardPage />,
      },
      {
        path: '/',
        component: <>Home</>,
      },
    ];
  }, []);

  return (
    <Router>
      <Switch>
        {urls.map((item, i) => (
          <Route key={item.path} exact path={item.path}>
            {item.component}
          </Route>
        ))}
      </Switch>
    </Router>
    /*  */
  );
}

export default App;
