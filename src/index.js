import Router from './Router';
import Login from './controllers/Login';
import Home from './controllers/Home';
import Dashboard from './controllers/Dashboard'

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
    url: '/dashboard',
    controller: Dashboard
  }
];

new Router(routes);
