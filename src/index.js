import Router from './Router';
import Home from './controllers/Home';
import Dashboard from './controllers/Dashboard';
import './index.scss';
import LoginRegister from './controllers/LoginRegister';

const routes = [
  {
    url: '/home',
    controller: Home
  },
  {
    url: '/login',
    controller: LoginRegister
  },
  {
    url: '/dashboard',
    controller: Dashboard
  }
];

new Router(routes);
