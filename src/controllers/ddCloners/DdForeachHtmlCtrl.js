import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachHtml from '/views/pages/ddCloners/dd-foreach-html.html?raw';



export default class DdForeachHtmlCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    // this.$debugOpts.ddHtml = true;
    this.setTitle('dd-foreach dd-html');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachHtml);
  }

  async __init(trx) {
    this.ids = [1, 3, 5];
    this.names = ['<b>Marko</b>', '<b>Saša</b>', '<b>Robert</b>', '<b>Peter</b>', '<b>Toni</b>'];
  }


}
