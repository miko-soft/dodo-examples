import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddText from '../../views/pages/dd/dd-text.html?raw';



export default class DdTextCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddText = true;
    // this.$debugOpts.model = false;
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

    this.longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.';

    // automatic data type conversion
    this.obj4json = { x: 555 };
    this.bool = false;

    // dynamic controller name dd-text="product___{{pid}}"
    this.pid = 123; // product id
    this.pid2 = 2;
    this.product_123 = 'This is product 123';
    this.product_124 = 'This is another product 124';
    this.product_124_2 = 'This is product 124_2';
    this.product_62 = 'This is product 62';

    this.productX = {};

    // this.$model.first_name = 'John Doe'; // will be rendered correctly but with double rendering: 1st in __init() next in __rend() hook

    this.animals = ['rabbit', 'dog', 'cat', 'cow', 'aligator'];
  }

  async __postrend() {
    this.$model.first_name = 'John Doe'; // one time rendering: only in __postrend()
  }


  changeFirstName() {
    this.$model.first_name = 'Ann Doe';
  }

}
