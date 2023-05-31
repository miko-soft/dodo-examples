import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddModel from '../../views/pages/ddListeners/dd-model.html?raw';



export default class DdModelDdSetCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddModel = true;
    this.setTitle('dd-model');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddModel);
  }


  // input - text
  setInputText() {
    this.$model.myMdl_100 = 'Mon';
    this.$model.myMdl_101 = 'Don';
    this.$model.myMdl_102 = 'Ron';
  }
  resetInputText() {
    this.$model.myMdl_100 = '';
    this.$model.myMdl_101 = '';
    this.$model.myMdl_102 = '';
  }


  // input - number
  setInputNumber(n) {
    this.$model.myMdlNum = n;
  }
  resetInputNumber() {
    this.$model.myMdlNum = undefined;
    // this.$model.myMdlNum = ''; // this will also work like undefined
  }


  // input - text with --convertTYpe
  seeConsole_convertType() {
    console.log('myMdl_orig::', typeof this.$model.myMdl_orig, this.$model.myMdl_orig);
    console.log('myMdl_converted::', typeof this.$model.myMdl_converted, this.$model.myMdl_converted);
  }


  // radio
  setRadio() {
    this.$model.mdlRadio = 'YES';
  }
  resetRadio() {
    this.$model.mdlRadio = undefined;
    // this.$model.mdlRadio = ''; // this will also work like undefined
  }


  // checkbox
  setCheckboxes(x, y) {
    this.$model.myCheckbox = [x, y];
  }
  resetCheckboxes() {
    this.$model.myCheckbox = undefined;
    // this.$model.myCheckbox = []; // this will also work like undefined
  }


  // select-one
  setSelect() {
    this.$model.mySelect = 'Lara';
  }
  resetSelect() {
    this.$model.mySelect = undefined;
    // this.$model.mySelect = ''; // this will also work like undefined
  }


  // select-one
  setSelectMultiple() {
    this.$model.mySelectMultiple = ['18.923', 'false'];
  }
  resetSelectMultiple() {
    this.$model.mySelectMultiple = undefined;
    // this.$model.mySelectMultiple = []; // this will also work like undefined
  }


  // textarea
  setTextarea() {
    this.$model.myTextarea = 'I\'m who I am';
  }
  resetTextarea() {
    this.$model.myTextarea = undefined;
    // this.$model.myTextarea = []; // this will also work like undefined
  }


}
