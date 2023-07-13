import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachDoubledollar from '/views/pages/dd/dd-foreach-doubledollar.html?raw';



export default class DdForeachDoubledollarCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    // this.$debugOpts.ddText = true;
    this.setTitle('dd-foreach (Doubledollar)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachDoubledollar);
  }

  async __init(trx) {
    // example 1 & 2
    this.$model.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 }
    ];
    this.$model.selectedCompany = { name: 'not selected', size: 0 };

    // example 3
    this.myText = 'my initial text !'; // place before this.$model.cities
    this.$model.cities = [
      { name: 'Oslo', size: 31 },
      { name: 'Bonn', size: 51 },
      { name: 'Paris', size: 52 }
    ];

    // example 4
    this.myPlant = 2; // or '2'
    this.$model.plants = [];

    // example 5
    this.$model.myAnimal = 'dog';
    this.animals = ['cat', 'dog', 'cow', 'horse'];
  }


  changeCompanies() {
    const rnd1 = Math.round((Math.random() * 100));
    const rnd2 = Math.round((Math.random() * 100));
    const rnd3 = Math.round((Math.random() * 100));
    this.$model.companies = [
      { name: 'ABC Ltd', size: rnd1 },
      { name: 'Dugi Ltd', size: rnd2 },
      { name: 'Soko Ltd', size: rnd3 }
    ];
    this.$model.company = '';
  }

  selectCompany($$company) {
    console.log('selected company::', $$company);
    this.$model.company = $$company;
  }

  changeCities() {
    this.myText = 'my modified text !'; // place before this.$model.cities
    this.$model.cities = [
      { name: 'Zagreb', size: 3 },
      { name: 'Beograd', size: 5 },
      { name: 'Sarajevo', size: 8 },
      { name: 'Skoplje', size: 9 },
      { name: 'Ljubljana', size: 10 }
    ];
  }

  generatePlants() {
    this.$model.plants = [
      { id: 1, name: 'Corn', price: 8000 },
      { id: 2, name: 'Ananas', price: 4000 },
      { id: 3, name: 'Banana', price: 6000 },
      { id: 4, name: 'Potato', price: 1000 },
      { id: 5, name: 'Apple', price: 5000 }
    ];
  }



}
