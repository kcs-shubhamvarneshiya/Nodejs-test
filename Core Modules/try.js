// const objArr = [
//     { name: 'Eleven', show: 'Stranger Things' },
//     { name: 'Jonas', show: 'Dark' },
//     { name: 'Mulder', show: 'The X Files' },
//     { name: 'Ragnar', show: 'Vikings' },
//     { name: 'Scully', show: 'The X Files' },
//   ];
  
//   remainingArr = objArr.filter(data => data.name != 'Ragnar');
//   console.log(remainingArr);

/*********************************************** */

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

//*************************************** */

// var util = require('util');
 
// const debuglog = util.debuglog('alfa-beta');

//     debuglog('Hii there, debuglog from alfa-beta [%d]', 2333);

//     const generalLog = util.debuglog('alfa-');
//     const timerLog = util.debuglog('alfa-romeo');
//     const delay = 800;

//     generalLog('Leaving alfa-...');
//     console.log("Wait for timerLog...")
//     setTimeout(() => {
//         timerLog('timer fired after %d ', delay);
//     }, delay);

/******************** */
// const fs = require('fs');

//  const data = fs.readFileSync('something.js','utf-8');

//  console.log(data);

// Node.js program to demonstrate the
// util.debuglog() method

// Using require to access util module
const util = require('util');

const debugLog = util.debuglog('run-app');

// Use debuglog() method
debugLog('hello from my debugger [%d]', 123);
// SET NODE_DEBUG=run-app&&node util.js

// Another way to import debuglog
const { debuglog } = require('util');

const debuglogue = debuglog('run-app1');

// Use debuglog() method
debuglogue('hello from run-app [%d]', 123);

var a = "old Value";

let deebuglog = util.debuglog('run-app2',
	(debuging) => {

		// Replace with a logging function
		// that optimizes out
		a = "new Value";

		// Testing if the section is enabled
		deebuglog = debuging;
	});

// prints the debuglog function
console.log(util.inspect(deebuglog,
	showHidden = true, compact = true));

// Prints nothing
console.log(a);

// logs app *
deebuglog();

deebuglog('hi there, it\'s run-app [%d]', 2333);
