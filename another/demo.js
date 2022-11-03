// setTimeout(()=>{
//     console.log('Two seconds hold')
// },2000)

// const names = ['Andrew','symonds','shubham']

// const shortName = names.filter((name)=>{
//     return name.length <= 4
// })

// const geocode = (address,callback)=>{
//     setTimeout(()=>{
//         const data ={
//             lattitude : 0,
//             longitude : 0
//         }
//         callback(data)
//     })
// }

// geocode('Ahemdabad',(data)=>{
//     console.log(data)
// })

// const sumFunc = (arg1,argv2,sumofTwo)=>{

//     setTimeout(() => {

//         const sum = arg1+argv2;

//         sumofTwo(sum);

//     }, 2000);

// }

// sumFunc(1,4,(data)=>{

//     console.log('sum is '+data);

// })

const minFunc = (arg1,arg2,minOfTwo)=>{
    const minus = arg1-arg2;
    minOfTwo(minus);
}

minFunc(5,6,(result)=>{
    console.log(result)
})