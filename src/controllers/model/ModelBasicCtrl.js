import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import modelBasic from '/views/pages/model/basic.html?raw';



export default class ModelBasicCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.render = true;
    this.setTitle('Model - Basic');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', modelBasic);
  }

  async __init(trx) {
    this.$model.user = { name: 'John Doe', age: 11 }; // this will not trigger render() method because the $model is initialised in __init()
    this.$model.pets = [];
    console.log('this.$model::', this.$model);
  }


  async str() {
    this.$model.first_name = 'Saša';
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('first_name').setValue('Marko');
    await new Promise(r => setTimeout(r, 1300));
    this.$model.first_name = 'Petar'; // shortcut for  this.$model.use('first_name').setValue('Petar');
  }

  async obj() {
    this.$model.user = { name: 'John', age: { n: 23 }, isActive: false };
    await new Promise(r => setTimeout(r, 1300));
    this.$model.user = { name: 'Peter', age: 28, isActive: true };

    const user = this.$modeler.use('user').getValue();
    console.log('user::', user);
  }

  async arr() {
    this.$model.pets = ['dog', 'cat'];
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').mpush('rabbit');
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').mpop();
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').munshift('anaconda');
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').mshift();
  }


}
