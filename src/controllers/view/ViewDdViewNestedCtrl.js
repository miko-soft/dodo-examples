import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddViewNested from '../../views/pages/view/ddview-nested.html?raw';
import inc1 from '../../views/inc/test/inc1.html?raw';
import inc2 from '../../views/inc/test/inc2.html?raw';
import inc3 from '../../views/inc/test/inc3.html?raw';
import inc10 from '../../views/inc/test/inc10.html?raw';


export default class ViewDdViewNestedCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddInc = false; // debugging

    this.setTitle('dd-inc');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');

    this.loadView('#navbar', navbar);
    this.loadView('#main', ddViewNested);

    this.loadView('#A-inc1', inc1, 'inner');
    this.loadView('#B-inc2', inc2, 'prepend');
    this.loadView('#C-inc3', inc3, 'append');

    this.loadView('#A-inc10', inc10, 'sibling', 'p > b');

    this.loadView('#A-inc3', inc3, 'prepend');
  }

}
