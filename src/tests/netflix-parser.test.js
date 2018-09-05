import expect from 'expect';
const fs = require('fs');
const path = require('path');
const exampleFetch = fs.readFileSync(path.resolve(__dirname, './assets/netflix/fetch-en-cc.txt'));

import '../../public/content-scripts/init';
import '../../public/content-scripts/init/parser';
import '../../public/content-scripts/netflix/parser';

const parser = window.DC.parser;

it('should correctly parse Netflix captions', done => {
  parser.parse(exampleFetch)
    .then(captions => {
      // TODO
      done();
    })
    .catch(err => { console.log(err)});
});
