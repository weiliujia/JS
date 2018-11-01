//求和

export default function (...ary) {
    let con = 0
    for (var i = 0; i < ary.length; i++) {
        if (!isNaN(ary[i])) {
            con += Number(ary[i])
        }
    }
    return con
}