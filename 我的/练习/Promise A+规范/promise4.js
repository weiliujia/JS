class Promise {
    constructor(excutor) {
        this.status = 'pending';
        this.value = undefined;
        this.fulfillendAry = [];
        this.rejectedAry = [];

        let resolve = result => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.status === 'pending') {
                    this.status = 'fulfilled';
                    this.value = result;
                    this.fulfillendAry.forEach(item => item())
                }
            }, 0);
        }
        let reject = reason => {
            let timer = setTimeout(() => {
                clearTimeout(timer)
                if (this.status === 'pending') {
                    this.status = 'rejected';
                    this.value = reason;
                    this.rejectedAry.forEach(item => item())
                }
            }, 0)
        }
        try {
            excutor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(fulfillendCB, rejectedCB) {
        fulfillendCB = typeof fulfillendCB !== 'function' ? () => {
            return this.value;
        } : fulfillendCB;
        rejectedCB = typeof rejectedCB !== 'function' ? () => {
            throw new Error(this.value);
        } : rejectedCB
        return new Promise((resolve, reject) => {
            this.fulfillendAry.push(() => {
                try {
                    let x = fulfillendCB(this.value);
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                        return
                    }
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            })
            this.rejectedCB.push(()=>{
                try{
                    let x = rejectedCB(this.value);
                    if(x instanceof Promise){
                        x.then(resolve,reject)
                        return;
                    }
                    resolve(x)
                }catch(e){
                    reject(e)
                }
            })
        })
    }
    catch(rejectedCB){
        return this.rejectedCB(null,rejectedCB)
    }
    static all(promiseAry){
        return new Promise((resolve,reject)=>{
            let index = 0;
            let result = [];
            for (let i = 0; i < promiseAry.length; i++) {
                promiseAry[i].then(res=>{
                    index++;
                    result[i]=res;
                    if (index === promiseAry.length) {
                        resolve(result)
                    }
                },rej=>{
                    reject(rej)
                }) 
            }
        })
    }

}
module.exports = Promise