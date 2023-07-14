import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import notfound from '/views/pages/notfound/notfound.html?raw';


export default class NotfoundCtrl extends Controller {

  async __loader(trx) {
    this.setTitle('DoDo - NOT FOUND');
    this.loadView('#main', notfound);
  }

  async __init(trx) {
    // console.error(`404 not found: ${trx.uri}`);
    this.notfound_url = trx.uri;
  }

}
