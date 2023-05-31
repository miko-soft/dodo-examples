import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '../../../views/inc/navbar.html?raw';
import libAuthDashboard from '../../../views/pages/lib/auth/dashboard.html?raw';



export default class AuthDashboardCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Dashboard (Auth)');
    this.setDescription('Test the Auth lib.');
    this.setKeywords('dodo, examples, Auth');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', libAuthDashboard);
  }

  async __init(trx) {
    console.log(corelib.navig);
  }


  async tryLogout() {
    try {
      await this.$auth.logout(100);
    } catch (err) {
      console.error(err);
    }
  }


}
