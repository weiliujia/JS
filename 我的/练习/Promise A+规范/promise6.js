class Promisr {
    constructor(wlj) {
        this.status = 'pending';
        this.value = undefined;
        this.fulfilledAry = [];
        this.rejectefAry = [];
        let resolve = result => {
            let timer = setTimeout(() => {
                clearTimeout(timer)
                if (this.status === 'pending') {
                    this.status = 'fulfilled';
                    this.value = result;
                    this.fulfilledAry.forEach(item => item())
                }
            }, 0)

        }
        let reject = reason => {
            let timer = setTimeout(() => {
                clearTimeout(timer)
                if (this.status === 'pending') {
                    this.status = 'rejected';
                    this.value = reason;
                    this.rejectefAry.forEach(item => item())
                }
            }, 0)

        }
        try {
            wlj(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(fulfilledCB, rejectefCB) {
        fulfilledCB = typeof fulfilledCB !== 'function' ? () => {
            return this.value;
        } : fulfilledCB;
        rejectefCB = typeof rejectefCB !== 'function' ? () => {
            throw new Error(this.value)
        } : rejectefCB;
        return new Promise((resolve, reject) => {
            this.fulfilledAry.push(() => {
                try {
                    let x = fulfilledCB(this.value);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                        return;
                    }
                    resolve(x)
                } catch (e) {
                    reject()
                }
            })
            this.rejectefAry.push(() => {
                try {
                    let x = rejectefCB(this.value);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                        return;
                    }
                    resolve(x)
                } catch (e) {
                    reject()
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