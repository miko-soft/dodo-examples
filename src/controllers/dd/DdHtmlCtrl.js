import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddHtml from '../../views/pages/dd/dd-html.html?raw';



export default class DdHtmlCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddHtml = true;
    this.setTitle('dd-html');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddHtml);
  }

  async __init(trx) {
    this.product = {
      name: '<b style="color:green">Mercedes</b>',
    };

    // dynamic controller name dd-text="product___{{pid}}"
    this.pid = 123; // product id
    this.product_123 = '<b style="color:maroon">This is product 123</b>';
    this.product_124 = '<b style="color:orange">This is another product 124</b>';

    this.productX = {};

    // this.$model.myHTML = '<b>bold text</b>'; // will be rendered correctly but with double rendering: 1st in __init() next in __rend() hook
  }

  async __postrend() {
    this.$model.myHTML = '<b>bold text</b>'; // init models in the __postrend()
  }


  changeMyHtml() {
    this.$model.myHTML = '<b style="color:#00b5ed">bold text changed</b>';
  }

}
