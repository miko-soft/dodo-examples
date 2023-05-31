import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddModelMultilevelObject from '/views/pages/model/multilevel-object.html?raw';



export default class ModelMultilevelObjectCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Model - Mulitlevel Object');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddModelMultilevelObject);
  }

  __init(trx) {
    this.$model.car = { x: { y: { z: { w: {} } } } }; // this will not trigger render() method because the $model is initialised in __init()
    console.log('this.$model::', this.$model);
  }



  changeModel() {
    this.$model.car = { x: { y: { z: { w: { year: 2011 } } } } };
    console.log('this.$model::', this.$model);
  }

  setValue_test() {
    this.$modeler.use('car').setValue(2015, 'x.y.z.w.year');
    console.log('this.$model::', this.$model);
  }

  delValue_test() {
    this.$modeler.use('car').delValue('x.y.z.w.year');
    // delete this.$model.car.x.y.z.w.year; // delete will not trigger render()
  }



  getValue_carObj() {
    this.$model.carObj = this.$modeler.use('car').getValue();
  }

  getValue_carYear() {
    this.$model.carYear = this.$modeler.use('car').getValue('x.y.z.w.year');
  }


}
