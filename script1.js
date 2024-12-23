function promise5(msg) {
    return new Promise((reslove, reject) => {
        console.log(`NEW PROMISE ${msg}`);
        setTimeout(() => {
            reslove();
        }, 5000)
    })
}
promise5('STARTED').then(() => {
    console.log('RESOLVED');
})

//PROMISES-2
function placeOrder(orderId) {
    return new Promise((reslove, reject) => {
        if (true) {
            setTimeout(() => reslove(`Order Placed With ${orderId}`), 1000)
        }
        else {
            setTimeout(() => reject(`Order didn't Placed`), 1000)
        }
    })
}
function dispatchOrder(orderId) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve(`${orderId} Is Dispatched`), 1000)
        }
        else {
            setTimeout(() => reject(`${orderId} failed to Dispatch`), 1000)
        }
    })
}

function shipOrder(orderId) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve(`${orderId} Is shipped`), 1000)
        }
        else {
            setTimeout(() => reject(`${orderId} failed  to ship`), 1000)
        }
    })
}
function outForDelivery(orderId) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve(`${orderId} Is out for Delivery`), 1000)
        }
        else {
            setTimeout(() => reject(`${orderId} failed  for out For delivery`), 1000)
        }
    })
}
function deliverOrder(orderId) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve(`${orderId} is Delivered`), 1000)
        }
        else {
            setTimeout(() => reject(`${orderId} failed to deliver`), 1000)
        }
    })
}

placeOrder('12345').then((res)=>{console.log(res)
    dispatchOrder('12345').then((res)=>{console.log(res)
        shipOrder('12345').then((res)=>{console.log(res)
            outForDelivery('12345').then((res)=>{console.log(res)
                deliverOrder('12345').then((res)=>{console.log(res)
                    console.log('TRACKING COMPLETED')
                })
            }) 
        })
    })
})


// placeOrder('12345').then((res)=>{console.log(res)})
// dispatchOrder('12345').then((res)=>{console.log(res)})
// shipOrder('12345').then((res)=>{console.log(res)})
// outForDelivery('12345').then((res)=>{console.log(res)})
// deliverOrder('12345').then((res)=>{console.log(res)})