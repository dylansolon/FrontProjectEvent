import Router from './Router';
import Login from './controllers/Login';
import Home from './controllers/Home';
import Dashboard from './controllers/Dashboard';
import Register from './controllers/Register';

import './index.scss';

const routes = [
  {
    url: '/home',
    controller: Home
  },
  {
    url: '/login',
    controller: Login
  },
    {
    url: '/register',
    controller: Register
  },
  {
    url: '/dashboard',
    controller: Dashboard
  }
];

new Router(routes);
