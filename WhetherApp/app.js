console.log('starting...');

setTimeout(() => {
    console.log('waiting state for 2 min');
}, 2000);

setTimeout(() => {
    console.log('waiting state for 0 min');
}, 0);

console.log('ending');