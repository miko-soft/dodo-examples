import { Controller } from '@mikosoft/dodo';

export default class ModelCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - Model');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/model/main.html');
  }


  async init(trx) {
    this.$model.user = { name: 'John Doe', age: 11 }; // this is ok because $model is used after loader()
    console.log('this.$model::', this.$model);
  }




  async str() {
    this.$model.first_name = 'Saša';
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('first_name').setValue('Marko');
    await new Promise(r => setTimeout(r, 1300));
    this.$model.first_name = 'Petar'; // shortcut for this.$model.use('first_name').setValue('Petar');
  }


  async obj() {
    this.$model.user = { name: 'John', age: 23, isActive: false };
    await new Promise(r => setTimeout(r, 1300));
    this.$model.user = { name: 'Peter', age: 28, isActive: true };
  }


  async arr() {
    this.$model.pets = ['dog', 'cat'];
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').mpush('rabbit'); // add at the end of array
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').mpop(); // remove last element of array
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').munshift('anaconda'); // add on the beginning of array
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('pets').mshift(); // remove first element of array
  }


  async level5() {
    this.$model.car = { x: { y: { z: { w: { year: 2011 } } } } };
    await new Promise(r => setTimeout(r, 1300));
    this.$modeler.use('car').setValue(2015, 'x.y.z.w.year');
    await new Promise(r => setTimeout(r, 1300));
    const car = this.$modeler.use('car').getValue();
    console.log('car::', car);
    const year = this.$modeler.use('car').getValue('x.y.z.w.year');
    console.log('year::', year);

    this.$model.yearOfCar = year;
    await new Promise(r => setTimeout(r, 1300));
    delete this.$model.yearOfCar; // delete will not render the $model
  }


  modelSeeConsole() {
    console.log('myMdl1::', typeof this.$model.myMdl1, this.$model.myMdl1);
    console.log('myMdl2::', typeof this.$model.myMdl2, this.$model.myMdl2);
    console.log('myMdl3::', typeof this.$model.myMdl3, this.$model.myMdl3);
  }


}
