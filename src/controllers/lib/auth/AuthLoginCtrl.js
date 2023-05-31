import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import libAuthLogin from '/views/pages/lib/auth/login.html?raw';



export default class AuthLoginCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Login (Auth)');
    this.setDescription('Test the Auth lib.');
    this.setKeywords('dodo, examples, Auth');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', libAuthLogin);
  }

  async __init(trx) {
    console.log(corelib.navig);
  }


  async tryLogin() {
    const username = this.username;
    const password = this.password;
    try {
      const creds = { username, password };
      console.log('creds::', creds);
      const resp = await this.$auth.login(creds);
      console.log('tryLogin::', username, password, resp);
    } catch (err) {
      console.error(err);
    }
  }


}
