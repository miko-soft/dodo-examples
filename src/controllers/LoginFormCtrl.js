import { Controller, corelib } from '@mikosoft/dodo';

export default class LoginFormCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - Auth (Login)');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/login-form/main.html');
  }


  async init() {
    this.formLogin = new corelib.Form('loginForm');
  }


  async doLogin() {
    const username = this.formLogin.getControl('username', false); // false will not convert the type, for example: 12345 will stay string
    const password = this.formLogin.getControl('password', false); // false will not convert the type, for example: 12345 will stay string
    try {
      const creds = { username, password };
      console.log('creds::', creds);
      const resp = await this.$auth.login(creds);
      console.log('doLogin::', username, password, resp);
    } catch (err) {
      console.error(err);
    }
  }

}
