new Promise((res, rej) => {
    // setTimeout(() => {
        res(100)
    // },0)

}).then(res=>{
    console.log(res);
    
})
setTimeout(res=>{
    console.log(200);
    
})

async function fn() {
    return 300
}
fn().then(res=>{
    console.log(res);
    
})

process.nextTick(res=>{
    console.log(1000);
    
})