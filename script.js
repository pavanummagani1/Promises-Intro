//BASIC EXAMPLE OF PROMISES
//PROMISE CREATION
let promise = new Promise((resolve, reject)=>{
    if(true){
        resolve();
    }
    else{
        reject()
    }
})

//PROMISE COMSUMPTION
promise.then(()=>{
    console.log('Success State');
}).catch(()=>{
    console.log('Failure State')
})

//EXAMPLE-2
let input1;
let promise1 = new Promise((resolve, reject)=>{
    if(input){
        resolve();
    }
    else{
        reject()
    }
})

promise1
.then(()=>console.log(`Success State: you have entered ${input}`))
.catch(()=>console.log("Failure State: You didn't entered any input"));

//Example-3
let input2='I LOVE JS'
let promise2 = new Promise((resolve, reject)=>{
    if(input2){
        resolve(`Success State: you have entered ${input2}`);
    }
    else{
        reject("Failure State: You didn't entered any input")
    }
})

promise2
.then((successRes)=>console.log(successRes))
.catch((failureRes)=>console.log(failureRes));

//Example promises with functions
function promise3(callback){
    return new Promise(callback)
}
promise3((resolve,reject)=>{
    resolve();
    // reject();
}).then(()=>console.log('SUCCESS'));


//Example Using timeout functions in Promises
let promise4 = new Promise((resolve,reject)=>{
    console.log('NEW PROMISE');
    setTimeout(()=>{
        resolve();
    },2000)
})
promise4.then(()=>{console.log('RESLOVED')})

//EXAMPLE
let promise5 = new Promise((resolve,reject)=>{
    console.log('Promise 5');
    setTimeout(()=>{
        resolve('PROMISE 5 SUCCES');
    },1000)
})
let promise6 = new Promise((resolve,reject)=>{
    console.log('Promise 6');
    setTimeout(()=>{
        resolve('PROMISE 6 SUCCES');
    },3000)
})
let promise7 = new Promise((resolve,reject)=>{
    console.log('Promise 7');
    setTimeout(()=>{
        resolve('PROMISE 7 SUCCES');
    },1500)
})

promise5.then((res5)=>console.log(res5));
promise6.then((res6)=>console.log(res6));
promise7.then((res7)=>console.log(res7));


//making Asynchronous code to execute in Synchrouns Code
let promise8 = new Promise((resolve,reject)=>{
    console.log('Promise 8');
    setTimeout(()=>{
        resolve('PROMISE 8 SUCCES');
    },1000);
})
let promise9 = new Promise((resolve,reject)=>{
    console.log('Promise 9');
    setTimeout(()=>{
        resolve('PROMISE 9 SUCCES');
    },3000);
})
let promise10 = new Promise((resolve,reject)=>{
    console.log('Promise 10');
    setTimeout(()=>{
        resolve('PROMISE 10 SUCCES');
    },1500);
})
promise8.then(res=>{
    console.log(res);
    promise9.then(res=>{
        console.log(res);
        promise10.then(res=>console.log(res))
    })
})
