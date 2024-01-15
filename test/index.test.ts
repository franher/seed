import tap from 'tap';

import { helloWorld } from '../src/index';

tap.test('it should return Hello world!', (t) => {
  t.plan(1);
  const actual = helloWorld();
  const expected = 'Hello world!';
  t.equal(actual, expected);
});
