import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachNested3 from '/views/pages/dd/dd-foreach-nested3.html?raw';



export default class DdForeachNested3Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach (nested3)');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachNested3);
  }

  async __init(trx) {
    this.tables = ['T1', 'T2', 'T3'];

    this.columns = ['x', 'y', 'z'];

    this.$model.companies = [
      [
        { x: 'Cloud Ltd', y: 3, z: true },
        { x: 'Pjor Ltd', y: 5, z: true },
      ],
      [
        { x: 'Roko Ltd', y: 33, z: false },
        { x: 'Tin Ltd', y: 55, z: false },
      ],
      [
        { x: 'Rin Ltd', y: 333, z: false },
        { x: 'Oko Ltd', y: 555, z: true },
      ]
    ];

  }


  randomize() {
    const rnd1 = Math.round((Math.random() * 100));
    const rnd2 = Math.round((Math.random() * 100));
    const rnd3 = Math.round((Math.random() * 100));
    this.$model.companies = [
      { name: 'Cloud Ltd', size: rnd1 },
      { name: 'Roto Ltd', size: rnd2 },
      { name: 'Zen Ltd', size: rnd3 }
    ];
  }


}
