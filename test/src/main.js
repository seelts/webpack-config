const flatten = require('lodash/flatten');

import './main.css';

(() => {
  console.log(...[1, 2, 3]);
  class Test {
    array = [[1, 2], [3, 4]];

    run() {
      console.log(flatten(this.array));
    }
  }

  new Test().run();
})();
