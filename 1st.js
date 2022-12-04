const catsay = require('@miaos/catsay');
// or
import * as catsay from '@miaos/catsay'

console.log(catsay.say('我爱你'));

console.log(catsay.say({
  text: 'I Love You',
  eye: '9', // eye of cat
  E: '9', // short for eye
  mouse: 'w', // mouse of cat
  M: 'w', // short for mouse
  boxStyle: 'box', // box or topAndBottomLine, default is box
  B: 'box', // short for boxStyle
}));

console.log(catsay.think('I Love You'));