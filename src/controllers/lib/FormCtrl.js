import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import libForm from '/views/pages/lib/form.html?raw';



export default class FormCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Form');
    this.setDescription('Test the Form lib.');
    this.setKeywords('dodo, examples, Form');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', libForm);
  }

  __init(trx) {
    this.testForm = new corelib.Form('testForm');
    this.testForm.debugOptions = {
      setControl: false,
      setControls: false,
      getControl: false,
      getControls: false,
      delControl: false,
      delControls: false
    };

    this.sleep = corelib.util.sleep;
  }


  // full name (input-text)
  setFullName() {
    this.testForm.setControl('fullName', 'John Doe');
  }
  getFullName() {
    const fullName = this.testForm.getControl('fullName');
    console.log('fullName::', fullName);
  }
  resetFullName() {
    this.testForm.delControl('fullName');
  }


  // age (input-number)
  setAge() {
    this.testForm.setControl('age', 23);
  }
  getAge() {
    const age = this.testForm.getControl('age');
    console.log('age::', typeof age, age);
  }
  resetAge() {
    this.testForm.delControl('age');
  }


  // country (select-one)
  setCountry() {
    this.testForm.setControl('country', 'Croatia');
  }
  getCountry() {
    const country = this.testForm.getControl('country');
    console.log('country::', country);
  }
  resetCountry() {
    this.testForm.delControl('country');
  }


  // family (select-multiple)
  setFamily() {
    this.testForm.setControl('family', ['Betty', 'Lara']);
  }
  getFamily() {
    const family = this.testForm.getControl('family');
    console.log('family::', family);
  }
  emptyFamily() {
    this.testForm.delControl('family');
  }


  // jobs (checkbox)
  setJobs() {
    this.testForm.setControl('jobs', ['IT', 'Marketing']);
  }
  getJobs() {
    const jobs = this.testForm.getControl('jobs');
    console.log('selected jobs::', jobs);
  }
  emptyJobs() {
    this.testForm.delControl('jobs');
  }


  setPet() {
    this.testForm.setControl('pet', 'cat');
  }
  getPet() {
    const pet = this.testForm.getControl('pet');
    console.log('selected pet::', pet);
  }
  emptyPet() {
    this.testForm.delControl('pet');
  }


  // autos - generated options with dd-foreach
  async generateAutos() {
    this.$model.autos = [
      { id: 1, name: 'Toyota', price: 8000 },
      { id: 2, name: 'WV', price: 4000 },
      { id: 3, name: 'BMW', price: 6000 },
      { id: 4, name: 'Fiat', price: 1000 },
      { id: 5, name: 'Audi', price: 5000 }
    ];
    await this.sleep(400);
    this.testForm.setControl('myAuto', '4'); // set selected value
  }
  getAuto() {
    const myAuto = this.testForm.getControl('myAuto');
    console.log('myAuto::', myAuto);
  }


  // plants - generated options with dd-foreach & dd-mustache
  async generatePlants() {
    this.$model.plants = [
      { id: 1, name: 'Corn', price: 8000 },
      { id: 2, name: 'Ananas', price: 4000 },
      { id: 3, name: 'Banana', price: 6000 },
      { id: 4, name: 'Potato', price: 1000 },
      { id: 5, name: 'Apple', price: 5000 }
    ];
    await this.sleep(400);
    this.testForm.setControl('myPlant', 3); // set selected value
  }
  getPlant() {
    const myPlant = this.testForm.getControl('myPlant');
    console.log('myPlant::', myPlant);
  }



  setAll() {
    this.testForm.setControls({
      fullName: 'Petar Pan',
      age: 48,
      country: 'Kenya',
      family: ['Mary', 'Betty'],
      jobs: ['IT'],
      pet: 'horse',
      myAuto: 5,
      myPlant: 5,
    });
  }



  // set control with name="fruit.seller.name"
  setFruit() {
    const fruit = {
      name: 'apple',
      price: 22,
      seller: {
        name: 'Drog Ltd',
        city: 'London'
      }
    };

    this.testForm.setControl('fruit.name', fruit.name);
    this.testForm.setControl('fruit.seller.name', fruit.seller.name);
  }



}
