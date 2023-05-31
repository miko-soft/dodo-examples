import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddValue from '/views/pages/dd/dd-value.html?raw';



export default class DdValueCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddValue = true;
    // this.$debugOpts.ddChecked = true;
    this.setTitle('dd-value');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddValue);

  }

  async __init(trx) {
    this.users = ['Tin', 'Rin', 'Pin'];
    this.countries = ['USA', 'UK', 'Croatia', 'Germany'];

    // complex cases
    this.continent_1 = 'Europe';
    this.continent_2 = 'Asia';
    this.continentID = 1;

    this.controllerFields = ['users', 'countries'];
    this.userID = 0;
  }


  setValues() {
    this.$model.input_text01 = 'some text';
    this.$model.input_text_undefined;
    this.$model.input_text_obj = { a: 22 };
    this.$model.input_numberAsString = '157';
    this.$model.input_text01 = 'some text';
  }

  setCar() {
    this.$model.car = 'WV';
  }

  setUser() {
    this.$model.usersSelected = ['Rin', 'Pin'];
  }

  setCountry() {
    this.$model.countrySelected = 'Croatia';
  }

}
