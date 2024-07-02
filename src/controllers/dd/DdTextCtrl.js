import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddText from '/views/pages/dd/dd-text.html?raw';



export default class DdTextCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    // this.$debugOpts.ddText = true;
    // this.$debugOpts.model = true;
    this.setTitle('dd-text');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddText);
  }


  async __init(trx) {
    this.product = {
      name: 'Toyota',
      address: {
        city: 'London'
      },
      colors: ['red', 'green']
    };

    this.textWithHtml = '<b>some bold text</b>';

    // --pipe:
    this.longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.';

    // automatic data type conversion
    this.obj4json = { x: 555 };
    this.bool = false;

    this.$model.job = {};
  }

  async __postrend() {
    this.$model.first_name = 'John Doe';
  }


  changeFirstName() {
    this.$model.first_name = 'Ann Doe';
  }


  changeJob() {
    this.$model.job = {
      country: 'Croatia'
    };
  }

}
