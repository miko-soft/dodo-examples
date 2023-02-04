import { Controller, corelib } from '@mikosoft/dodo';

export default class DataDdCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DataDd Test');
    this.addCSS(`
      .my-italic {
        font-style: italic;
      }
      .my-red {
        color: red;
      }
      .my-font-size {
        font-size: 21px;
      }
    `, '#myCSS');
    await this.loadView('#main', 'pages/datadd/main.html', 'inner');
  }

  async init(trx) {
    // initial values for the runFOR example
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

    // this.$model.companies2 = [];

    // initial values for runFOR2
    this.$model.herbals = [];

    // initial for runFORnested
    // this.$model.fields = ['name', 'from', 'to', 'duration']; // data-dd-print="$model.trains.$i2.($model.fields.$i3) @@ append"
    this.fields = ['name', 'from', 'to', 'duration']; // data-dd-print="$model.trains.$i2.(fields.$i3) @@ append"
    this.$model.trains = [
      { name: 'TRAIN-A', from: 'DU', to: 'ST', duration: 55 },
      { name: 'TRAIN-B', from: 'ST', to: 'KN', duration: 66 }
    ];

    this.$model.kids = [];

    // initial value for runREPEAT
    this.$model.multiplikator = 3;
    this.repeat_var_name = 'multiplikator';

    // initial values for the runSWITCH example
    this.$model.myColor = 'green';

    // initail value for data-dd-print with the pipe
    this.$model.longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.';
    this.$model.obj4json = { x: 555 };

    // text with the HTML
    this.htmlText = `The best <b style="color:red">man</b> friend is: <i data-dd-if="$model.bestFriend $ne('Dog')">NOBODY</i> <i data-dd-if="$model.bestFriend $eq('Dog')">DOG</i>`;

    // initial value for the data-dd-model
    this.$model.myMDL = { name: 'Smokie', animal: 'horse', article: 'Lorem ipsumus ...' };

    // initial value for the data-dd-checked
    this.$model.checks1 = ['Tin'];

    this.$model.bander = {
      name: 'Johnny',
      animal: 'dog',
      article: 'Some article ...'
    };

  }


  // if rend() is not used then default render() is executed
  // async rend() {
  //   this.renderGens();
  //   await syslib.util.sleep(10);
  //   this.renderNonGens();
  //   await syslib.util.sleep(10);
  //   await this.renderLsns();
  // }






  /*********** GENERATORS **********/

  // show array elements by using data-dd-for
  async runFOR() {
    this.$model.companies = [
      { name: 'Cloud2 Ltd', size: 3 },
      { name: 'Roto2 Ltd', size: 5 },
      { name: 'Zen2 Ltd', size: 8 },
      { name: 'Den2 Ltd', size: 81 },
      { name: 'Len2 Ltd', size: 82 },
      { name: 'Pen2 Ltd', size: 83 },
      { name: 'Gen2 Ltd', size: 84 },
      { name: 'Ren2 Ltd', size: 855 }
    ];
  }

  runFOR2() {
    this.$model.companies2 = [
      { name: 'Jedan doo', size: 1, address: 'Luma Street 47' },
      { name: 'Dva doo', size: 2, address: 'Texas rd. 28' }
    ];
  }

  // solve $i, {{}} and solveMath
  async runFORsolvers() {
    this.skipNum = 10;
    this.$model.herbals = ['corn', 'banana', 'plum', 'straw'];
  }


  // run data-dd-for inside data-dd-for
  async runFORnested() {
    this.$model.trains = [
      { name: 'TRAIN1', from: 'OS', to: 'NA', duration: 2 },
      { name: 'TRAIN2', from: 'OS', to: 'ZG', duration: 3 },
      { name: 'TRAIN3', from: 'SB', to: 'VK', duration: 5 }
    ];
  }


  // parse interpolated text in variable name
  async runFOR_solveInterpolated() {
    this.$model.kids = [
      { _id: 111, name: 'tom' },
      { _id: 222, name: 'jill' },
      { _id: 333, name: 'ben' }
    ];

    // await syslib.util.sleep(700);

    // print in the variable names with the interpolated text
    this.$model['kid_111'] = 'TOM';
    this.$model.kid_222 = 'JILL';
    this.$model.kid_333 = 'BEN';
  }



  // repeat the data-dd-repeat num times
  async runREPEAT(num) {
    this.$model.pets = [];
    this.$model.multiplikator = num;
  }


  // print initial value and after 1300ms the modified value
  async runPRINT() {
    this.$model.product = {
      name: 'Toyota',
      address: {
        city: 'London'
      },
      colors: ['red', 'green']
    };

    await corelib.util.sleep(1300);

    this.$model.product = { ...this.$model.product, ...{ address: { city: 'Zagreb' } } };

    await corelib.util.sleep(1300);

    this.$model.product.colors = ['blue', 'orange'];
    this.$modeler.use('product').mrender(); // call render() because this.$model.product.colors is not Proxy and render() will not be trigered
  }


  printHTML() {
    this.$model.bestFriend = 'Dog';
  }


  printHTML_solvemath(n) {
    this.ad_num = n;
    this.$model.advert___3 = '#3. I sell red Mercedes car.';
    this.$model.advert___4 = '#4. I sell chickens.';
  }


  print_nicepet() {
    this.$model.nicepetName = undefined;
    this.$model.nicepetName2 = 'Rexy';
  }




  /*********** NON-GENERATORS **********/
  runIF() {
    this.myNum = 5;
    this.myBool = false;
    this.myStr = 'some str';
    this.myArr = [5, 4, 'lorem'];
    this.$model.myStr_model = 'some str';

    this.$model.ifY = {
      bool: true,
      num: 5,
      str: 'some str'
    };
  }


  runIF2() {
    this.myNum2 = 5;
    this.myBool2 = false;
    this.myStr2 = 'some str';
    this.$model.myStr_model2 = 'some str';

    this.$model.ifY2 = {
      bool: true,
      num: 5,
      str: 'some str'
    };
  }


  // toggle if and show hide elements
  toggleIF() {
    this.$model.ifX = !this.$model.ifX;
    // console.log('toggleIF::', this.$model.ifX);
  }


  async toggleIF2() {
    this.$model.continent = !!this.$model.continent ? '' : 'Europe';
  }

  // toggle text color by using data-dd-elem
  runELEM() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.$dd.elems.myElem.style.color = 'blue';
    } else {
      this.$dd.elems.myElem.style.color = 'silver';
    }
  }


  // Here are two tests. First will show only one switchcase when red, blue, green is typed in the input field. Another test will show multiple switchcases.
  runSWITCH() {
    this.$model.obj = { myColors: ['green2', 'blue2'] };
  }

  // add CSS classes 'my-red' and 'my-font-size' to the element data-dd-class="myKlases"
  runCLASS() {
    this.$model.myKlases = ['my-red', 'my-font-size'];
  }

  // add style attribute values
  runSTYLE(fontSize, color) {
    this.$model.myStajl = { fontSize, color };
  }

  // define image src attribute
  runSRC() {
    this.$model.imageURL = 'http://cdn.dex8.com/img/turnkey_tasks/scraper_free.png';
  }


  runATTR() {
    this.$model.someURL = 'https://www.adsuu.com';
  }


  toggleDISABLED() {
    this.$model.isDisabled = !this.$model.isDisabled;
  }


  setVALUES() {
    this.$model.input_text01 = 'some text';
    this.$model.input_text_undefined;
    this.$model.input_text_obj = { a: 22 };
    this.$model.input_numberAsString = '157';
    this.$model.input_text01 = 'some text';
  }


  setCHECKED() {
    this.$model.checks1 = ['Pin', 'Tin'];
  }


  toggleSPINNER() {
    this.$model.showSpinner = !this.$model.showSpinner;
  }


  showSetinitial() {
    console.log('someNum_1::', typeof this.someNum_1, this.someNum_1);
    console.log('someNum_2::', typeof this.someNum_2, this.someNum_2);
  }

}
