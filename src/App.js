import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import authOperations from 'redux/auth/auth-operations';
import { getIsRefreshing } from 'redux/auth/auth-selectors';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView.js' /* webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView.js' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView.js' /* webpackChunkName: "contacts-view" */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default App;
