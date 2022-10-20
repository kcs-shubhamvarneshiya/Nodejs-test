console.log('starting...');

setTimeout(() => {
    console.log('waiting state for 2 min');
}, 2000);

setTimeout(() => {
    console.log('waiting state for 0 min');
}, 0);

setInterval(()=>{
    console.log('i will be called again and again...')
},2000);

console.log('ending');