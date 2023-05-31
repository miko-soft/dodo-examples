import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import cookie from '/views/pages/lib/cookie.html?raw';



export default class Navig1Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSet = true;
    this.setTitle('Cookie');
    this.setDescription('Test the Cookie lib.');
    this.setKeywords('dodo, examples, Cookie');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', cookie);
  }

  __init(trx) {
    const cookieOpts = {
      domain: location.hostname,
      path: '/',
      expires: 5, // number of days or exact date
      secure: false,
      httpOnly: false,
      sameSite: 'strict' // 'strict' for GET and POST, 'lax' only for POST
    };
    this.cookie = new corelib.Cookie(cookieOpts, true);
  }


  // full name
  put_test() {
    this.cookie.put('full_name', this.full_name);
  }
  get_test() {
    const full_name = this.cookie.get('full_name');
    this.$model.cookieValue = full_name;
    console.log('full_name:', typeof full_name, full_name);
  }
  remove_test() {
    this.cookie.remove('full_name');
  }


  // myObj
  putObject_test() {
    console.log('putObject->', typeof this.myObj, this.myObj);
    this.cookie.putObject('myObj', this.myObj);
  }
  getObject_test() {
    const myObj = this.cookie.getObject('myObj');
    this.$model.cookieValue = myObj;
    console.log('myObj:', typeof myObj, myObj);
  }
  remove_myObj_test() {
    this.cookie.remove('myObj');
  }


  // myArr
  putObject_test2() {
    console.log('putObject->', typeof this.myArr, this.myArr);
    this.cookie.putObject('myArr', this.myArr);
  }
  getObject_test2() {
    const myArr = this.cookie.getObject('myArr');
    this.$model.cookieValue = myArr;
    console.log('myArr:', typeof myArr, myArr);
  }
  remove_myArr_test() {
    this.cookie.remove('myArr');
  }


  getAll_test() {
    const allCookies_string = this.cookie.getAll();
    console.log('getAll::', typeof allCookies_string, allCookies_string);
  }
  getObjectAll_test1() {
    const allCookies_object = this.cookie.getObjectAll();
    console.log('getObjectAll-convert type::', typeof allCookies_object, allCookies_object);
  }
  getObjectAll_test2() {
    const allCookies_object = this.cookie.getObjectAll(false);
    console.log('getObjectAll-don\'t convert type::', typeof allCookies_object, allCookies_object);
  }
  removeAll_test() {
    this.cookie.removeAll();
  }


  exists_test() {
    const doesExist = this.cookie.exists(this.cookie_name);
    console.log('doesExist:', doesExist);
  }

}
