// const objArr = [
//     { name: 'Eleven', show: 'Stranger Things' },
//     { name: 'Jonas', show: 'Dark' },
//     { name: 'Mulder', show: 'The X Files' },
//     { name: 'Ragnar', show: 'Vikings' },
//     { name: 'Scully', show: 'The X Files' },
//   ];
  
//   remainingArr = objArr.filter(data => data.name != 'Ragnar');
//   console.log(remainingArr);


// const fs = require('fs')
// require('colors');

// console.log('start reading a file...')

// fs.readFile('./note.json', 'utf-8',  (err, content) => {

//   if (err) {
//     console.log('error happened during reading the file')
//     return console.log(err.message.red.bold.inverse)
//   }

//   console.log("Content is : "+content.yellow)
// })

// console.log('end of the file')

var util = require('util');
 
const debuglog = util.debuglog('alfa-beta');

    debuglog('Hii there, debuglog from alfa-beta [%d]', 2333);

    const generalLog = util.debuglog('alfa-');
    const timerLog = util.debuglog('alfa-romeo');
    const delay = 800;

    generalLog('Leaving alfa-...');
    console.log("Wait for timerLog...")
    setTimeout(() => {
        timerLog('timer fired after %d ', delay);
    }, delay);