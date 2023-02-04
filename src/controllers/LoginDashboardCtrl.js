import { Controller } from '@mikosoft/dodo';

export default class LoginDashboardCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - Auth (Logout) - DASHBOARD');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/login-dashboard/main.html');
  }


  async doLogout() {
    console.log('auth', this.$auth);
    try {
      await this.$auth.logout(100);
    } catch (err) {
      console.error(err);
    }
  }

}
