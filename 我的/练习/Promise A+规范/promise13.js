class Promise {
    constructor(ww) {
        this.status = 'pending';
        this.value = undefined;
        this.fulfilledAry = [];
        this.rejectedAry = [];

        let resolve = result => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.status === 'pending') {
                    this.status = 'fulfilled';
                    this.value = result;
                    this.fulfilledAry.forEach(item => item());
                }
            }, 0)
        }
        let reject = reason => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.status === 'pending') {
                    this.status = 'rejected';
                    this.value = reason;
                    this.rejectedAry.forEach(item => item())
                }
            }, 0)
        }

        try {
            ww(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(fulfilledCb, rejectedCB) {
        fulfilledCb = typeof fulfilledCb !== 'function' ? () => {
            return this.value
        } : fulfilledCb;
        rejectedCB = typeof rejectedCB !== 'function' ? () => {
            throw new Error(this.value)
        } : rejectedCB;
        return new Promise((resolve, reject) => {
            this.fulfilledAry.push(() => {
                try {
                    let x = fulfilledCb(this.value);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                        return
                    }
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            })
            this.rejectedAry.push(() => {
                try {
                    let x = rejectedCB(this.value);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                        return
                    }
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    catch (rejectedCB) {
        return this.then(null, rejectedCB)
    }
    static all(promiseAry) {
        return new Promise((resolve, reject) => {
            let index = 0;
            let result = [];
            for (let i = 0; i < promiseAry.length; i++) {
                promiseAry[i].then(res => {
                    index++;
                    result[i] = res;
                    if (index === promiseAry.length) {
                        resolve(result)
                    }
                }, rej => {
                    reject(rej)
                })
            }
        })
    }
}
module.exports = Promise