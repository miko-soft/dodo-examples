const authOpts = {
  apiLogin: 'https://api.dex8.com/panel/users/login',
  afterGoodLogin: '/{loggedUserRole}/login-dashboard', // redirect after succesful login
  afterBadLogin: '/login-form',  // redirect after unsuccesful login
  afterLogout: '/login-form'     // URL after logout
};

export { authOpts };
