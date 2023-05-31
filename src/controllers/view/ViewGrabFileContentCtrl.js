import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import grabFileContent from '../../views/pages/view/grabFileContent.html?raw';
// import part1 from '../../views/pages/view/test/part1.html?raw';
// import part2 from '../../views/pages/view/test/part2.html?raw';
// import part3 from '../../views/pages/view/test/part3.html?raw';



export default class ViewGrabFileContentCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.loadView = true;
    this.setTitle('grabFileContent');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', grabFileContent);

    // get and load HTML strings
    const part1 = await this.grabFileContent('/views/pages/view/test/part1.html'); // instead of using import part1 from '../../views/pages/view/test/part1.html?raw'
    this.loadView('#part1', part1, 'sibling');

    const part2 = await this.grabFileContent('/views/pages/view/test/part2.html');
    this.loadView('#part2', part2, 'append');

    const part3 = await this.grabFileContent('/views/pages/view/test/part3.html');
    this.loadView('#part3', part3, 'prepend');
  }

}
