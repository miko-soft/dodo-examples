import { corelib } from '@mikosoft/dodo';

const authOpts = {
  apiLogin: 'http://localhost:8001/panel/users/login',
  afterGoodLogin: '/lib/auth/{loggedUserRole}/dashboard', // redirect after succesful login:
  afterBadLogin: '/lib/auth/login',  // redirect after unsuccesful login
  afterLogout: '/lib/auth/login'     // URL after logout
};
const $auth = new corelib.Auth(authOpts);

export { $auth };


