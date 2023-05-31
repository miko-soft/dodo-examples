import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddClick from '../../views/pages/ddListeners/dd-click.html?raw';



export default class DdClickCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddClick = true;
    this.setTitle('dd-click');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddClick);
  }

  async __init() {
    // test <button dd-click="print.inConsole.makeRed($element)">CLICK</button>
    this.print = {
      inConsole: {
        makeRed: (elem) => {
          console.log(elem);
          elem.style.color = 'orangered';
          elem.style.backgroundColor = 'lightblue';
        }
      }
    };

    // test CLICK2
    this.products = [
      { name: 'Toy', price: 22.34 },
      { name: 'Flower', price: 88.56 },
    ];

    // test CLICK assignment
    this.$model.cats = ['Kiki', 'Pepa'];
    this.$model.ass_5 = {};

    this.$model.answer = { req: {}, res: {}, time: {} };
  }


  async callAPI() {
    const answer = await this.$httpClient.askJSON('api.dex8.com');
    // const answer = await this.httpClient.askJSON('https://jsonplaceholder.typicode.com/todos/1', 'GET');
    // const answer = await this.httpClient.askJSON('https://jsonplaceholder.typicode.com/posts?userId=1', 'GET');
    // const answer = await this.httpClient.askJSON('https://jsonplaceholder.typicode.com/posts', 'POST', {title: 'foo', body: 'bar', userId: 1});
    // const answer = await this.httpClient.askJSON('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {id: 1, title: 'foogoo', body: 'barboo', userId: 3});
    // const answer = await this.httpClient.askJSON('https://jsonplaceholder.typicode.com/posts/1', 'DELETE');
    // const answer = await this.httpClient.askJSON('https://api.dex8.com?q=my str'); // test encodeURI
    // const answer = await this.httpClient.ask('api.dex8.com'); // to test 408 timeout set opts:: timeout:10,retry:5,retryDelay:1300
    return answer;
  }


  // A) fetch the API response and show it in the dd-text element   B) change the clicked button color
  async runCLICK(n, str, ...rest) {
    console.log('This is a click. Params::', n, str, rest);
    this.$model.answer = await this.callAPI();
    console.log('answer::', this.$model.answer);

    // make the clicked button green
    if (rest[2]) {
      const elem = rest[2];
      elem.style.color = 'red';
      elem.style.backgroundColor = 'lightgreen';
    }
  }


  runCLICK2(prods) {
    console.log('this.products::', prods);
  }

  runCLICK3(str, num, bool, reg) {
    console.log('str::', typeof str, str);
    console.log('num::', typeof num, num);
    console.log('bool::', typeof bool, bool);
    console.log('reg::', typeof reg, reg, '--- reg.test("oglas")::', reg.test('oglas'));
  }

  // click on the INPUT tag
  runCLICK4(val) {
    console.log('val::', typeof val, val);
  }


  // run two methods by one click
  runCLICK5a(val) {
    console.log('runCLICK5a-val::', typeof val, val);
  }
  runCLICK5b(val) {
    console.log('runCLICK5b-val::', typeof val, val);
  }
}
