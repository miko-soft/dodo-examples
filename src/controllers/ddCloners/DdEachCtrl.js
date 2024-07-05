import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddEach from '/views/pages/ddCloners/dd-each.html?raw';



export default class DdEachCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEach = true;
    this.setTitle('dd-Each');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddEach);
  }

  async __init(trx) {
    this.names = ['John', 'Peter', 'Linda'];
    this.$model.companies = [];
    this.cars = [
      { name: 'bmw', year: 1971 },
      { name: 'toyota', year: 1931 },
      { name: 'wv', year: 1978 },
    ];
  }


  printKey(key) {
    return key + 5;
  }


  setCompanies() {
    this.$model.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 },
      { name: 'Zen Ltd', size: 8 },
      { name: 'Den Ltd', size: 9 },
      { name: 'Len Ltd', size: 10 },
      { name: 'Pen Ltd', size: 81 },
      { name: 'Gen Ltd', size: 82 },
      { name: 'Ren Ltd', size: 83 }
    ];
  }

  printKey2(ind) {
    return ind + 1;
  }


  getCars() {
    return this.cars;
  }


  popupCarName(carName) {
    alert('CAR NAME: ' + carName);
  }


  tableCells(key) {
    console.log(this.cars);
    const car = this.cars[key];
    return `<td style="border:1px solid silver">${car?.name}</td><td style="border:1px solid silver">${car?.year}</td>`;
  }


  changeCompanies() {
    this.$model.companies = [
      { name: 'Cloud Ltd', size: this.getRnd() },
      { name: 'Roto Ltd', size: this.getRnd() },
      { name: 'Zen Ltd', size: this.getRnd() },
      { name: 'Den Ltd', size: this.getRnd() },
      { name: 'Len Ltd', size: this.getRnd() },
      { name: 'Pen Ltd', size: this.getRnd() },
      { name: 'Gen Ltd', size: this.getRnd() },
      { name: 'Ren Ltd', size: this.getRnd() }
    ];
  }
  getRnd() {
    return Math.round((Math.random() * 100));
  }
  compareSize(size) {
    return size > 50;
  }


}
