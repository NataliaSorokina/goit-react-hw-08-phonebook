import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from 'views/RegisterView/RegisterView';
import ContactsView from './views/ContactsView/ContactsView';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/register" exact>
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/contacts">
            <ContactsView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
